import { Link } from "react-router-dom";
import logoGoogle from "../asset/images/logo-google.png"
import logoFacebook from "../asset/images/logo-face.png"
export default function Login(){
    return(
      <>
      <div className="breacrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text">
              <a href="#">
                <i className="fa fa-home" /> Trang chủ
              </a>
              <span>DĂNG NHẬP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="register-login-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="login-form">
            <h2>Đăng nhập</h2>
            <form action="#">
              <div className="group-input">
                <label htmlFor="username">Email</label>
                <input type="text" id="username" />
              </div>
              <div className="group-input">
                <label htmlFor="pass">Mật Khẩu *</label>
                <input type="text" id="pass" />
              </div>
              <div className="group-input gi-check">
                <div className="gi-more">
                  <label htmlFor="save-pass">
                    Nhớ mật khẩu
                    <input type="checkbox" id="save-pass" />
                    <span className="checkmark" />
                  </label>
                  <a href="#" className="forget-pass">
                   Quên mật khẩu ?
                  </a>
                </div>
              </div>
              <button type="submit" className="site-btn login-btn">
                Đăng nhập
              </button>
            </form>
            <div className="switch-login">
              <Link to="/register" className="or-login">
                Hoặc Tạo Tài Khoản
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
    
    )
}