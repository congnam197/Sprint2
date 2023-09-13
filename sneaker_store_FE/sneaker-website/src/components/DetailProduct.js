import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, getProductSimilarByIdBrand } from "../service/Product";
import CurrencyFormat from "../format/Format";

export default function DetailProduct() {
  const navigate = useNavigate();
  const param = useParams();
  const [product, setProducts] = useState({});
  const [images, setImage] = useState([]);
  const location = useLocation();
  const [similarProducts, setSimilarProducts] = useState([]);
  //console.log(product);
  //tìm product by id;
  const getProduct = async () => {
    const result = await getProductById(param.data);
    setProducts(result);
  };
  //tìm sản phẩm tương tự

  const getProductSimilar = async () => {
    if (product.brand != undefined) {
      const data = await getProductSimilarByIdBrand(product.brand.id);
      setSimilarProducts(data);
      // } else {
      //   console.log("không có dữ liệu sản phẩm");
      // // navigate("/")
    }
  };
  //   console.log(similarProducts);

  const [quantity, setQuantity] = useState(1);
  const addProduct = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const removeProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };
  useEffect(()=>{
   window.scrollTo(0,0)
  },[param.data])
  //useEffect
  useEffect(() => {
    getProduct();
  }, [location]);
  useEffect(() => {
    getProductSimilar();
  }, [product]);
  return (
    <>
      {product != {} ? (
        <>
          <div className="breacrumb-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb-text product-more">
                    <Link to="/home">
                      <i className="fa fa-home" /> Trang Chủ
                    </Link>
                    <Link to="/shop">Sản Phẩm</Link>
                    <span>{product.nameProduct}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="product-shop spad page-details">
            <div className="container">
              <div className="row">
                {product.brand && (
                  <div className="col-lg-9">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="product-pic-zoom">
                          <img
                            className="product-big-img"
                            src={product.imageMain}
                            alt=""
                          />
                          <div className="zoom-icon">
                            <i className="fa fa-search-plus" />
                          </div>
                        </div>
                        <div className="product-thumbs">
                          <div className="product-thumbs-track ps-slider owl-carousel">
                            {/* <div className="pt active">
                          <img src={product.imageMain} alt="" />
                        </div> */}
                            {/* <div className="pt">
                          <img src={} alt="" />
                        </div>
                        <div className="pt">
                          <img src={p1} alt="" />
                        </div>
                        <div className="pt">
                          <img src={p1} alt="" />
                        </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="product-details">
                          <div className="pd-title">
                            <span>{product.brand.nameBrand}</span>
                            <h3>{product.nameProduct}</h3>
                            <a href="#" className="heart-icon">
                              <i className="icon_heart_alt" />
                            </a>
                          </div>
                          <div className="pd-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-o" />
                            <span>(5)</span>
                          </div>
                          <div className="pd-desc">
                            <p></p>
                            {product.discount.id == 1 ? (
                              <h4>
                                <CurrencyFormat value={product.price} />đ
                              </h4>
                            ) : (
                              <h4>
                                <CurrencyFormat
                                  value={
                                    (product.price *
                                      (100 - product.discount.percent)) /
                                    100
                                  }
                                />{" "}
                                đ{" "}
                                <span>
                                  <CurrencyFormat value={product.price} />đ
                                </span>
                              </h4>
                            )}
                          </div>
                          <div className="pd-color">
                            <h6>Color</h6>
                            <div className="pd-color-choose">
                              <div className="cc-item">
                                <input type="radio" id="cc-black" />
                                <label htmlFor="cc-black" />
                              </div>
                              <div className="cc-item">
                                <input type="radio" id="cc-yellow" />
                                <label
                                  htmlFor="cc-yellow"
                                  className="cc-yellow"
                                />
                              </div>
                              <div className="cc-item">
                                <input type="radio" id="cc-violet" />
                                <label
                                  htmlFor="cc-violet"
                                  className="cc-violet"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="pd-size-choose">
                            <div className="sc-item">
                              <input type="radio" id="sm-size" />
                              <label htmlFor="sm-size">41</label>
                            </div>
                            <div className="sc-item">
                              <input type="radio" id="md-size" />
                              <label htmlFor="md-size">42</label>
                            </div>
                            <div className="sc-item">
                              <input type="radio" id="lg-size" />
                              <label htmlFor="lg-size">43</label>
                            </div>
                            <div className="sc-item">
                              <input type="radio" id="xl-size" />
                              <label htmlFor="xl-size">44</label>
                            </div>
                          </div>
                          <div className="quantity">
                            <div className="pro-qty">
                              <span
                                className="dec qtybtn"
                                onClick={removeProduct}
                              >
                                -
                              </span>
                              <input
                                type="text"
                                value={quantity}
                                min={0}
                                max={10}
                              />
                              <span className="inc qtybtn" onClick={addProduct}>
                                +
                              </span>
                            </div>
                            <a href="#" className="primary-btn pd-cart">
                              Thêm giỏ hàng
                            </a>
                          </div>
                          <ul className="pd-tags">
                            <li>
                              <span>Thể loại</span>:{" "}
                              <Link to="">{product.brand.nameBrand}</Link>,{" "}
                              <Link to="">
                                Giày {product.productType.productType}
                              </Link>
                              , <Link to="">{product.material}</Link>
                            </li>
                            {/* <li>
                        <span>TAGS</span>: <Link to="">Giày {product.material}</Link>,<Link to="">{product.brand.nameBrand}</Link> 
                      </li> */}
                          </ul>
                          <div className="pd-share">
                            {/* <div className="p-code">Mã : 00012</div> */}
                            <div className="pd-social">
                              <a href="#">
                                <i className="ti-facebook" />
                              </a>
                              <a href="#">
                                <i className="ti-twitter-alt" />
                              </a>
                              <a href="#">
                                <i className="ti-linkedin" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-tab">
                      <div className="tab-item">
                        <ul className="nav" role="tablist">
                          <li>
                            <a
                              className="active"
                              data-toggle="tab"
                              href="#tab-1"
                              role="tab"
                            >
                              Mô tả sản phẩm
                            </a>
                          </li>
                          <li>
                            <a data-toggle="tab" href="#tab-2" role="tab">
                              Chi tiết về sản phẩm
                            </a>
                          </li>
                          {/* <li>
                                                <a data-toggle="tab" href="#tab-3" role="tab">
                                                    Customer Reviews (02)
                                                </a>
                                            </li> */}
                        </ul>
                      </div>
                      <div className="tab-item-content">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade-in active"
                            id="tab-1"
                            role="tabpanel"
                          >
                            <div className="product-content">
                              <div className="row">
                                <div className="col-lg-7">
                                  <h5>Giới thiệu</h5>
                                  <p>{product.descriptionProduct}</p>
                                </div>
                                <div className="col-lg-5">
                                  <img src={product.imageMain} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="tab-2"
                            role="tabpanel"
                          >
                            <div className="specification-table">
                              <table>
                                <tbody>
                                  <tr>
                                    <td className="p-catagory">
                                      Đánh giá khách hàng
                                    </td>
                                    <td>
                                      <div className="pd-rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                        <span>(5)</span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-catagory">Giá</td>
                                    <td>
                                      <div className="p-price">
                                        <CurrencyFormat
                                          value={
                                            (product.price *
                                              (100 -
                                                product.discount.percent)) /
                                            100
                                          }
                                        />{" "}
                                        đ
                                      </div>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="p-catagory">Thương hiệu</td>
                                    <td>
                                      <div className="p-stock">
                                        {product.brand.nameBrand}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-catagory">Chất liệu</td>
                                    <td>
                                      <div className="p-weight">
                                        {product.material}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-catagory">Size</td>
                                    <td>
                                      <div className="p-size">41</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-catagory">Màu sắc</td>
                                    <td>
                                      <span className="p-code">Xanh</span>
                                    </td>
                                  </tr>
                                  {/* <tr>
                              <td className="p-catagory">Mã sản phẩm</td>
                              <td>
                                <div className="p-code">00012</div>
                              </td> */}
                                  {/* </tr> */}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Related Products Section End */}
          <div className="related-products spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h2>Sản phẩm tương tự</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {similarProducts.map((product) => {
                  return (
                    <div className="col-lg-3 col-sm-6" key={product.id}>
                      <div className="product-item">
                        <div className="pi-pic">
                          <img src={product.imageMain} alt="" />
                          {product.discount.id == 1 ? (
                            <div className=""></div>
                          ) : (
                            <div className="sale">
                              Sale {product.discount.percent}%
                            </div>
                          )}

                          <div className="icon">
                            <i className="icon_heart_alt" />
                          </div>
                          <ul>
                            <li className="w-icon active">
                              <a href="#">
                                <i className="icon_bag_alt" />
                              </a>
                            </li>
                            <li className="quick-view">
                              <Link to={`/detail-product/${product.id}`}>
                                {" "}
                                <i className="fa fa-info-circle"></i> Chi tiết
                              </Link>
                            </li>
                            {/* <li className="w-icon">
                        <a href="#">
                          <i className="fa fa-random" />
                        </a>
                      </li> */}
                          </ul>
                        </div>
                        <div className="pi-text">
                          <div className="catagory-name">
                            {product.brand.nameBrand}
                          </div>
                          <div>
                            <h5>{product.nameProduct}</h5>
                          </div>

                          {product.discount.id == 1 ? (
                            <div className="product-price">
                              <CurrencyFormat value={product.price} />đ
                              <span></span>
                            </div>
                          ) : (
                            <div className="product-price">
                              <CurrencyFormat
                                className="product-price"
                                value={
                                  (product.price *
                                    (100 - product.discount.percent)) /
                                  100
                                }
                              />
                              đ
                              <span>
                                <CurrencyFormat value={product.price} />đ
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>Không có sản phẩm</p>
          </div>
        </>
      )}
    </>
  );
}
