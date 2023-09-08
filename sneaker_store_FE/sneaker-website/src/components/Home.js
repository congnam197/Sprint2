import p1 from "../asset/images/p1.jpg";
import p2 from "../asset/images/p2.jpg";
import p3 from "../asset/images/p3.jpg";
import p4 from "../asset/images/p4.jpg";
import p6 from "../asset/images/p6.jpg";
import g1 from "../asset/images/g1.jpg";
import g2 from "../asset/images/g2.jpg";
import g4 from "../asset/images/g4.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Home() {
  useEffect(() => {
    document.title = "Trang chủ";
  }, []);

  const [showsScrolBtn, setShowScrolBtn] = useState(false);

  useEffect(() => {
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
              <div className="col-lg-7 col-md-7"></div>
              <div className="col-lg-5 col-md-5 text-right">
                <p>Từ 01- 06 trên 136 sản phẩm</p>
              </div>
            </div>
          </div>
          <div className="product-list">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={p1} alt="" />
                    <div className="sale pp-sale">Sale</div>
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
                        <Link to="/detail-product">
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
                    <div className="catagory-name">Towel</div>
                    <a href="#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div className="product-price">
                      1.200.000đ
                      <span>1.200.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={p2} alt="" />
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
                        <Link to="/detail-product">
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
                    <div className="catagory-name">Coat</div>
                    <a href="#">
                      <h5>Guangzhou sweater</h5>
                    </a>
                    <div className="product-price">
                      1.200.000đ
                      <span>1.200.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={p3} alt="" />
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
                        <Link to="/detail-product">
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
                    <div className="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Guangzhou sweater</h5>
                    </a>
                    <div className="product-price">
                      1.200.000đ
                      <span>1.200.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={p4} alt="" />
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
                        <Link to="/detail-product">
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
                    <div className="catagory-name">Nike</div>
                    <a href="#">
                      <h5>Microfiber Wool Scarf</h5>
                    </a>
                    <div className="product-price">
                      1.200.000đ
                      <span>1.200.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={p6} alt="" />
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
                        <Link to="/detail-product">
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
                    <div className="catagory-name">Adidas</div>
                    <a href="#">
                      <h5>Men's Painted Hat</h5>
                    </a>
                    <div className="product-price">
                      1.200.000đ
                      <span>1.200.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={g1} alt="" />
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
                        <Link to="/detail-product">
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
                    <div className="catagory-name">Gucci</div>
                    <a href="#">
                      <h5>Converse Shoes</h5>
                    </a>
                    <div className="product-price">
                      1.200.000đ
                      <span>1.200.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={g2} alt="" />
                    <div className="sale pp-sale">Sale</div>
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
                        <Link to="/detail-product">
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
                    <div className="catagory-name">MLB</div>
                    <a href="#">
                      <h5>Pure Pineapple</h5>
                    </a>
                    <div className="product-price">
                      1.200.000đ
                      <span>1.200.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={g4} alt="" />
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
                        <Link to="/detail-product">
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
                    <div className="catagory-name">Converse</div>
                    <a href="#">
                      <h5>2 Layer Windbreaker</h5>
                    </a>
                    <div className="product-price">
                      1.200.000đ
                      <span>1.200.000đ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="loading-more">
            <i className="icon_loading" />
            <a href="#">Xem thêm</a>
          </div> */}
        </div>
        <br></br>
        <div className="product-title">Sản phẩm đang khuyến mãi</div>
        <div className="product-list">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={g2} alt="" />
                  <div className="sale pp-sale">Sale</div>
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
                      <Link to="/detail-product">
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
                  <div className="catagory-name">Towel</div>
                  <a href="#">
                    <h5>Pure Pineapple</h5>
                  </a>
                  <div className="product-price">
                    1.200.000đ
                    <span>1.200.000đ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={g2} alt="" />
                  <div className="sale pp-sale">Sale</div>
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
                      <Link to="/detail-product">
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
                  <div className="catagory-name">Towel</div>
                  <a href="#">
                    <h5>Pure Pineapple</h5>
                  </a>
                  <div className="product-price">
                    1.200.000đ
                    <span>1.200.000đ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={g2} alt="" />
                  <div className="sale pp-sale">Sale</div>
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
                      <Link to="/detail-product">
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
                  <div className="catagory-name">Towel</div>
                  <a href="#">
                    <h5>Pure Pineapple</h5>
                  </a>
                  <div className="product-price">
                    1.200.000đ
                    <span>1.200.000đ</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={g2} alt="" />
                  <div className="sale pp-sale">Sale</div>
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
                      <Link to="/detail-product">
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
                  <div className="catagory-name">Towel</div>
                  <a href="#">
                    <h5>Pure Pineapple</h5>
                  </a>
                  <div className="product-price">
                    1.200.000đ
                    <span>1.200.000đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loading-more">
            <i className="icon_loading" />
            <a href="#">Xem thêm</a>
          </div>
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
