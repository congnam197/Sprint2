import { useState } from "react";
import { Link, json } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getAllBrand } from "../service/Brand";
import { getProductTypes } from "../service/ProductType";
import { getCartByIdAccount, totalProductOnCart } from "../service/Cart";
import { Dropdown } from "bootstrap-4-react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalHeader from 'react-bootstrap/ModalHeader'
import { Container, Row, Col } from "react-bootstrap";
import {
  getCart,
  getNumberOfProductsInCart,
} from "../store/actions/cartActions";
import { getTotalPrice } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getInfoUser } from "../service/User";
import moment from "moment/moment";
export default function Header() {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUserName] = useState(
    JSON.parse(localStorage.getItem("username"))
  );
  const [brands, setBrands] = useState([]);
  const [flag, setFlag] = useState();
  const [numProduct, setNumProduct] = useState(0);
  const numberOfProductsInCart = useSelector(getCart);
  const dispatch = useDispatch();
  const getCountCheck = useSelector(getNumberOfProductsInCart);
  const [money, setMoney] = useState(0);
  const [customer, setCustomer] = useState({});
  const [modalShow, setModalShow] = useState(false);

  // getCustomer
  const getCustomer = async () => {
    const response = await getInfoUser(username);
    setCustomer(response);
  };

  //get brand
  const getBrand = async () => {
    const response = await getAllBrand();
    setBrands(response);
  };
  const page = 0;

  //logout
  const handleLogOut = async () => {
    localStorage.clear();
    setFlag(!flag);
  };
  // active navbar
  const handleActive = (name) => {
    if (name === "trangchu") {
      setActive("trangchu");
    } else if (name === "shop") {
      setActive("shop");
    }
  };

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header-top-static");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
      searchByName();
    }
  };

  //tìm kiếm theo tên
  const searchByName = async () => {
    let name = document.getElementById("search").value.trim();
    if (name == "") {
      navigate(`/shop`);
    } else {
      navigate(`/shop/${name}`);
      document.getElementById("search").value = "";
    }
  };
  //getTypeProduct
  const [productTypes, setProductTypes] = useState([]);
  const getTypeProduct = async () => {
    const result = await getProductTypes();
    setProductTypes(result);
  };

  //getListCart
  const [carts, setCarts] = useState([]);
  const getCarts = async () => {
    const result = await getCartByIdAccount();
    setCarts(result);
  };

  //số lượng sp trong cart
  const getTotalProductOnCart = async () => {
    try {
      const data = await totalProductOnCart();
      setNumProduct(data);
    } catch (error) {
      setNumProduct(0);
    }
  };
  useEffect(() => {
    getTypeProduct();
    getBrand();
    getTotalProductOnCart();
  }, []);
  useEffect(() => {
    getTotalProductOnCart();
  }, [location, flag]);

  //tổng tiền trong cart
  // const [totalPrice, setTotalPrice] = useState(0);
  const getTotalPriceOnCart = () => {
    try {
      const total = carts.reduce((total, item) => {
        return (
          item.quantity *
            ((item.product.price * (100 - item.product.discount.percent)) /
              100) +
          total
        );
      }, 0);
      setMoney(total);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleActive();
    setUserName(JSON.parse(localStorage.getItem("username")));
  }, [location]);

  // header-top
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  useEffect(() => {
    getCarts();
    getCustomer();
  }, [username, location]);

  useEffect(() => {
    getTotalPriceOnCart();
  }, [numProduct, carts]);
  function MydModalWithGrid(props) {
    if (username == null) {
      return <></>;
    }
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            THÔNG TIN CÁ NHÂN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <p className="h6">Họ và tên: {customer.username}</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="h6"> Giới tính: {customer.gender == false ? "Nữ" : "Nam"}</p>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <p className="h6">
                  Ngày sinh : 
                  {moment(`${customer.dateOfBirth}`).format("DD-MM-YYYY")}
                </p>
              </Col>
              <Col xs={12} md={6}>
                <p className="h6">Số điện thoại : {customer.numberPhone}</p>
              </Col>
              <Col xs={12} md={8}>
                <p className="h6">Email: {username}</p>
              </Col>
              <Col xs={12} md={12}>
                <p className="h6">Địa chỉ: {customer.address}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      {/* Header Section Begin */}

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />

      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="ht-left">
              <div className="mail-service">
                <i className=" fa fa-envelope" />
                yt_sneaker37@gmail.com
              </div>
              <div className="phone-service">
                <i className=" fa fa-phone" />
                +84 979.274.983
              </div>
            </div>
            <div className="ht-right">
              {username != null ? (
                <Dropdown>
                  <Dropdown.Button secondary id="dropdownMenuButton">
                    <i className="fa fa-user" />
                    Xin chào <span className="username">{username}</span>
                  </Dropdown.Button>
                  <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                    <Dropdown.Item>
                      <Link
                        variant=""
                        onClick={() => setModalShow(true)}
                      >
                       <span className="logout"> Thông tin cá nhân</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      {" "}
                      <Link to="/history" className="">
                        <span className="logout"> Lịch sử mua hàng</span>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/home" onClick={handleLogOut} className="">
                        <span className="logout"> Đăng xuất</span>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link to="/login" className="login-panel">
                  <i className="fa fa-user" />
                  Đăng nhập
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="inner-header">
            <div className="row">
              <div className="col-lg-2 col-md-2">
                <div className="logo">
                  <Link to="/home">
                    <img src="img/logo.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="advanced-search">
                  <button type="button" className="category-btn">
                    Tất cả
                  </button>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Bạn muốn tìm sản phẩm gì..."
                      id="search"
                      onKeyDown={handleKeyDown}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        searchByName();
                      }}
                    >
                      <i className="ti-search" />
                    </button>
                  </div>
                </div>
              </div>
              {username != null ? (
                <div className="col-lg-3 text-right col-md-3">
                  <ul className="nav-right">
                    <li className="heart-icon">
                      <a href="#">
                        <i className="icon_heart_alt" />
                        {/* số lượt yêu thích */}
                        <span>0</span>
                      </a>
                    </li>
                    <li className="cart-icon">
                      <Link to="shopping-cart">
                        <i className="icon_bag_alt" />
                        {/* số lượng sp trong giỏ hàng */}
                        {getCountCheck == 0 ? (
                          <span>{numProduct}</span>
                        ) : (
                          <span>{numberOfProductsInCart}</span>
                        )}
                      </Link>
                    </li>
                    <li className="cart-price">
                      {/* <CurrencyFormat value={money}></CurrencyFormat> đ */}
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="col-lg-3 text-right col-md-3">
                  <ul className="nav-right">
                    <li className="heart-icon">
                      <a href="#">
                        <i className="icon_heart_alt" />
                        {/* số lượt yêu thích */}
                        <span></span>
                      </a>
                    </li>
                    <li className="cart-icon">
                      <a href="#">
                        <i className="icon_bag_alt" />
                        {/* số lượng sp trong giỏ hàng */}
                        <span></span>
                      </a>
                      <div className="cart-hover">
                        <div className="select-items">
                          <table>
                            <tbody>
                              <tr>Giỏ hàng trống</tr>
                              <tr></tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="select-total">
                          <span>total:</span>
                          <h5>0 đ</h5>
                        </div>
                        <div className="select-button">
                          <Link
                            to="/shopping-cart"
                            className="primary-btn view-card"
                          >
                            Xem chi tiết
                          </Link>
                          {/* <Link to="" className="primary-btn checkout-btn">
                            Thanh Toán
                          </Link> */}
                        </div>
                      </div>
                    </li>
                    <li className="cart-price">0 đ</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="nav-item header-top-static">
          <div className="container">
            <div className="nav-depart">
              <div className="depart-btn">
                <i className="ti-menu" />
                <span>Tất cả các hãng</span>
                <ul className="depart-hover">
                  {brands != null &&
                    brands.map((brand) => {
                      return (
                        <li className="" key={brand.id}>
                          <Link to={`/shop-brand/${brand.nameBrand}`}>
                            {brand.nameBrand}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <nav className="nav-menu mobile-menu">
              <ul>
                <li
                  onClick={() => handleActive("trangchu")}
                  className={`${active === "trangchu" ? "active" : ""}`}
                >
                  <Link to={"/home"}>Trang chủ</Link>
                </li>
                <li
                  onClick={() => handleActive("shop")}
                  className={`${active === "shop" ? "active" : ""}`}
                >
                  <Link to="/shop">Sản Phẩm</Link>
                </li>
                <li>
                  <a href="#">Bộ Sưu Tập</a>
                  <ul className="dropdown">
                    {productTypes &&
                      productTypes.map((type) => {
                        return (
                          <li key={type.id}>
                            <Link to={`/shop-type/${type.productType}`}>
                              {type.productType}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </li>
                <li>
                  <Link to="/blog.html">Tin tức</Link>
                </li>
                <li>
                  <Link to="/contact.html">Liên Hệ</Link>
                </li>
              </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
          </div>
        </div>
      </header>
    </>
  );
}
