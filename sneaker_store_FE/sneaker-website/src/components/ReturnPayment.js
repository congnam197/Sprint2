import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { returnFromPayment } from "../service/Payment";
import CurrencyFormat from "../format/Format";
import { totalProductOnCart } from "../service/Cart";
import { getInfoUser, getOrderDetail } from "../service/User";
import { Link } from "react-router-dom";
export default function ReturnPayment() {
  const navigate = useNavigate();
  const [responseCode, setResponseCode] = useState();
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const phone = localStorage.getItem("phone");
  const note = localStorage.getItem("note");
  const email = localStorage.getItem("email");
  const [flag, setFlag] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [listOrderDetail, setListOrderDetail] = useState([]);
  const [user, setUser] = useState({});
  const getURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const responseCode = urlParams.get("vnp_ResponseCode");
    // console.log(responseCode);
    setResponseCode(responseCode);
  };

  const display = () => {
    if (responseCode == "00") {
      Swal.fire({
        icon: "success",
        timer: 2000,
        title: "Thanh toán thành công",
        showConfirmButton: false,
      }).then(async () => {
        const data = await returnFromPayment(email, name, address, phone, note);
        setListOrderDetail(data);
        setFlag(!flag);
        localStorage.removeItem("name");
        localStorage.removeItem("phone");
        localStorage.removeItem("address");
        localStorage.removeItem("note");
      });
    } else {
      Swal.fire({
        icon: "error",
        timer: 2000,
        title: "Thanh toán thất bại",
        showConfirmButton: false,
      }).then(() => {
        localStorage.removeItem("name");
        localStorage.removeItem("phone");
        localStorage.removeItem("address");
        localStorage.removeItem("note");
        // navigate("/home");
      });
    }
  };

  // getOdderDetail
  const getOdderDetailByOderId = async () => {
    try {
      const data = await getOrderDetail(listOrderDetail[0].orders.id);
      setListOrderDetail(data);
    } catch (e) {
      console.log(e);
    }
  };
  // // getUser
  const getUserOrder = async () => {
    try {
      const data = await getInfoUser(listOrderDetail[0].orders.account.email);
      setUser(data);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  //tổng tiền
  const getTotalPriceOnCart = () => {
    try {
      const total = listOrderDetail.reduce((total, item) => {
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
    display();
  }, [responseCode]);

  useEffect(() => {
    document.title = "Chi tiết đơn hàng";
    window.scrollTo(0, 0);
    getURL();
  }, []);

  useEffect(() => {
    getTotalPriceOnCart();
    getOdderDetailByOderId();
    getUserOrder();
  }, [flag]);

  return (
    <>
      <div className="container-fluid" id="return">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="/home">
                  <i className="fa fa-home" /> Trang chủ
                </Link>
                <span>Chi tiết đơn hàng</span>
              </div>
            </div>
          </div>
          {/* Title */}
          <div className="d-flex justify-content-between align-items-center py-3">
            <h2 className="h5 mb-0">
              <a href="#" className="text-muted" /> Chi tiết hóa đơn
            </h2>
          </div>
          {/* Main content */}
          <div className="row">
            <div className="col-lg-8">
              {/* Details */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="mb-3 d-flex justify-content-between">
                    <div>
                      {listOrderDetail[0] ? (
                        <span className="me-3">
                          Ngày mua {listOrderDetail[0].orders.dateOrder}
                        </span>
                      ) : (
                        <></>
                      )}

                      {/* <span className="badge rounded-pill bg-info">
                        SHIPPING
                      </span> */}
                    </div>
                  </div>
                  <table className="table table-borderless">
                    <tbody>
                      {listOrderDetail &&
                        listOrderDetail.map((c) => {
                          return (
                            <tr key={c.id}>
                              <td>
                                <div className="d-flex mb-2">
                                  <div className="flex-shrink-0">
                                    <img
                                      src={c.product.imageMain}
                                      alt=""
                                      width={80}
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="flex-lg-grow-1 ms-3 text-center">
                                    <h6 className="small mb-0 ">
                                      <a href="#" className="text-reset">
                                        {c.product.nameProduct}
                                      </a>
                                    </h6>
                                    <ul class="list-inline">
                                      <li class="list-inline-item">
                                        Màu :{c.product.color.color}
                                      </li>
                                      <li class="list-inline-item">
                                      Size: {c.product.size.size}
                                      </li>
                                      <li class="list-inline-item">
                                      Hãng: {c.product.brand.nameBrand}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>
                              <td>{c.quantity}</td>
                              <td className="text-end">
                                <CurrencyFormat
                                  value={
                                    ((c.product.price *
                                      (100 - c.product.discount.percent)) /
                                      100) *
                                    c.quantity
                                  }
                                ></CurrencyFormat>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                    <tfoot>
                      <tr className="fw-bold">
                        <td colSpan={2}>Tổng tiền</td>
                        <td className="text-end">
                          <CurrencyFormat value={totalPrice}></CurrencyFormat>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              {/* Payment */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="h6">Thông tin thanh toán</h3>
                      <hr />
                      <p>
                        VNPay <br />
                        Tổng tiền:{" "}
                        <CurrencyFormat value={totalPrice}></CurrencyFormat> đ
                        <span className="badge bg-success rounded-pill">
                          Đã thanh toán
                        </span>
                      </p>
                    </div>
                    {!listOrderDetail[0] ? (
                      <div className="col-lg-6">
                         <h3 className="h6">Người đặt hàng</h3>
                         <hr />
                      </div>
                    ) : (
                      <div className="col-lg-6">
                        <h3 className="h6">Người đặt hàng</h3>
                        <address>
                          <strong>{user.username}</strong>
                          <br />
                          {user.address}
                          <br />
                         
                          <abbr title="Phone">Số điện thoại:</abbr>{" "}
                          {user.numberPhone}
                        </address>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Customer Notes */}
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="h6">Ghi chú thêm</h3>
                  <hr />
                  {listOrderDetail[0] ? (
                    <p>{listOrderDetail[0].orders.note}</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="card mb-4">
                {/* Shipping information */}
                <div className="card-body">
                  <h3 className="h6">Thông tin giao hàng</h3>
                  <hr />
                  {/* <h3 className="h6">Address</h3> */}
                  {!listOrderDetail[0] ? (
                    <></>
                  ) : (
                    <address>
                      <strong>{listOrderDetail[0].orders.name}</strong>
                      <br />
                      {listOrderDetail[0].orders.address}
                      <br />
                      {/* {listOrderDetail[0].orders.address} */}
                      <br />
                      <abbr title="Phone">Số điện thoại:</abbr>{" "}
                      {listOrderDetail[0].orders.numberPhone}
                    </address>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4">
              <div className="cart-buttons">
                <Link to="/home" className="primary-btn continue-shop">
                  Quay lại Trang Chủ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
