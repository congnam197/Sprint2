
import { Link } from "react-router-dom";
export default function Header() {
  
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
                <Link to="/login" className="login-panel">
                  <i className="fa fa-user" />
                  Đăng nhập
                </Link>
                <div className="lan-selector">
                  <select
                      className="language_drop"
                      name="countries"
                      id="countries"
                      style={{ width: 300 }}
                  >
                    <option
                        value="yt"
                        // data-image="img/flag-1.jpg"
                        data-imagecss="flag yt"
                        data-title="Vietnamese"
                    >
                      Tiếng Việt
                    </option>
                    <option
                        value="yu"
                        // data-image="img/flag-2.jpg"
                        data-imagecss="flag yu"
                        data-title="English"
                    >
                      English
                    </option>
                  </select>
                </div>
                <div className="top-social">
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                  <a href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                  <a href="#">
                    <i className="ti-linkedin" />
                  </a>
                  <a href="#">
                    <i className="ti-pinterest" />
                  </a>
                </div>
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
                      <input type="text" placeholder="Bạn muốn tìm sản phẩm gì..." />
                      <button type="button">
                        <i className="ti-search" />
                      </button>
                    </div>
                  </div>
                </div>
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
                        <span>3</span>
                      </a>
                      <div className="cart-hover">
                        <div className="select-items">
                          <table>
                            <tbody>
                            <tr>
                              <td className="si-pic">
                                <img src="img/select-product-1.jpg" alt="" />
                              </td>
                              <td className="si-text">
                                <div className="product-selected">
                                  <p>1,800,000 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td className="si-close">
                                <i className="ti-close" />
                              </td>
                            </tr>
                            <tr>
                              <td className="si-pic">
                                <img src="img/select-product-2.jpg" alt="" />
                              </td>
                              <td className="si-text">
                                <div className="product-selected">
                                  <p>1,800,000 x 1</p>
                                  <h6>Kabino Bedside Table</h6>
                                </div>
                              </td>
                              <td className="si-close">
                                <i className="ti-close" />
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="select-total">
                          <span>total:</span>
                          <h5>3,600,000 đ</h5>
                        </div>
                        <div className="select-button">
                          <a href="#" className="primary-btn view-card">
                            Xem chi tiết
                          </a>
                          <a href="#" className="primary-btn checkout-btn">
                            Thanh Toán
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="cart-price">3,600,000 đ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item">
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
                  <li className="">
                    <Link to="/home">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <a href="#">Collection</a>
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
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="./blog-details.html">Blog Details</a>
                      </li>
                      <li>
                        <Link to="/shopping-cart">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="/check-out">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/faq.html">Faq</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    </ul>
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
