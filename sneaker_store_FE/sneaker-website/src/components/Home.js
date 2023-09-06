// import slider1 from "../asset/images/slider-bg.jpg";
// import p1 from "../asset/images/p1.jpg";
// import p2 from "../asset/images/p2.jpg";
// import p3 from "../asset/images/p3.jpg";
// import p4 from "../asset/images/p4.jpg";
// import p6 from "../asset/images/p6.jpg";
// import g1 from "../asset/images/g1.jpg";
// import g2 from "../asset/images/g2.jpg";
// import g4 from "../asset/images/g4.jpg";
// import client from "../asset/images/client.jpg";
// import log1 from "../asset/images/log1.webp";
// import log2 from "../asset/images/log2.webp";
// import log3 from "../asset/images/log3.webp";
// import log4 from "../asset/images/log4.webp";
// import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* Banner Section Begin */}
      <div className="banner-section spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="img/banner-1.jpg" alt="" />
                <div className="inner-text">
                  <h4>Men’s</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="img/banner-2.jpg" alt="" />
                <div className="inner-text">
                  <h4>Women’s</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-banner">
                <img src="img/banner-3.jpg" alt="" />
                <div className="inner-text">
                  <h4>Kid’s</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" >
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
                    <img src="img/products/product-1.jpg" alt="" />
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
                        <a href="#">+ Quick View</a>
                      </li>
                      <li className="w-icon">
                        <a href="#">
                          <i className="fa fa-random" />
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
                      $14.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="img/products/product-2.jpg" alt="" />
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
                        <a href="#">+ Quick View</a>
                      </li>
                      <li className="w-icon">
                        <a href="#">
                          <i className="fa fa-random" />
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
                      $13.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="img/products/product-3.jpg" alt="" />
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
                        <a href="#">+ Quick View</a>
                      </li>
                      <li className="w-icon">
                        <a href="#">
                          <i className="fa fa-random" />
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
                      $34.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="img/products/product-4.jpg" alt="" />
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
                        <a href="#">+ Quick View</a>
                      </li>
                      <li className="w-icon">
                        <a href="#">
                          <i className="fa fa-random" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pi-text">
                    <div className="catagory-name">Coat</div>
                    <a href="#">
                      <h5>Microfiber Wool Scarf</h5>
                    </a>
                    <div className="product-price">
                      $64.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="img/products/product-5.jpg" alt="" />
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
                        <a href="#">+ Quick View</a>
                      </li>
                      <li className="w-icon">
                        <a href="#">
                          <i className="fa fa-random" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pi-text">
                    <div className="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Men's Painted Hat</h5>
                    </a>
                    <div className="product-price">
                      $44.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="img/products/product-6.jpg" alt="" />
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
                        <a href="#">+ Quick View</a>
                      </li>
                      <li className="w-icon">
                        <a href="#">
                          <i className="fa fa-random" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pi-text">
                    <div className="catagory-name">Shoes</div>
                    <a href="#">
                      <h5>Converse Shoes</h5>
                    </a>
                    <div className="product-price">
                      $34.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="img/products/product-7.jpg" alt="" />
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
                        <a href="#">+ Quick View</a>
                      </li>
                      <li className="w-icon">
                        <a href="#">
                          <i className="fa fa-random" />
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
                      $64.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <img src="img/products/product-8.jpg" alt="" />
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
                        <a href="#">+ Quick View</a>
                      </li>
                      <li className="w-icon">
                        <a href="#">
                          <i className="fa fa-random" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pi-text">
                    <div className="catagory-name">Coat</div>
                    <a href="#">
                      <h5>2 Layer Windbreaker</h5>
                    </a>
                    <div className="product-price">
                      $44.00
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loading-more">
            <i className="icon_loading" />
            <a href="#">Loading More</a>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-primary back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}
