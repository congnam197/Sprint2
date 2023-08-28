import logo from '../asset/images/1.png'
export default function Footer(){
    return(
        <>
          <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="full">
            <div className="logo_footer">
              <a href="#">
                <img width={150} src={logo} alt="#" />
              </a>
            </div>
            <div className="information_f">
              <p>
                <strong>Địa chỉ:</strong> 28 Nguyễn Tất Thành, Phường Thanh
                Bình, Quận Hải Châu, TP Đà Nẵng
              </p>
              <p>
                <strong>SĐT:</strong> +84979274983
              </p>
              <p>
                <strong>email:</strong> YT-sneaker@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="widget_menu">
                    <h3>Menu</h3>
                    <ul>
                      <li>
                        <a href="#">Trang chủ</a>
                      </li>
                      <li>
                        <a href="#">Thông tin về shop</a>
                      </li>
                      <li>
                        <a href="#">Chăm sóc khách hàng</a>
                      </li>
                      <li>
                        <a href="#">Dịch vụ đổi trả</a>
                      </li>
                      <li>
                        <a href="#">Thông tin</a>
                      </li>
                      <li>
                        <a href="#">Liên hệ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="widget_menu">
                    <h3>Tài Khoản</h3>
                    <ul>
                      <li>
                        <a href="#">Tài Khoản Khách Hàng</a>
                      </li>
                      <li>
                        <a href="#">Checkout</a>
                      </li>
                      <li>
                        <a href="#">Đăng nhập</a>
                      </li>
                      <li>
                        <a href="#">Đăng kí</a>
                      </li>
                      <li>
                        <a href="#">Mua săm</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="widget_menu">
                <h3>Thư điện tử</h3>
                <div className="information_f">
                  <p>
                    Để lại thông tin để nhận những thông tin khuyến mãi mới nhất
                  </p>
                </div>
                <div className="form_sub">
                  <form>
                    <fieldset>
                      <div className="field">
                        <input
                          type="email"
                          placeholder="Nhập email của bạn"
                          name="email"
                        />
                        <input type="submit" defaultValue="Đăng kí" />
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer end */}
  <div className="cpy_">
    <p>
      © 2023 sáng tạo bởi <a href="#">YT Star Team</a>
    </p>
  </div>
        </>
    )
}