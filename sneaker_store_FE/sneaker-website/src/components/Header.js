import logo from "../asset/images/YT.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header_section sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/home">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="form-inline">
                  <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="button"
                  >
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </li>
              {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    {" "}
                    <span className="nav-label">
                      Hãng <span className="caret" />{" "}
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="about.html">Adidas</a>
                    </li>
                    <li>
                      <a href="testimonial.html">Jordan Low</a>
                    </li>
                    <li>
                      <a href="testimonial.html">Gucci</a>
                    </li>
                  </ul>
                </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Đăng nhập
                </Link>
                <i className="fa fa-user" aria-hidden="true"></i>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog_list.html">
                  Yêu Thích
                </a>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Giỏ Hàng
                </Link>
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>   
      </div>
    </header>
  );
}
