import {Link} from "react-router-dom";
import p1 from "../asset/images/p1.jpg";
import p4 from "../asset/images/p4.jpg";
import p6 from "../asset/images/p6.jpg";
import g1 from "../asset/images/g1.jpg";
import g2 from "../asset/images/g2.jpg";
import { useState } from "react";

export  default  function  DetailProduct(){
    const [quantity, setQuantity] = useState(1);
  const addProduct = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const removeProduct = () => {
    if(quantity>1){
    setQuantity(quantity - 1);
    }
    else{
        setQuantity(1);
    }
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
                                                src={p1}
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
                                                  
                                                >
                                                    <img src={p1} alt="" />
                                                </div>
                                                <div
                                                    className="pt"
                                                    
                                                >
                                                    <img src={p1} alt="" />
                                                </div>
                                                <div
                                                    className="pt"
                                                    
                                                >
                                                    <img src={p1} alt="" />
                                                </div>
                                                <div
                                                    className="pt"
                                                    
                                                >
                                                    <img src={p1} alt="" />
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
                                                    <span className="dec qtybtn" onClick={removeProduct}>-</span>
                                                    <input type="text" value={quantity} min={0} max={10}/>
                                                    <span className="inc qtybtn" onClick={addProduct}>+</span>
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
                                                            Mẫu giày sneaker ECCO NOUVELLE được thiết kế dành riêng cho phái đẹp đang tim kiếm sự sang trọng trong trang phục thường ngày. Chế tác bằng da ECCO cao cấp, kết hợp công nghệ đế ECCO FLUIDFORM™ tiên tiến, mang đến cảm giác thoải mái và êm ái vượt trội.
Chất liệu da ECCO cao cấp
Hệ thống dây buộc dễ dàng điều chỉnh, mang lại sự vừa vặn tối đa
Lớp lót bằng vài dệt kim, kết hợp đế lót da êm ái
Công nghệ đế đúc trực tiếp ECCO FLUIDFORM ™ tạo ra khuôn đế tiên tiến, vừa vặn, êm ái, thoải mái
Đế ngoài cao su bền bỉ, độ bám cao tạo sự ổn định trên mọi địa hình.
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-5">
                                                            <img src={p1} alt="" />
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
                                                                <div className="p-price">2.300.000</div>
                                                            </td>
                                                        </tr>
                                                      
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
                                                                <span className="p-code">Xanh</span>
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
                                            <img src={p4} alt="" />
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
                                            <img src={p6} alt="" />
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
                                                    <Link to="/detail-product">+ Chi tiết</Link>
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
                                            <img src={g1} alt="" />
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
                                                    <Link to="/detail-product">+ Chi tiết</Link>
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
                                            <img src={g2} alt="" />
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
                                                    <Link to="/detail-product">+ Chi tiết</Link>
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
                  
                    </>
    )
}