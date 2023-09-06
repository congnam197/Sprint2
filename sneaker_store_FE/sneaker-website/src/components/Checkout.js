export default function Checkout(){
    return(
        <>
        <div className="breacrumb-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb-text product-more">
          <a href="./index.html">
            <i className="fa fa-home" /> Trang Chủ
          </a>
          <a href="./shop.html">Shop</a>
          <span>Thanh Toán</span>
        </div>
      </div>
    </div>
  </div>
</div>
<section className="checkout-section spad">
  <div className="container">
    <form action="#" className="checkout-form">
      <div className="row">
        <div className="col-lg-6">
          {/* <div className="checkout-content">
          
          </div> */}
          <h4>Thông tin khách hàng</h4>
          <div className="row">
            <div className="col-lg-12">
              <label htmlFor="fir">
                Họ và tên<span>*</span>
              </label>
              <input type="text" id="fir" />
            </div>
            <div className="col-lg-12">
              <label htmlFor="phone">
                Số điện thoại<span>*</span>
              </label>
              <input type="text" id="phone" />
            </div>
            <div className="col-lg-12">
              <label htmlFor="street">
                Địa chỉ<span>*</span>
              </label>
              <input type="text" id="street" className="street-first" />
            </div>
            <div className="col-lg-12">
              <label htmlFor="note">
                Ghi chú
              </label>
              <textarea id="note" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/* <div className="checkout-content">
            <input type="text" placeholder="Enter Your Coupon Code" />
          </div> */}
          <div className="place-order">
            <h4>Đơn hàng của bạn</h4>
            <div className="order-total">
              <ul className="order-table">
                <li>
                  Sản phẩm <span>Tổng tiền</span>
                </li>
                <li className="fw-normal">
                  Combination x 1 <span>600,000</span>
                </li>
                <li className="fw-normal">
                  Combination x 1 <span>600,000</span>
                </li>
                <li className="fw-normal">
                  Combination x 1 <span>1,200,000</span>
                </li>
            
                <li className="total-price">
                  Tổng <span>2,400,000 đ</span>
                </li>
              </ul>
              <div className="order-btn">
                <button type="submit" className="site-btn place-btn">
                  Thanh Toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>

        </>
    )
}