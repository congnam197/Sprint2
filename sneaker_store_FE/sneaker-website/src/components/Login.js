import { Link } from "react-router-dom";
import logoGoogle from "../asset/images/logo-google.png"
import logoFacebook from "../asset/images/logo-face.png"
export default function Login(){
    return(
        <div className="main">
       <form action="" method="POST" className="form" id="form-2">
  <h3 className="heading">Đăng nhập</h3>
  <p className="desc">Cảm ơn bạn luôn đồng hành và ủng hộ YT Sneaker     ❤️</p>
  <div className="spacer" />
  <div className="form-group">
    <label htmlFor="email" className="form-label">
      Email
    </label>
    <input
      id="email"
      name="email"
      type="text"
      placeholder="VD: email@domain.com"
      className="form-control"
    />
    <span className="form-message" />
  </div>
  <div className="form-group">
    <label htmlFor="password" className="form-label">
      Mật khẩu
    </label>
    <input
      id="password"
      name="password"
      type="password"
      placeholder="Nhập mật khẩu"
      className="form-control"
    />
    <span className="form-message" />
  </div>
  <button className="form-submit">Đăng nhập</button>
  <div className="confirm-login">
     <Link to="/forgot-password" className="link">Quên mật khẩu ?</Link>
    </div>
    <div className="confirm-register">
        <span style={{marginRight:"5px"}} >Bạn chưa có tài khoản?</span><Link to="/register" className="link">Đăng kí thành viên mới</Link>
    </div>
    <div className="social">
      <div className="social-facebook">
      <img src={logoFacebook}></img>
        <div> Đăng nhập bằng Facbook</div>
      </div>
      <div className="social-google">
        <img src={logoGoogle}></img>
        <div>Đăng nhập bằng Google</div>
      </div>
    </div>
</form>

      </div>
    )
}