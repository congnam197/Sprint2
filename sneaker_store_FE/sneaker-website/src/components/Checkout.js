import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCartByIdAccount } from "../service/Cart";
import CurrencyFormat from "../format/Format";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import { string } from "prop-types";
import { paymentByVNPay } from "../service/Payment";

export default function Checkout() {
  useEffect(() => {
    document.title = "Thanh Toán";
  }, []);
  // getListCart
  const [carts, setCarts] = useState([]);
  const getCarts = async () => {
    const result = await getCartByIdAccount();

    setCarts(result);
  };
  //
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

  const onSubmit = async (values) => {
    const result =await paymentByVNPay(totalPrice);
    window.location.href=result;
  };
  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text product-more">
                <Link to="/home">
                  <i className="fa fa-home" /> Trang Chủ
                </Link>
                <Link to="/shop">Shop</Link>
                <span>Thanh Toán</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-section spad">
        <div className="container">
          <Formik
            initialValues={{
              fullName: "",
              phone: "",
              address: "",
              note: "",
            }}
            validationSchema={yup.object({
              fullName: yup
                .string()
                .required("Nhập tên người nhận hàng")
                .min(5, "Ít nhất 5 kí tự")
                .max(50, "Tối đa 50 kí tự"),
              phone: yup
                .string()
                .required("Vui lòng nhập số điện thoại người nhận")
                .matches(),
              address: yup.string().required("Vui lòng nhập địa chỉ giao hàng"),
            })}
            onSubmit={(values)=>
              onSubmit(values)}
          >
            <Form className="checkout-form">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Thông tin khách hàng</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <label htmlFor="fullName">
                        Họ và tên<span>*</span>
                      </label>
                      <Field type="text" id="fullName" name="fullName" />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="phone">
                        Số điện thoại<span>*</span>
                      </label>
                      <Field type="text" id="phone" name="phone" />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="address">
                        Địa chỉ<span>*</span>
                      </label>
                      <Field
                        type="text"
                        id="address"
                        name="address"
                        className="street-first"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="note">Ghi chú</label>
                      <Field as="textarea" id="note" name="note" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="place-order">
                    <h4>Đơn hàng của bạn</h4>
                    <div className="order-total">
                      <ul className="order-table">
                        <li>
                          Sản phẩm <span>Tổng tiền</span>
                        </li>
                        {carts &&
                          carts.map((item) => {
                            return (
                              <li className="fw-normal" key={item.id}>
                                <strong className="name-product">
                                  {item.product.nameProduct}
                                </strong>{" "}
                                x{" "}
                                <strong className="quantity">
                                  {item.quantity}
                                </strong>
                                <span className="price">
                                  <CurrencyFormat
                                    value={
                                      ((item.product.price *
                                        (100 - item.product.discount.percent)) /
                                        100) *
                                      item.quantity
                                    }
                                  ></CurrencyFormat>
                                  đ
                                </span>
                              </li>
                            );
                          })}
                        <li className="total-price">
                          Tổng{" "}
                          <span>
                            <CurrencyFormat value={totalPrice}></CurrencyFormat>{" "}
                            đ
                          </span>
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
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
