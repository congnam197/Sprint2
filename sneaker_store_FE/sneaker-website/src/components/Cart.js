import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCartByIdAccount } from "../service/Cart";
import CurrencyFormat from "../format/Format";
export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const addProduct = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const removeProduct = () => {
    setQuantity(quantity - 1);
  };
  // getListCart
  const [carts, setCarts] = useState([]);
  const getCarts = async () => {
    const result = await getCartByIdAccount();

    setCarts(result);
  };

  useEffect(() => {
    document.title = "Giỏ Hàng";
  }, []);
  useEffect(() => {
    getCarts();
  }, []);
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text product-more">
                <a href="./home.html">
                  <i className="fa fa-home" /> Trang chủ
                </a>
                <a href="./shop.html">Shop</a>
                <span>Giỏ hàng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section Begin */}
      {/* Shopping Cart Section Begin */}
      {carts!=null}
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th className="p-name">Tên Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng giá</th>
                      <th>
                        <i className="ti-close" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts &&
                      carts.map((item) => {
                        return (
                          <tr key={item.id}>
                            <td className="cart-pic first-row">
                              <img src={item.product.imageMain} alt="" />
                            </td>
                            <td className="cart-title first-row">
                              <h5>{item.product.nameProduct}</h5>
                            </td>
                            <td className="p-price first-row">
                              <CurrencyFormat
                                value={
                                  (item.product.price *
                                    (100 - item.product.discount.percent)) /
                                  100
                                }
                              >
                                đ
                              </CurrencyFormat>
                            </td>
                            <td className="qua-col first-row">
                              <div className="quantity">
                                <div className="pro-qty">
                                  <input type="text" value={1} />
                                </div>
                              </div>
                            </td>
                            <td className="total-price first-row">
                              <CurrencyFormat
                                value={
                                  (item.product.price *
                                    (100 - item.product.discount.percent)) /
                                  100
                                }
                              >
                                đ
                              </CurrencyFormat>
                            </td>
                            <td className="close-td first-row">
                              <i className="ti-close" />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="cart-buttons">
                    <Link to="/shop" className="primary-btn continue-shop">
                      Tiếp tục shopping
                    </Link>
                    {/* <a href="#" className="primary-btn up-cart">
                  Cập nhật
                </a> */}
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-4">
                  <div className="proceed-checkout">
                    <ul>
                      <li className="cart-total">
                        Tổng tiền <span>2,400,000 đ</span>
                      </li>
                    </ul>
                    <Link to="/check-out" className="proceed-btn">
                      Thanh Toán
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
