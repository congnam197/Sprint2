import p1 from "../asset/images/p1.jpg";
import p2 from "../asset/images/p2.jpg";
import p3 from "../asset/images/p3.jpg";
import p4 from "../asset/images/p4.jpg";
import p6 from "../asset/images/p6.jpg";
import g1 from "../asset/images/g1.jpg";
import g2 from "../asset/images/g2.jpg";
import g4 from "../asset/images/g4.jpg";
import { useState } from "react";
export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const addProduct = () => {
    setQuantity((quantity) => quantity + 1);
    console.log(1);
  };
  const removeProduct = () => {
    setQuantity(quantity - 1);
  };
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: 15 }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Giỏ Hàng</h1>
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr className="my-4" />
                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={p1}
                            className="img-fluid rounded-3"
                            alt="sneaker"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Nike</h6>
                          <h6 className="text-black mb-0">AiR Jordan</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn  px-2"
                            onClick={() => {
                              removeProduct();
                            }}
                          >
                            <i className="fa fa-minus" />
                          </button>
                          <input
                            id="form1"
                            min={0}
                            name="quantity"
                            type="text"
                            className="form-control form-control-sm form-cart"
                            value={quantity}
                          />
                          <button
                            className="btn  px-2"
                            onClick={() => {
                              addProduct();
                            }}
                          >
                            <i className=" fa fa-plus" />
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">1,699,000 đ</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted">
                            <i className="fa fa-times" />
                          </a>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={p2}
                            className="img-fluid rounded-3"
                            alt="AirNike"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Nike</h6>
                          <h6 className="text-black mb-0">Nike LOW</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn px-2"
                            type="button"
                            // onClick={() => {
                            //   removeProduct();
                            // }}
                          >
                            <i className="fa fa-minus" />
                          </button>
                          <input
                            id="form1"
                            min={0}
                            name="quantity"
                            defaultValue={1}
                            type="text"
                            className="form-control form-control-sm form-cart"
                            placeholder="1"
                          />
                          <button
                            className="btn  px-2"
                            // onClick={() => {
                            //   addProduct();
                            // }}
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">1,699,000 đ</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted">
                            <i className="fa fa-times" />
                          </a>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={g1}
                            className="img-fluid rounded-3"
                            alt="gucci"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-muted">Gucci</h6>
                          <h6 className="text-black mb-0">Gucci Gold</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn  px-2"
                            // onClick={() => {
                            //   removeProduct();
                            // }}
                          >
                            <i className="fa fa-minus" />
                          </button>
                          <input
                            id="form1"
                            min={0}
                            name="quantity"
                            defaultValue={1}
                            type="text"
                            className="form-control form-control-sm form-cart"
                          />
                          <button
                            className="btn  px-2"
                            // onClick={() => {
                            //   addProduct();
                            // }}
                          >
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">1,800,000 đ</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted">
                            <i className="fa fa-times" />
                          </a>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="pt-5">
                        <h6 className="mb-0">
                          <a href="#!" className="text-body">
                            <i className="fa fa-long-arrow-left me-3" />
                            Quay lại
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Chi tiết</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">Sản phẩm 3</h5>
                        <h5>5,198,000đ</h5>
                      </div>
                      <h5 className="text-uppercase mb-3">Phí ship</h5>
                      <div className="mb-4 pb-2">
                        <select className="form-control form-control-lg ">
                          <option value={1}>Standard-Delivery- 15,000đ</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                          <option value={4}>Four</option>
                        </select>
                      </div>
                      <h5 className="text-uppercase mb-3">Mã giảm giá</h5>
                      <div className="mb-5">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                            placeholder="Nhập mã giảm giá ở đây"
                          />
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Tổng tiền</h5>
                        <h5>5,330,000đ</h5>
                      </div>
                      <button
                        type="button"
                        className="btn btn-block btn-lg check-out"
                        data-mdb-ripple-color="dark"
                      >
                        Thanh Toán
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
