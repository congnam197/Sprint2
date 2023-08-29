import { useEffect, useState } from "react";
export default function DetailProduct() {
  const [quantity, setQuantity] = useState(1);
  const addProduct = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const removeProduct = () => {
    setQuantity(quantity - 1);
  };
  return (
    <>
      <div className="bg-primary">
        <div className="container py-4">
          <nav className="d-flex">
            <h6 className="mb-0">
              <a href="" className="text-white-50">
                Trang chủ
              </a>
              <span className="text-white-50 mx-2"> &gt; </span>
              <a href="" className="text-white-50">
                Hãng
              </a>
              <span className="text-white-50 mx-2"> &gt; </span>
              <a href="" className="text-white">
                <u>Sản Phẩm</u>
              </a>
            </h6>
          </nav>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  className="rounded-4"
                  target="_blank"
                  data-type="image"
                >
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    className="rounded-4 fit"
                    src="https://sneakerdaily.vn/wp-content/uploads/2021/02/Giay-Dior-x-Jordan-1-Low-Grey-CN8608-002.jpg"
                  />
                </a>
              </div>
              <div className="d-flex justify-content-center mb-3">
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://sneakerdaily.vn/wp-content/uploads/2021/02/air-jordan-1-low-dior-grey-cn8608-002-6.jpg"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://sneakerdaily.vn/wp-content/uploads/2021/02/air-jordan-1-low-dior-grey-cn8608-002-4.jpg"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://sneakerdaily.vn/wp-content/uploads/2021/02/air-jordan-1-low-dior-grey-cn8608-002-3.jpg"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://sneakerdaily.vn/wp-content/uploads/2021/02/air-jordan-1-low-dior-grey-cn8608-002-2.jpg"
                  />
                </a>
                <a
                  data-fslightbox="mygalley"
                  className="border mx-1 rounded-2"
                  target="_blank"
                  data-type="image"
                >
                  <img
                    width={60}
                    height={60}
                    className="rounded-2"
                    src="https://sneakerdaily.vn/wp-content/uploads/2021/02/air-jordan-1-low-dior-grey-cn8608-002-5.jpg"
                  />
                </a>
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="title text-dark">
                  Giày Dior x Jordan 1 Low Grey CN8608-002
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span className="ms-1">4.5</span>
                  </div>
                  <span className="text-muted">
                    <i className="fa fa-shopping fa-sm mx-1" />
                    154 đã mua
                  </span>
                  {/* <span className="text-success ms-2">In stock</span> */}
                </div>
                <div className="mb-3">
                  <span className="h5">1,680,000₫</span>
                  {/* <span className="text-muted">/per box</span> */}
                </div>
                <p>
                  Jordan 1 Dior low được chế tác từ da Ý cao cấp, nên chắc chắn
                  chất lượng từ chiếc áo khoác bên ngoài của đôi giày sẽ đạt đến
                  độ hoàn hảo không thể bàn cãi được. Đặc biệt khi phần ghót
                  giày được in nổi logo Wings quen thuộc, nhưng thay vì Air
                  Jordan ta có dòng chữ Air Dior để một lần nữa khẳng định phiên
                  bản giới hạn cao cấp có một không hai.
                </p>
                <div className="row">
                  <dt className="col-3">Tình trạng:</dt>
                  <dd className="col-9">Còn hàng</dd>
                  <dt className="col-3">Màu</dt>
                  <dd className="col-9">Xám</dd>
                  <dt className="col-3">Chất liệu</dt>
                  <dd className="col-9">Cotton</dd>
                  <dt className="col-3">Hãng</dt>
                  <dd className="col-9">Nike</dd>
                </div>
                <hr />
                <div className="row mb-4 size-quantity">
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2">Size</label>
                    <select className="form-select border border-secondary">
                      <option>Vui lòng chọn size</option>
                      <option>41</option>
                      <option>42</option>
                      <option>43</option>
                    </select>
                  </div>
                  {/* col.// */}
                  <div className="col-md-4 col-6 mb-3 quantity">
                    <label className="mb-2 d-block">Quantity</label>
                    <div className="input-group mb-3" style={{ width: 170 }}>
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                        onClick={() => {
                          removeProduct();
                        }}
                      >
                        <i className="fa fa-minus" />
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        value={quantity}
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                        onClick={() => {
                          addProduct();
                        }}
                      >
                        <i className="fa fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn  shadow-0 btn-buy-now">
                  Mua ngay
                </a>
                <a href="#" className="btn shadow-0 btn-add-to-cart">
                  <i className="me-1 fa fa-shopping-basket" /> Thêm vào giỏ hàng
                </a>
                <a
                  href="#"
                  className="btn btn-light border border-secondary py-2 icon-hover px-3 btn-favorite"
                >
                  <input
                    type="checkbox"
                    id="favorite"
                    name="favorite-checkbox"
                    value="favorite-button"
                  />
                  <label for="favorite" className="container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <div className="action">
                      <span className="option-1">Yêu thích</span>
                      <span className="option-2">Đã yêu thích</span>
                    </div>
                  </label>
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
