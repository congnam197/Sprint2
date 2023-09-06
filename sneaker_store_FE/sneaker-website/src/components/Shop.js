import { useEffect, useState } from "react";
export default function Shop() {
    const [quantity, setQuantity] = useState(1);
    const addProduct = () => {
        setQuantity((quantity) => quantity + 1);
    };
    const removeProduct = () => {
        setQuantity(quantity - 1);
    };
    return (
        <>
            <div className="breacrumb-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-text">
                                <a href="#">
                                    <i className="fa fa-home" /> Home
                                </a>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-shop spad">
                <div className="container">
                    <div className="row" >
                    <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                                <div className="filter-widget">
                                    <h4 className="fw-title">Categories</h4>
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
                                        <div className="bc-item">
                                            <label htmlFor="bc-calvin">
                                                Nike
                                                <input type="checkbox" id="bc-calvin" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="bc-item">
                                            <label htmlFor="bc-diesel">
                                                Adidas
                                                <input type="checkbox" id="bc-diesel" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="bc-item">
                                            <label htmlFor="bc-polo">
                                                Gucci
                                                <input type="checkbox" id="bc-polo" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="bc-item">
                                            <label htmlFor="bc-tommy">
                                                Tommy Hilfiger
                                                <input type="checkbox" id="bc-tommy" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="filter-widget">
                                    <h4 className="fw-title">Giá</h4>
                                    <div className="filter-range-wrap">
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                        <div
                                            className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min={33}
                                            data-max={98}
                                        >
                                            <div className="ui-slider-range ui-corner-all ui-widget-header" />
                                            <span
                                                tabIndex={0}
                                                className="ui-slider-handle ui-corner-all ui-state-default"
                                            />
                                            <span
                                                tabIndex={0}
                                                className="ui-slider-handle ui-corner-all ui-state-default"
                                            />
                                        </div>
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
                                        <a href="#">Towel</a>
                                        <a href="#">Shoes</a>
                                        <a href="#">Coat</a>
                                        <a href="#">Dresses</a>
                                        <a href="#">Trousers</a>
                                        <a href="#">Men's hats</a>
                                        <a href="#">Backpack</a>
                                    </div>
                                </div>
                            </div>
                        <div className="col-lg-9 order-1 order-lg-2">
                            <div className="product-show-option">
                                <div className="row">
                                    <div className="col-lg-7 col-md-7">
                                        <div className="select-option">
                                            <select className="sorting">
                                                <option value="">Default Sorting</option>
                                            </select>
                                            <select className="p-show">
                                                <option value="">Show:</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5 text-right">
                                        <p>Show 01- 09 Of 36 Product</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="img/products/product-1.jpg" alt="" />
                                                <div className="sale pp-sale">Sale</div>
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
                                                        <a href="#">+ Quick View</a>
                                                    </li>
                                                    <li className="w-icon">
                                                        <a href="#">
                                                            <i className="fa fa-random" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">Towel</div>
                                                <a href="#">
                                                    <h5>Pure Pineapple</h5>
                                                </a>
                                                <div className="product-price">
                                                    $14.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="img/products/product-2.jpg" alt="" />
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
                                                        <a href="#">+ Quick View</a>
                                                    </li>
                                                    <li className="w-icon">
                                                        <a href="#">
                                                            <i className="fa fa-random" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">Coat</div>
                                                <a href="#">
                                                    <h5>Guangzhou sweater</h5>
                                                </a>
                                                <div className="product-price">
                                                    $13.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="img/products/product-3.jpg" alt="" />
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
                                                        <a href="#">+ Quick View</a>
                                                    </li>
                                                    <li className="w-icon">
                                                        <a href="#">
                                                            <i className="fa fa-random" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">Shoes</div>
                                                <a href="#">
                                                    <h5>Guangzhou sweater</h5>
                                                </a>
                                                <div className="product-price">
                                                    $34.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="img/products/product-4.jpg" alt="" />
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
                                                        <a href="#">+ Quick View</a>
                                                    </li>
                                                    <li className="w-icon">
                                                        <a href="#">
                                                            <i className="fa fa-random" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">Coat</div>
                                                <a href="#">
                                                    <h5>Microfiber Wool Scarf</h5>
                                                </a>
                                                <div className="product-price">
                                                    $64.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="img/products/product-5.jpg" alt="" />
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
                                                        <a href="#">+ Quick View</a>
                                                    </li>
                                                    <li className="w-icon">
                                                        <a href="#">
                                                            <i className="fa fa-random" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">Shoes</div>
                                                <a href="#">
                                                    <h5>Men's Painted Hat</h5>
                                                </a>
                                                <div className="product-price">
                                                    $44.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="img/products/product-6.jpg" alt="" />
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
                                                        <a href="#">+ Quick View</a>
                                                    </li>
                                                    <li className="w-icon">
                                                        <a href="#">
                                                            <i className="fa fa-random" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">Shoes</div>
                                                <a href="#">
                                                    <h5>Converse Shoes</h5>
                                                </a>
                                                <div className="product-price">
                                                    $34.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="img/products/product-7.jpg" alt="" />
                                                <div className="sale pp-sale">Sale</div>
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
                                                        <a href="#">+ Quick View</a>
                                                    </li>
                                                    <li className="w-icon">
                                                        <a href="#">
                                                            <i className="fa fa-random" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">Towel</div>
                                                <a href="#">
                                                    <h5>Pure Pineapple</h5>
                                                </a>
                                                <div className="product-price">
                                                    $64.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="img/products/product-8.jpg" alt="" />
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
                                                        <a href="#">+ Quick View</a>
                                                    </li>
                                                    <li className="w-icon">
                                                        <a href="#">
                                                            <i className="fa fa-random" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">Coat</div>
                                                <a href="#">
                                                    <h5>2 Layer Windbreaker</h5>
                                                </a>
                                                <div className="product-price">
                                                    $44.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="product-item">
                                            <div className="pi-pic">
                                                <img src="img/products/product-9.jpg" alt="" />
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
                                                        <a href="#">+ Quick View</a>
                                                    </li>
                                                    <li className="w-icon">
                                                        <a href="#">
                                                            <i className="fa fa-random" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pi-text">
                                                <div className="catagory-name">Shoes</div>
                                                <a href="#">
                                                    <h5>Converse Shoes</h5>
                                                </a>
                                                <div className="product-price">
                                                    $34.00
                                                    <span>$35.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loading-more">
                                <i className="icon_loading" />
                                <a href="#">Loading More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="partner-logo">
                <div className="container">
                    <div className="logo-carousel owl-carousel">
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-1.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-2.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-3.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-4.png" alt="" />
                            </div>
                        </div>
                        <div className="logo-item">
                            <div className="tablecell-inner">
                                <img src="img/logo-carousel/logo-5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
