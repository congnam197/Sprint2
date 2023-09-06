import {Link} from "react-router-dom";

export  default  function  DetailProduct(){
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
                            <span>Chi tiết sản phẩm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                {/* Product Shop Section Begin */}
                <section className="product-shop spad page-details">
                    <div className="container">
                        <div className="row">
                          
 {/* Product Shop Section End */}
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="product-pic-zoom">
                                            <img
                                                className="product-big-img"
                                                src="img/product-single/product-1.jpg"
                                                alt=""
                                            />
                                            <div className="zoom-icon">
                                                <i className="fa fa-search-plus" />
                                            </div>
                                        </div>
                                        <div className="product-thumbs">
                                            <div className="product-thumbs-track ps-slider owl-carousel">
                                                <div
                                                    className="pt active"
                                                    data-imgbigurl="img/product-single/product-1.jpg"
                                                >
                                                    <img src="img/product-single/product-1.jpg" alt="" />
                                                </div>
                                                <div
                                                    className="pt"
                                                    data-imgbigurl="img/product-single/product-2.jpg"
                                                >
                                                    <img src="img/product-single/product-2.jpg" alt="" />
                                                </div>
                                                <div
                                                    className="pt"
                                                    data-imgbigurl="img/product-single/product-3.jpg"
                                                >
                                                    <img src="img/product-single/product-3.jpg" alt="" />
                                                </div>
                                                <div
                                                    className="pt"
                                                    data-imgbigurl="img/product-single/product-3.jpg"
                                                >
                                                    <img src="img/product-single/product-3.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="product-details">
                                            <div className="pd-title">
                                                <span>Nike</span>
                                                <h3>Pure Pineapple</h3>
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
                                                <p>
                                                    {/* Lorem ipsum dolor sit amet, consectetur ing elit, sed do
                                                    eiusmod tempor sum dolor sit amet, consectetur adipisicing
                                                    elit, sed do mod tempor */}
                                                </p>
                                                <h4>
                                                    2.300.000đ <span>2.800.000đ</span>
                                                </h4>
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
                                                        <label htmlFor="cc-yellow" className="cc-yellow" />
                                                    </div>
                                                    <div className="cc-item">
                                                        <input type="radio" id="cc-violet" />
                                                        <label htmlFor="cc-violet" className="cc-violet" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pd-size-choose">
                                                <div className="sc-item">
                                                    <input type="radio" id="sm-size" />
                                                    <label htmlFor="sm-size">s</label>
                                                </div>
                                                <div className="sc-item">
                                                    <input type="radio" id="md-size" />
                                                    <label htmlFor="md-size">m</label>
                                                </div>
                                                <div className="sc-item">
                                                    <input type="radio" id="lg-size" />
                                                    <label htmlFor="lg-size">l</label>
                                                </div>
                                                <div className="sc-item">
                                                    <input type="radio" id="xl-size" />
                                                    <label htmlFor="xl-size">xs</label>
                                                </div>
                                            </div>
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <span className="dec qtybtn">-</span>
                                                    <input type="text" defaultValue={1} />
                                                    <span className="inc qtybtn">+</span>
                                                </div>
                                                <a href="#" className="primary-btn pd-cart">
                                                    Thêm giỏ hàng
                                                </a>
                                            </div>
                                            <ul className="pd-tags">
                                                <li>
                                                    <span>Thể loại</span>: More Accessories, Wallets &amp;
                                                    Cases
                                                </li>
                                                <li>
                                                    <span>TAGS</span>: Clothing, T-shirt, Woman
                                                </li>
                                            </ul>
                                            <div className="pd-share">
                                                <div className="p-code">Mã : 00012</div>
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
                                                            <h5>Introduction</h5>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                                dolore magna aliqua. Ut enim ad minim veniam, quis
                                                                nostrud exercitation ullamco laboris nisi ut aliquip
                                                                ex ea commodo consequat. Duis aute irure dolor in{" "}
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <img src="img/product-single/tab-desc.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab-2" role="tabpanel">
                                                <div className="specification-table">
                                                    <table>
                                                        <tbody>
                                                        <tr>
                                                            <td className="p-catagory">Customer Rating</td>
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
                                                                <div className="p-price">$495.00</div>
                                                            </td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td className="p-catagory">Add To Cart</td>
                                                            <td>
                                                                <div className="cart-add">+ add to cart</div>
                                                            </td>
                                                        </tr> */}
                                                        <tr>
                                                            <td className="p-catagory">Thương hiệu</td>
                                                            <td>
                                                                <div className="p-stock">22 in stock</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-catagory">Chất liệu</td>
                                                            <td>
                                                                <div className="p-weight">cotton</div>
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
                                                                <span className="cs-color" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-catagory">Mã sản phẩm</td>
                                                            <td>
                                                                <div className="p-code">00012</div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* <div className="tab-pane fade" id="tab-3" role="tabpanel">
                                                <div className="customer-review-option">
                                                    <h4>2 Comments</h4>
                                                    <div className="comment-option">
                                                        <div className="co-item">
                                                            <div className="avatar-pic">
                                                                <img src="img/product-single/avatar-1.png" alt="" />
                                                            </div>
                                                            <div className="avatar-text">
                                                                <div className="at-rating">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star-o" />
                                                                </div>
                                                                <h5>
                                                                    Brandon Kelley <span>27 Aug 2019</span>
                                                                </h5>
                                                                <div className="at-reply">Nice !</div>
                                                            </div>
                                                        </div>
                                                        <div className="co-item">
                                                            <div className="avatar-pic">
                                                                <img src="img/product-single/avatar-2.png" alt="" />
                                                            </div>
                                                            <div className="avatar-text">
                                                                <div className="at-rating">
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star" />
                                                                    <i className="fa fa-star-o" />
                                                                </div>
                                                                <h5>
                                                                    Roy Banks <span>27 Aug 2019</span>
                                                                </h5>
                                                                <div className="at-reply">Nice !</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="personal-rating">
                                                        <h6>Your Ratind</h6>
                                                        <div className="rating">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star-o" />
                                                        </div>
                                                    </div>
                                                    <div className="leave-comment">
                                                        <h4>Leave A Comment</h4>
                                                        <form action="#" className="comment-form">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <input type="text" placeholder="Name" />
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <input type="text" placeholder="Email" />
                                                                </div>
                                                                <div className="col-lg-12">
                            <textarea
                                placeholder="Messages"
                                defaultValue={""}
                            />
                                                                    <button type="submit" className="site-btn">
                                                                        Send message
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                <div className="col-lg-3 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="img/products/women-1.jpg" alt="" />
                                            <div className="sale">Sale</div>
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
                                                    <a href="#">Chi tiết</a>
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
                                                <h5>Pure Pineapple</h5>
                                            </a>
                                            <div className="product-price">
                                                $14.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="img/products/women-2.jpg" alt="" />
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
                                            <div className="product-price">$13.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="img/products/women-3.jpg" alt="" />
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
                                            <div className="product-price">$34.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="product-item">
                                        <div className="pi-pic">
                                            <img src="img/products/women-4.jpg" alt="" />
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
                                                <h5>Converse Shoes</h5>
                                            </a>
                                            <div className="product-price">$34.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Related Products Section End */}
                        {/* Partner Logo Section Begin */}
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
                        {/* Partner Logo Section End */}
                    </>
    )
}