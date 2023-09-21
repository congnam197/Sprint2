import { Link } from "react-router-dom";

import { useEffect } from "react";
export default function Register() {
  useEffect(() => {
    document.title = "Đăng kí tài khoản";
  },[]);
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <a href="#">
                  <i className="fa fa-home" /> Home
                </a>
                <span>Đăng kí tài khoản</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Form Section Begin */}
      {/* Register Section Begin */}
      <div className="register-login-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="register-form">
                <h2>ĐĂNG KÍ TÀI KHOẢN</h2>
                <form action="#">
                  <div className="group-input">
                    <label htmlFor="username">Email *</label>
                    <input type="text" id="username" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="pass">Mật khẩu *</label>
                    <input type="text" id="pass" />
                  </div>
                  <div className="group-input">
                    <label htmlFor="con-pass">Xác nhận lại mật khẩu *</label>
                    <input type="text" id="con-pass" />
                  </div>
                  <button type="submit" className="site-btn register-btn">
                    Đăng Kí
                  </button>
                </form>
                <div className="switch-login">
                  <Link to="/login" className="or-login">
                    Or Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
