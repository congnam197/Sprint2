import { Link } from "react-router-dom";
import logoGoogle from "../asset/images/logo-google.png"
import logoFacebook from "../asset/images/logo-face.png"
export default function Register(){
return(
    <div className="main">
  <form action="" method="POST" className="form" id="form-1">
    <h3 className="heading">Thành viên đăng ký</h3>
    <div className="form-group">
      <label htmlFor="fullname" className="form-label">
        Tên đầy đủ
      </label>
      <input
        id="fullname"
        name="fullname"
        type="text"
        placeholder="VD: Nguyễn Hải"
        className="form-control"
      />
      <span className="form-message" />
    </div>
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
    <div className="form-group">
      <label htmlFor="password_confirmation" className="form-label">
        Nhập lại mật khẩu
      </label>
      <input
        id="password_confirmation"
        name="password_confirmation"
        placeholder="Nhập lại mật khẩu"
        type="password"
        className="form-control"
      />
      <span className="form-message" />
    </div>
    <button className="form-submit">Đăng ký</button>
    <div className="confirm-login">
      <span style={{marginRight:"10px"}} >Bạn đã có tài khoản? </span> <Link to="/login" className="link"> Đăng nhập</Link>
    </div>
    <div className="social">
      <div className="social-facebook">
      <img src={logoFacebook}></img>
        <div> Tham gia với  Facbook</div>
      </div>
      <div className="social-google">
        <img src={logoGoogle}></img>
        <div>Tham gia với  Google</div>
      </div>
    </div>
  </form>
</div>
)
}