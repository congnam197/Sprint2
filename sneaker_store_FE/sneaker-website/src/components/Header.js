import logo from'../asset/images/YT.png'
import { Link } from 'react-router-dom'
export default function Header(){
    return(
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
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">
                    Trang Chủ <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
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
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="product.html">
                    Nam
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog_list.html">
                    Nữ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="../login-register/login.html">
                    Đăng nhập / Đăng Kí
                  </a>
                </li>
                {/*                        <form class="form-inline">*/}
                {/*&lt;!&ndash;                           <input type="text" placeholder="Bạn muốn tìm sản phầm gì">&ndash;&gt;*/}
                {/*                           <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">*/}
                {/*                           <i class="fa fa-search" aria-hidden="true"></i>*/}
                {/*                           </button>*/}
                {/*                        </form>*/}
                <li className="nav-item">
                  <a className="nav-link" href="product.html">
                    Giỏ Hàng
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
}