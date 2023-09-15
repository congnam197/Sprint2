import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CurrencyFormat from "../format/Format";
import Slider from "react-slider";
import { getAllProductByIdBrand } from "../service/Product";
import { addProductToCart } from "../service/Cart";
export default function ShopBrand() {
  const param = useParams();
  const [page, setPage] = useState(9);

  useEffect(() => {
    document.title = "Sản phẩm";
  }, []);
  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(98);

  const handleSliderChange = (newValues) => {
    setMinAmount(newValues[0]);
    setMaxAmount(newValues[1]);
  };
  // lấy sản phẩm

  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    const result = await getAllProductByIdBrand(param.data[0], page);
    setProducts(result);
  };
  const loadMore = async () => {
    setPage((page) => page + 3);
  };
// adđ-to-cart
const handleAddToCart = async (id, name) => {
  try {
    await addProductToCart(id);
    alert("thêm" + name + "vào giỏ");
  } catch {
    alert("đăng nhập");
  }
};
  useEffect(() => {
    getProduct();
  }, [param]);
   useEffect(()=>{
    getProduct();
   },[page])


  //back-top-top
  const [showsScrolBtn, setShowScrolBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowScrolBtn(true) : setShowScrolBtn(false);
    };

    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.addEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="/home">
                  <i className="fa fa-home" /> Home
                </Link>
                <span>Sản phẩm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
              <div className="filter-widget">
                <h4 className="fw-title">Bộ sưu tập</h4>
                <ul className="filter-catagories">
                  <li>
                    <a href="#">Nam</a>
                  </li>
                  <li>
                    <a href="#">Nữ</a>
                  </li>
                  <li>
                    <a href="#">Trẻ Em</a>
                  </li>
                </ul>
              </div>
              
              <div className="filter-widget">
                <h4 className="fw-title">Giá</h4>
                <div className="filter-range-wrap">
                  <div className="range-slider">
                    <div className="price-input">
                      <input
                        type="text"
                        id="minamount"
                        value={minAmount}
                        readOnly
                      />
                      <input
                        type="text"
                        id="maxamount"
                        value={maxAmount}
                        readOnly
                      />
                    </div>
                  </div>
                  <Slider
                    min={1}
                    max={98}
                    value={[minAmount, maxAmount]}
                    onChange={handleSliderChange}
                    className="price-range"
                    type="ranger"
                  />
                </div>
                <a href="#" className="filter-btn">
                  Tìm kiếm
                </a>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Màu sắc</h4>
                <div className="fw-color-choose">
                  <div className="cs-item">
                    <input type="radio" id="cs-black" />
                    <label className="cs-black" htmlFor="cs-black">
                      Đen
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-violet" />
                    <label className="cs-violet" htmlFor="cs-violet">
                      Trắng
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-blue" />
                    <label className="cs-blue" htmlFor="cs-blue">
                      Xanh
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-yellow" />
                    <label className="cs-yellow" htmlFor="cs-yellow">
                      Vàng
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-red" />
                    <label className="cs-red" htmlFor="cs-red">
                      Đỏ
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-green" />
                    <label className="cs-green" htmlFor="cs-green">
                      Green
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Size</h4>
                <div className="fw-size-choose">
                  <div className="sc-item">
                    <input type="radio" id="s-size" />
                    <label htmlFor="s-size">41</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="m-size" />
                    <label htmlFor="m-size">42</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="l-size" />
                    <label htmlFor="l-size">43</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="xs-size" />
                    <label htmlFor="xs-size">44</label>
                  </div>
                </div>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Tags</h4>
                <div className="fw-tags">
                  {/* <a href="#">Towel</a>
                                        <a href="#">Shoes</a>
                                        <a href="#">Coat</a>
                                        <a href="#">Dresses</a>
                                        <a href="#">Trousers</a>
                                        <a href="#">Men's hats</a>
                                        <a href="#">Backpack</a> */}
                </div>
              </div>
            </div>

            {/* product List */}
            <div className="col-lg-9 order-1 order-lg-2">
            <div className="product-show-option">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="select-option">
                      <select className="sorting">
                        <option value="">Giá cao đến thấp</option>
                        <option value="">Giá thấp đến cao</option>
                        <option value="">Tên A-Z </option>
                        <option value="">Tên Z-A</option>
                      </select>
                      
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 text-right">
                    <p>
                      Kết quả tìm kiếm{" "}
                      <span className="quantity">{products.length}</span>{" "}
                      sản phẩm
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-list">
                <div className="row">
                  {products != null &&
                    products.map((product) => {
                      return (
                        <div className="col-lg-4 col-sm-6" key={product.id}>
                        <div className="product-item">
                          <div className="pi-pic">
                            <img
                              src={product.imageMain}
                              alt=""
                              style={{ height: "220px" }}
                            />
                            {product.discount.id == 1 ? (
                              <div className=""></div>
                            ) : (
                              <div className="sale pp-sale">
                                Sale {product.discount.percent} %
                              </div>
                            )}
    
                            <div className="icon">
                              <i className="icon_heart_alt" />
                            </div>
                            <ul>
                              <li className="w-icon active">
                              <a
                            onClick={() => {
                              handleAddToCart(product.id,product.nameProduct);
                            }}
                            >
                              <i className="icon_bag_alt" />
                            </a>
                              </li>
                              <li className="quick-view">
                                <Link to={`/detail-product/${product.id}`}>
                                  {" "}
                                  <i className="fa fa-info-circle"></i> Chi tiết
                                </Link>
                              </li>
                              <li className="w-icon">
                                <a href="#">
                                  <i className="fa " />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="pi-text">
                            <div className="catagory-name">
                              {product.brand.nameBrand}
                            </div>
    
                            <h5>{product.nameProduct}</h5>
    
                            {product.discount.id == 1 ? (
                              <div className="product-price">
                                <CurrencyFormat value={product.price} />đ
                                <span></span>
                              </div>
                            ) : (
                              <div className="product-price">
                                <CurrencyFormat
                                  className="product-price"
                                  value={
                                    (product.price *
                                      (100 - product.discount.percent)) /
                                    100
                                  }
                                />
                                đ
                                <span>
                                  <CurrencyFormat value={product.price} />đ
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      );
                    })}
                </div>
              </div>
              {page==products.length ? 
              <div className="loading-more">
                <i className="icon_loading" />
                <a
                  onClick={() => {
                    loadMore();
                  }}
                >
                  Xem thêm
                </a>
              </div>
              :
              <div className="loading-more">
           
            </div>
}
            </div>
          </div>
        </div>
      </section>

      {showsScrolBtn && (
        <a
          className="btn back-to-top"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <i className="fa fa-angle-double-up"></i>
        </a>
      )}
      
    </>
  );
}
