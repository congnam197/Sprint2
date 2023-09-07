import { useState } from "react";
import { Link, json } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
export default function Header() {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUserName] = useState(
    JSON.parse(localStorage.getItem("username"))
  );
  // const [role, setRole] = useState(json.parse(localStorage.getItem("role")));

  //logout
  const handleLogOut = () => {
    localStorage.setItem("username", null);
    setUserName(null);
    navigate("");
    // Swal.fire({
    //   title:"Đăng xuất thành công!",
    //   timer:500,
    //   icon :"success"
    //     })
  };
  // active navbar
  const handleActive = (name) => {
    if (name === "trangchu") {
      setActive("trangchu");
    } else if (name === "shop") {
      setActive("shop");
    }
  };

  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("username")));
  }, [location]);

  // header-top
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header-top-static');
            const scrollTop = window.scrollY;
            scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };

  return (
    <>
      {/* Header Section Begin */}

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
                <Link onClick={handleLogOut} className="login-panel">
                  <i className="fa fa-user" />
                  Xin chào <span className="username">{username.username}</span>
                  <span className="logout"> Đăng xuất</span>
                </Link>
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
                    />
                    <button type="button">
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
                        <span>1</span>
                      </a>
                    </li>
                    <li className="cart-icon">
                      <a href="#">
                        <i className="icon_bag_alt" />
                        {/* số lượng sp trong giỏ hàng */}
                        <span>2</span>
                      </a>
                      <div className="cart-hover">
                        <div className="select-items">
                          <table>
                            <tbody>
                              <tr>
                                <td className="si-pic">
                                  <img
                                    src="img/cart-page/1.png"
                                    alt=""
                                  />
                                </td>
                                <td className="si-text">
                                  <div className="product-selected">
                                    <p>1,800,000 x 2</p>
                                    <h6>Air Jordan 4 Retro</h6>
                                  </div>
                                </td>
                                <td className="si-close">
                                  {/* xóa sp */}
                                  <i className="ti-close" />
                                </td>
                              </tr>
                              <tr></tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="select-total">
                          <span>total:</span>
                          <h5>3,600,000 đ</h5>
                        </div>
                        <div className="select-button">
                          <Link
                            to="/shopping-cart"
                            className="primary-btn view-card"
                          >
                            Xem chi tiết
                          </Link>
                          <Link
                            to="/check-out"
                            className="primary-btn checkout-btn"
                          >
                            Thanh Toán
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="cart-price">3,600,000 đ</li>
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
                          <Link to="" className="primary-btn view-card">
                            Xem chi tiết
                          </Link>
                          <Link to="" className="primary-btn checkout-btn">
                            Thanh Toán
                          </Link>
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
                  <li className="active">
                    <a href="#">Nike</a>
                  </li>
                  <li>
                    <a href="#">Adidas</a>
                  </li>
                  <li>
                    <a href="#">Gucci</a>
                  </li>
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
                    <li>
                      <Link to="#">Nam</Link>
                    </li>
                    <li>
                      <Link to="#">Nữ</Link>
                    </li>
                    <li>
                      <Link to="#">Trẻ em</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./blog.html">Tin tức</a>
                </li>
                <li>
                  <a href="./contact.html">Liên Hệ</a>
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
