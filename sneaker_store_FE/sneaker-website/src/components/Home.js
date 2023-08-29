import slider1 from "../asset/images/slider-bg.jpg"
import p1 from "../asset/images/p1.jpg"
import p2 from "../asset/images/p2.jpg"
import p3 from "../asset/images/p3.jpg"
import p4 from "../asset/images/p4.jpg"
import p6 from "../asset/images/p6.jpg"
import g1 from "../asset/images/g1.jpg"
import g2 from "../asset/images/g2.jpg"
import g4 from "../asset/images/g4.jpg"
import client from "../asset/images/client.jpg"
import log1 from "../asset/images/log1.webp"
import log2 from "../asset/images/log2.webp"
import log3 from "../asset/images/log3.webp"
import log4 from "../asset/images/log4.webp"
import {Link} from "react-router-dom"
export default function Home(){
return(
    <>
  {/* Basic */}
  <div className="hero_area">
    <section className="slider_section ">
      <div className="slider_bg_box">
      <img src={slider1} alt="" />
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                  
                    <h1>
                      <span>Sale 20%</span>
                      <br />
                      Trên tất cả các sản phẩm
                    </h1>
                    <p></p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Xem ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>
                      <span>CONVERSE</span>
                      <br />
                      Bộ sưu tập mới
                    </h1>
                    <p></p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Xem ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 col-lg-6 ">
                  <div className="detail-box">
                    <h1>
                      <span>Giảm 50%</span>
                      <br />
                     Săn sale cuối tuần
                    </h1>
                    <p></p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Mua ngay
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li
              data-target="#customCarousel1"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#customCarousel1" data-slide-to={1} />
            <li data-target="#customCarousel1" data-slide-to={2} />
          </ol>
        </div>
      </div>
    </section>
    {/* end slider section */}
  </div>
  {/* why section */}
  <section className="why_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Tại sao nên chọn chúng tôi</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="box ">
            <div className="img-box">
              <img src={log1} />
            </div>
            <div className="detail-box">
              <h5>Giao hàng nhanh</h5>
              <p>Hệ thống giao hàng nhanh, phủ rộng toàn quốc</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box ">
            <div className="img-box">
            <img src={log4} />
            </div>
            <div className="detail-box">
              <h5>Miễn Phí Ship</h5>
              <p>Đơn hàng từ 900k được miễn phí ship</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box ">
            <div className="img-box">
            <img src={log2} />
            </div>
            <div className="detail-box">
              <h5>Chính hãng</h5>
              <p>Sản phẩm chính hãng. Nhập khẩu 100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="product_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Sản Phẩm <span>Hot</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <a href="" className="option2">
                  Mua ngay
                </a>
              </div>
            </div>
            <div className="img-box">
              <img src={p1} alt="" />
            </div>
            <div className="detail-box">
              <h5>Air Jordan</h5>
              <h6>1,669,000 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={p2} alt="" />
            </div>
            <div className="detail-box">
              <h5>Air Jordan</h5>
              <h6>1,669,000 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={p3} alt="" />
            </div>
            <div className="detail-box">
              <h5>Gucci</h5>
              <h6>1,669,000 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={p4} alt="" />
            </div>
            <div className="detail-box">
              <h5>Gucci</h5>
              <h6>1,669,000 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={p6} alt="" />
            </div>
            <div className="detail-box">
              <h5>Gucci</h5>
              <h6>1,669,000 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={g1} alt="" />
            </div>
            <div className="detail-box">
              <h5>Gucci</h5>
              <h6>1,669,000 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={g2} alt="" />
            </div>
            <div className="detail-box">
              <h5>Gucci</h5>
              <h6>1,669,000 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={g4} alt="" />
            </div>
            <div className="detail-box">
              <h5>Air Jordan</h5>
              <h6>5,500,00 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={g2} alt="" />
            </div>
            <div className="detail-box">
              <h5>Air Jordan</h5>
              <h6>5,500,00 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={g2} alt="" />
            </div>
            <div className="detail-box">
              <h5>Air Jordan</h5>
              <h6>5,500,00 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={g2} alt="" />
            </div>
            <div className="detail-box">
              <h5>Air Jordan</h5>
              <h6>5,500,00 đ</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="box">
            <div className="option_container">
              <div className="options">
                <a href="" className="option1">
                  Thêm vào giỏ
                </a>
                <Link to="/detail-product" className="option2">
                  Mua ngay
                </Link>
              </div>
            </div>
            <div className="img-box">
              <img src={g2} alt="" />
            </div>
            <div className="detail-box">
              <h5>Gucci</h5>
              <h6>5,500,00 đ</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="">Xêm thêm</a>
      </div>
    </div>
  </section>
  {/* end product section */}
  {/* subscribe section */}
  <section className="subscribe_section">
    <div className="container-fuild">
      <div className="box">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="subscribe_form ">
              <div className="heading_container heading_center">
                <h3>Để lại địa chỉ email của bạn</h3>
              </div>
              <p>
                Bạn sẽ nhận những thông tin khuyến mãi sản phẩm sớm nhất từ
                chúng tôi
              </p>
              <form action="">
                <input type="email" placeholder="Nhập email của bạn" />
                <button>Đăng ký</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end subscribe section */}
  {/* client section */}
  <section className="client_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Phản hồi từ khách hàng</h2>
      </div>
      <div
        id="carouselExample3Controls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box col-lg-10 mx-auto">
              <div className="img_container">
                <div className="img-box">
                  <div className="img_box-inner">
                    <img src={client} alt="" />
                  </div>
                </div>
              </div>
              <div className="detail-box">
                <h5>Anna Trevor</h5>
                <h6>Khách hàng thân thiết</h6>
                <p>
                  Giày Nike Air Force 1 Gucci Sơn Tùng Bản 2023 Likeauth với
                  thiết kế đẹp, tinh tế &amp; màu sắc vô cùng dễ phối đồ. Vậy
                  nên đôi giày này trở nên phổ biến, mang tính biểu tượng và
                  được rất nhiều giới trẻ yêu thích.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box col-lg-10 mx-auto">
              <div className="img_container">
                <div className="img-box">
                  <div className="img_box-inner">
                    <img src={client} alt="" />
                  </div>
                </div>
              </div>
              <div className="detail-box">
                <h5>Anna Trevor</h5>
                <h6>Khách hàng thân thiết</h6>
                <p>
                  Giày Nike Air Force 1 Gucci Sơn Tùng Bản 2023 Likeauth với
                  thiết kế đẹp, tinh tế &amp; màu sắc vô cùng dễ phối đồ. Vậy
                  nên đôi giày này trở nên phổ biến, mang tính biểu tượng và
                  được rất nhiều giới trẻ yêu thích.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="box col-lg-10 mx-auto">
              <div className="img_container">
                <div className="img-box">
                  <div className="img_box-inner">
                    <img src={client} alt="" />
                  </div>
                </div>
              </div>
              <div className="detail-box">
                <h5>Anna Trevor</h5>
                <h6>Khách hàng thân thiết</h6>
                <p>
                  Giày Nike Air Force 1 Gucci Sơn Tùng Bản 2023 Likeauth với
                  thiết kế đẹp, tinh tế &amp; màu sắc vô cùng dễ phối đồ. Vậy
                  nên đôi giày này trở nên phổ biến, mang tính biểu tượng và
                  được rất nhiều giới trẻ yêu thích.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn_box">
          <a
            className="carousel-control-prev"
            href="#carouselExample3Controls"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-long-arrow-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExample3Controls"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</>
)
}