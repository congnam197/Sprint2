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
  //

  useEffect(() => {
    document.title = "Giỏ Hàng";
  }, []);
  useEffect(() => {
    getCarts();
  }, []);
  //
  const [totalPrice, setTotalPrice] = useState(0);
  const getTotalPrice = () => {
    try {
      const total = carts.reduce((total, item) => {
        return (
          item.quantity *
            ((item.product.price * (100 - item.product.discount.percent)) /
              100) +
          total
        );
      }, 0);
      setTotalPrice(total);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTotalPrice();
  }, [carts]);
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

      {carts == undefined ? (
        <>
          <div className="container">
            <div className="cart-empty">
              <img src="\img\empty-cart.webp"></img>
            </div>
            <div className="row ">
              <div className="col-lg-4">
                <div className="cart-buttons">
                  <Link to="/shop" className="primary-btn continue-shop">
                    shopping ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
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
                                <div className="pro-qty">
                                  <span
                                    className="dec qtybtn"
                                    onClick={removeProduct}
                                  >
                                    -
                                  </span>
                                  <input
                                    type="text"
                                    value={item.quantity}
                                    min={0}
                                    max={10}
                                  />
                                  <span
                                    className="inc qtybtn"
                                    onClick={addProduct}
                                  >
                                    +
                                  </span>
                                </div>
                              </td>
                              <td className="total-price first-row">
                              <CurrencyFormat
                                  value={
                                    ((item.product.price *
                                      (100 - item.product.discount.percent)) /
                                    100)*item.quantity
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
                          Tổng tiền{" "}
                          <span>
                            <CurrencyFormat value={totalPrice}></CurrencyFormat>{" "}
                            đ
                          </span>
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
      )}
    </>
  );
}
