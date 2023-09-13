import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Slider from "react-slider";
import { getAllBrand } from "../service/Brand";
import CurrencyFormat from "../format/Format";
import { getAllProducts, sortProduct } from "../service/Product";
import { getProductTypes } from "../service/ProductType";
import { getAllColors } from "../service/Color";
import { getAllSizes } from "../service/Size";
export default function Shop() {
  useEffect(() => {
    document.title = "Sản phẩm";
  }, []);
  const param = useParams();
  const location = useLocation();

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
  // getProductAll
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const getAllProductsShop = async () => {
    const data = await getAllProducts(page);
    setProducts(data);
  };

  const nextPage = () => {
    setPage((page) => page + 1);
    window.scrollTo(0, 0);
  };
  const previousPage = () => {
    setPage(page - 1);
    window.scrollTo(0, 0);
  };
  //sắp xếp product :
  const sort = async () => {
    var selectedValue = document.getElementById("sortingSelect").value;
    const data = await sortProduct(page, selectedValue);
    setProducts(data);
  };

  //getTypeProduct
  const [productTypes, setProductTypes] = useState([]);
  const getTypeProduct = async () => {
    const result = await getProductTypes();
    setProductTypes(result);
  };
  // getColor
  const [colors, setColors] = useState([]);
  const getColors = async () => {
    const result = await getAllColors();
    setColors(result);
  };
  // get size
  const [sizes, setSizes] = useState([]);
  const getSize = async () => {
    const size = await getAllSizes();
    setSizes(size);
  };
  useEffect(() => {
    getBrand();
    getAllProductsShop();
  }, [location]);

  useEffect(() => {
    sort();
  }, [page]);

  useEffect(() => {
    getTypeProduct();
    getColors();
    getSize();
  }, []);

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
                  {productTypes &&
                    productTypes.map((type) => {
                      return (
                        <li key={type.id}>
                          <input type="checkbox" onClick={() => {}} id={type.id} />{type.productType}
                        </li>
                      );
                    })}
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
                  {colors &&
                    colors.map((color) => {
                      return (
                        <div className="cs-item" key={color.id}>
                          <input type="radio" id={color.code} />
                          <label className={color.code} htmlFor={color.code}>
                            {color.color}
                          </label>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="filter-widget">
                <h4 className="fw-title">Size</h4>
                <div className="fw-size-choose">
                  {sizes &&
                    sizes.map((size) => {
                      return (
                        <div className="sc-item" key={size.id}>
                          <input type="radio" id={size.id} />
                          <label htmlFor={size}>{size.size}</label>
                        </div>
                      );
                    })}
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
                      <select
                        className="sorting"
                        onChange={() => sort()}
                        id="sortingSelect"
                      >
                        <option value={4}>Giá cao đến thấp</option>
                        <option value={3}>Giá thấp đến cao</option>
                        <option value={1}>Tên A-Z </option>
                        <option value={2}>Tên Z-A</option>
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
                {products.numberOfElements == 0 ? (
                  <>
                    <div className="not-data">Không có dữ liệu</div>
                  </>
                ) : (
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
                )}
              </div>

              {products.totalPages > 1 && (
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="ps-pagination">
                    <ul className="pagination justify-content-center">
                      {page > 0 && (
                        <>
                          <li className="page-item">
                            <a
                              className="page-link"
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
                        </>
                      )}
                      {Array.from(
                        { length: products.totalPages },
                        (_, index) => (
                          <li
                            key={index}
                            className={`page-item ${
                              page === index ? "active" : ""
                            }`}
                          >
                            <a
                              className="page-link"
                              rel="noindex, nofollow"
                              onClick={() => {
                                setPage(index);
                              }}
                            >
                              {index + 1}
                            </a>
                          </li>
                        )
                      )}
                      {page < products.totalPages - 1 && (
                        <>
                          <li className="page-item">
                            <a
                              className="page-link"
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
                                setPage(products.totalPages - 1);
                                window.scrollTo(0, 3);
                              }}
                            >
                              &gt;&gt;
                            </a>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
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
