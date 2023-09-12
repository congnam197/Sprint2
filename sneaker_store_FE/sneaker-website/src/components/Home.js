import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, getProductsSale } from "../service/Product";
import CurrencyFormat from "../format/Format";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productSales, setProductsSale] = useState([]);
  const navigate = useNavigate();

  let [page, setPage] = useState(4);
  //lấy sp khuyến mãi

  const getProductSaling = async () => {
    const data = await getProductsSale(page);
    setProductsSale(data);
  };
  const loadMore = async () => {
    setPage((page) => page + 4);
  };
  const shortened = async () =>{
    setPage(4);
  }

  // lấy sp nổi bật
  const getProduct = async () => {
    const data = await getProducts();
    setProducts(data);
  };
  useEffect(() => {
    getProduct();
    getProductSaling();
  }, [page]);
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

  const [showsScrolBtn, setShowScrolBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0)
    const handleButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowScrolBtn(true) : setShowScrolBtn(false);
    };

    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.addEventListener("scroll", handleButtonVisibility);
    };
  }, []);
  if(!products){
    navigate("/")
    return null;
   
  }

  return (
    <>
      {/* carousel */}
      <section className="slider_section position-relative">
        <div id="mycarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#mycarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#mycarousel" data-slide-to="1" className=""></li>
            <li data-target="#mycarousel" data-slide-to="2" className=""></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="/img/banner-1.png" />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "#fff" }}
              ></div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/img/banner-2.png" />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "#fff" }}
              ></div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="/img/banner-3.png" />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "#fff" }}
              ></div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#mycarousel"
            role="button"
            data-slide="prev"
          >
            {" "}
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>{" "}
            <span class="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#mycarousel"
            role="button"
            data-slide="next"
          >
            {" "}
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>{" "}
            <span className="sr-only">Next</span>{" "}
          </a>
        </div>
      </section>
      {/* carousel */}

      {/* Banner Section Begin */}
      <div className="banner-section spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="img/banner-1.jpg" alt="" />
                <div className="inner-text">
                  <h4>Nam</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="img/banner-2.jpg" alt="" />
                <div className="inner-text">
                  <h4>Nữ</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="img/banner-3.jpg" alt="" />
                <div className="inner-text">
                  <h4>Trẻ em</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="product-title">Sản phẩm nổi bật</div>
        <div className="col-lg-12 order-1 order-lg-2">
          <div className="product-show-option">
            <div className="row">
              {/* <div className="col-lg-7 col-md-7"></div>
              <div className="col-lg-5 col-md-5 text-right">
                <p>Từ 01- 06 trên 136 sản phẩm</p>
              </div> */}
            </div>
          </div>
          <div className="product-list">
            <div className="row">
              {products.map((product) => {
                return (
                  <div className="col-lg-3 col-sm-6" key={product.id}>
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
                            <a href="#">
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
          {/* <div className="loading-more">
            <i className="icon_loading" />
            <a href="#">Xem thêm</a>
          </div> */}
        </div>
        <br></br>
        <div className="product-title">Sản phẩm đang khuyến mãi</div>
        <div className="product-show-option">
          <div className="row">
            {/* <div className="col-lg-7 col-md-7"></div>
              <div className="col-lg-5 col-md-5 text-right">
                <p>Từ 01- 06 trên 136 sản phẩm</p>
              </div> */}
          </div>
        </div>
        <div className="product-list">
          <div className="row">
            {productSales &&
              productSales.map((product) => {
                return (
                  <div className="col-lg-3 col-sm-6" key={product.id}>
                    <div className="product-item">
                      <div className="pi-pic">
                        <img src={product.imageMain} alt="" />
                        <div className="sale pp-sale">
                          Sale {product.discount.percent} %
                        </div>
                        <div className="icon">
                          <i className="icon_heart_alt" />
                        </div>
                        <ul>
                          <li className="w-icon active">
                            <a href="#">
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
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          {page==productSales.length ?
           <div className="loading-more" onClick={() => loadMore()}>
            <i className="icon_loading" />
            <a>Xem thêm</a>
          </div>
          :
          <div className="loading-more" onClick={() => shortened()}>
            <i className="icon_loading" />
            <a>Rút gọn</a>
          </div>
          }
          
        </div>
        <div className="product-title">Tại Sao Chọn Chúng tôi ?</div>
        <div className="benefit-items">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-benefit">
                <div className="sb-icon">
                  <img src="img/icon-1.png" alt="" />
                </div>
                <div className="sb-text">
                  <h6>Miễn phí ship</h6>
                  <p>Miễn phí vận chuyển từ đơn hàng từ 900.000 đ</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-benefit">
                <div className="sb-icon">
                  <img src="img/icon-2.png" alt="" />
                </div>
                <div className="sb-text">
                  <h6>Giao hàng đúng hạn</h6>
                  <p>Cam kết giao hàng từ 2-4 ngày kể từ khi đặt hàng</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-benefit">
                <div className="sb-icon">
                  <img src="img/icon-1.png" alt="" />
                </div>
                <div className="sb-text">
                  <h6>Thanh Toán an toàn</h6>
                  <p>100% thanh toán qua VNPay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-logo">
        <div className="container">
          <div className="logo-carousel owl-carousel">
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="img/logo-carousel/Adidas-Logo.png" alt="" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="img/logo-carousel/convert.png" alt="" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="img/logo-carousel/gucci-lg.png" alt="" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="img/logo-carousel/Nike-Logo.png" alt="" />
              </div>
            </div>
            <div className="logo-item">
              <div className="tablecell-inner">
                <img src="img/logo-carousel/MLB-Logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
