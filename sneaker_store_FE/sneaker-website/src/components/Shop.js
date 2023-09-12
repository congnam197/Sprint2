import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import p1 from "../asset/images/p1.jpg";
import p2 from "../asset/images/p2.jpg";
import p3 from "../asset/images/p3.jpg";
import p4 from "../asset/images/p4.jpg";
import p6 from "../asset/images/p6.jpg";
import g1 from "../asset/images/g1.jpg";
import g2 from "../asset/images/g2.jpg";
import g4 from "../asset/images/g4.jpg";
import Slider from "react-slider";
import { getAllBrand } from "../service/Brand";
import CurrencyFormat from "../format/Format";
import { searchProductByName } from "../service/Product";
export default function Shop() {
  useEffect(() => {
    document.title = "Sản phẩm";
  }, []);
  const param = useParams();

  const [minAmount, setMinAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(50000000);
  const handleSliderChange = (newValues) => {
    setMinAmount(newValues[0]);
    setMaxAmount(newValues[1]);
  };

  //back-top-top
  const [showsScrolBtn, setShowScrolBtn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowScrolBtn(true) : setShowScrolBtn(false);
    };

    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.addEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  //get brand Product
  const [brands, setBrands] = useState([]);
  const getBrand = async () => {
    const result = await getAllBrand();
    setBrands(result);
  };
  // phân trang

  //getProduct by name
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const getProductByName = async () => {
    const response = await searchProductByName(param.name, page);
    setProducts(response);
  };
  const nextPage = () => {
    setPage((page) => page + 1);
   window.scrollTo(0,0)
  };
  const previousPage = () => {
    setPage(page - 1);
    window.scrollTo(0,0)
  };
  //
  useEffect(() => {
    getBrand();
    getProductByName();
  }, [param.name]);
  useEffect(() => {
    getProductByName();
  }, [page]);

  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                <Link to="/home">
                  <i className="fa fa-home" /> Home
                </Link>
                <span>Sản phẩm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-shop spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
              <div className="filter-widget">
                <h4 className="fw-title">Bộ sưu tập</h4>
                <ul className="filter-catagories">
                  <li>
                    <a href="#">Nam</a>
                  </li>
                  <li>
                    <a href="#">Nữ</a>
                  </li>
                  <li>
                    <a href="#">Trẻ Em</a>
                  </li>
                </ul>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Thương hiệu</h4>
                <div className="fw-brand-check">
                  {brands != null &&
                    brands.map((brand) => {
                      return (
                        <div className="bc-item" key={brand.id}>
                          <label htmlFor={brand.id}>
                            {brand.nameBrand}
                            <input type="checkbox" id={brand.id} />
                            <span className="checkmark" />
                          </label>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Giá</h4>
                <div className="filter-range-wrap">
                  <div className="range-slider">
                    <div className="price-input">
                      <input type="text" id="minamount" value={minAmount} />
                      <input type="text" id="maxamount" value={maxAmount} />
                    </div>
                  </div>
                  <Slider
                    min={1000000}
                    max={40000000}
                    value={[minAmount, maxAmount]}
                    onChange={handleSliderChange}
                    className="price-range"
                    type="ranger"
                  />
                </div>
                <a href="#" className="filter-btn">
                  Tìm kiếm
                </a>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Màu sắc</h4>
                <div className="fw-color-choose">
                  <div className="cs-item">
                    <input type="radio" id="cs-black" />
                    <label className="cs-black" htmlFor="cs-black">
                      Đen
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-violet" />
                    <label className="cs-violet" htmlFor="cs-violet">
                      Trắng
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-blue" />
                    <label className="cs-blue" htmlFor="cs-blue">
                      Xanh
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-yellow" />
                    <label className="cs-yellow" htmlFor="cs-yellow">
                      Vàng
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-red" />
                    <label className="cs-red" htmlFor="cs-red">
                      Đỏ
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" id="cs-green" />
                    <label className="cs-green" htmlFor="cs-green">
                      Green
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Size</h4>
                <div className="fw-size-choose">
                  <div className="sc-item">
                    <input type="radio" id="s-size" />
                    <label htmlFor="s-size">41</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="m-size" />
                    <label htmlFor="m-size">42</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="l-size" />
                    <label htmlFor="l-size">43</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" id="xs-size" />
                    <label htmlFor="xs-size">44</label>
                  </div>
                </div>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Tags</h4>
                <div className="fw-tags">
                  {/* <a href="#">Towel</a>
                                        <a href="#">Shoes</a>
                                        <a href="#">Coat</a>
                                        <a href="#">Dresses</a>
                                        <a href="#">Trousers</a>
                                        <a href="#">Men's hats</a>
                                        <a href="#">Backpack</a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="product-show-option">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="select-option">
                      <select className="sorting">
                        <option value="">Giá cao đến thấp</option>
                        <option value="">Giá thấp đến cao</option>
                        <option value="">Tên A-Z </option>
                        <option value="">Tên Z-A</option>
                      </select>
                      <select className="p-show">
                        <option value="">Show:</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5 text-right">
                    <p>
                      Kết quả tìm kiếm{" "}
                      <span className="quantity">{products.totalElements}</span>{" "}
                      sản phẩm
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-list">
                <div className="row">
                  {products.content != null &&
                    products.content.map((product) => {
                      return (
                        <div className="col-lg-4 col-sm-6" key={product.id}>
                          <div className="product-item">
                            <div className="pi-pic">
                              <img
                                src={product.imageMain}
                                alt=""
                                style={{ height: "220px" }}
                              />
                              {product.discount.id == 1 ? (
                                <div className=""></div>
                              ) : (
                                <div className="sale pp-sale">
                                  Sale {product.discount.percent} %
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
                                    <i className="fa fa-info-circle"></i> Chi
                                    tiết
                                  </Link>
                                </li>
                                <li className="w-icon">
                                  <a href="#">
                                    <i className="fa " />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="pi-text">
                              <div className="catagory-name">
                                {product.brand.nameBrand}
                              </div>

                              <h5>{product.nameProduct}</h5>

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
              {products.totalElements > products.size ? (
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="ps-pagination">
                    {page == products.pageable.pageNumber ? (
                      <ul class="pagination justify-content-center">
                       
                        <li class="page-item">
                          <a
                            class="page-link active"
                            rel="noindex, nofollow"
                            onClick={() => {
                              setPage(0);
                              window.scrollTo(0,3)
                            }}
                          >
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              setPage(1);
                              window.scrollTo(0,3)
                            }}
                          >
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              setPage(2);
                              window.scrollTo(0,3)
                            }}
                          >
                            3
                          </a>
                        </li>
                        
                        {page==(products.totalPages-1) ? <></>:
                        <><li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              nextPage();
                            }}
                          >
                            &gt;
                          </a>
                        </li>
                        <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              setPage(products.totalPages-1);
                              window.scrollTo(0,3)
                            }}
                          >
                            &gt;&gt;
                          </a>
                        </li>
                        </>}
                        
                      </ul>
                    ) : (
                      <ul class="pagination justify-content-center">
                         <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              setPage(0);
                            }}
                          >
                            &lt;&lt;
                          </a>
                        </li>
                        <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              previousPage();
                            }}
                          >
                            &lt;
                          </a>
                        </li>
                        <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              setPage(0);
                              window.scrollTo(0,3)
                            }}
                          >
                            1
                          </a>
                        </li>{" "}
                        <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              setPage(1);
                              window.scrollTo(0,3)
                            }}
                          >
                            2
                          </a>
                        </li>{" "}
                        <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              setPage(3);
                              window.scrollTo(0,3)
                            }}
                          >
                            3
                          </a>
                        </li>{" "}
                        <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              nextPage();
                            }}
                          >
                            &gt;
                          </a>
                        </li>{" "}
                        <li class="page-item">
                          <a
                            class="page-link"
                            rel="noindex, nofollow"
                            onClick={() => {
                              setPage(products.totalPages);
                            }}
                          >
                            &gt;&gt;
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
      {showsScrolBtn && (
        <a
          className="btn back-to-top"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <i className="fa fa-angle-double-up"></i>
        </a>
      )}
    </>
  );
}
