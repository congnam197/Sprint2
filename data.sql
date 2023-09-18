-- role
INSERT INTO `sneaker_store`.`role` (`id_role`, `role`) VALUES ('1', 'ROLE_ADMIN');
INSERT INTO `sneaker_store`.`role` (`id_role`, `role`) VALUES ('2', 'ROLE_USER');



 -- account
INSERT INTO `sneaker_store`.`account` (`id_account`, `email`, `password`) VALUES ('1', 'admin@gmail.com', '$2a$12$6yEqFf.q0KcrqQXyljgd0OHPK8TzoLfta98Wy2Rorads1lzEjDuE.');
INSERT INTO `sneaker_store`.`account` (`id_account`, `email`, `password`) VALUES ('2', 'ptran4958@gmail.com', '$2a$12$6yEqFf.q0KcrqQXyljgd0OHPK8TzoLfta98Wy2Rorads1lzEjDuE.');
INSERT INTO `sneaker_store`.`account` (`id_account`, `email`, `password`) VALUES ('3', 'maiyeu22197@gmail.com', '$2a$12$6yEqFf.q0KcrqQXyljgd0OHPK8TzoLfta98Wy2Rorads1lzEjDuE.');
 
 -- account-role
INSERT INTO `sneaker_store`.`account_role` (`id_account`, `id_role`) VALUES ('1', '1');
INSERT INTO `sneaker_store`.`account_role` (`id_account`, `id_role`) VALUES ('2', '2');
INSERT INTO `sneaker_store`.`account_role` (`id_account`, `id_role`) VALUES ('3', '2');

-- brand
INSERT INTO `sneaker_store`.`brand` (`id_brand`, `name_brand`) VALUES ('1', 'Nike');
INSERT INTO `sneaker_store`.`brand` (`id_brand`, `name_brand`) VALUES ('2', 'Adidas');
INSERT INTO `sneaker_store`.`brand` (`id_brand`, `name_brand`) VALUES ('3', 'Yeezy');
INSERT INTO `sneaker_store`.`brand` (`id_brand`, `name_brand`) VALUES ('4', 'MLB');
INSERT INTO `sneaker_store`.`brand` (`id_brand`, `name_brand`) VALUES ('5', 'Gucci');
INSERT INTO `sneaker_store`.`brand` (`id_brand`, `name_brand`) VALUES ('6', 'Converse');
INSERT INTO `sneaker_store`.`brand` (`id_brand`, `name_brand`) VALUES ('7', 'Puma');

-- type-product
INSERT INTO `sneaker_store`.`product_type` (`id_product_type`, `product_type`) VALUES ('1', 'Nam');
INSERT INTO `sneaker_store`.`product_type` (`id_product_type`, `product_type`) VALUES ('2', 'Nữ');
INSERT INTO `sneaker_store`.`product_type` (`id_product_type`, `product_type`) VALUES ('3', 'Trẻ Em');

-- discount
INSERT INTO `sneaker_store`.`discount` (`id_discount`, `percent`) VALUES ('1', '0');
INSERT INTO `sneaker_store`.`discount` (`id_discount`, `percent`) VALUES ('2', '15');
INSERT INTO `sneaker_store`.`discount` (`id_discount`, `percent`) VALUES ('3', '20');
INSERT INTO `sneaker_store`.`discount` (`id_discount`, `percent`) VALUES ('4', '30');
INSERT INTO `sneaker_store`.`discount` (`id_discount`, `percent`) VALUES ('5', '45');

-- màu
INSERT INTO `sneaker_store`.`color` (`id`, `color`) VALUES ('1', 'Trắng');
INSERT INTO `sneaker_store`.`color` (`id`, `color`) VALUES ('2', 'Vàng');
INSERT INTO `sneaker_store`.`color` (`id`, `color`) VALUES ('3', 'Xanh');
INSERT INTO `sneaker_store`.`color` (`id`, `color`) VALUES ('4', 'Đen');
INSERT INTO `sneaker_store`.`color` (`id`, `color`) VALUES ('5', 'Đỏ');

-- size
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('1', '36');
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('2', '37');
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('3', '38');
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('4', '39');
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('5', '40');
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('6', '41');
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('7', '42');
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('8', '43');
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('9', '44');
INSERT INTO `sneaker_store`.`size` (`id`, `size`) VALUES ('10', '45');

-- image

-- product
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`)VALUES ('1', '2023-01-10', 'AIR FORCE 1 ', 'Vải', 'AIR FORCE 1 TIME WARP', '4400000', '20', 0, '1', '1', '1', 'https://kingshoes.vn/data/upload/media/SNEAKER-315122-111-AIR-FORCE-1-07-NIKE-KINGSHOES.VN-TPHCM-TANBINH-17-logo-1551924204-.jpg'); 

INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`)VALUES ('2', '2023-01-10', 'AIR MAX 1 TIME WARP', 'Vải', 'AIR MAX 1 TIME WARP', '4200000', '20', 0, '1', '1', '1', 'https://kingshoes.vn/data/upload/media/fj5472-121-giay-nike-air-max-1-time-warp-chinh-hang-gia-tot-den-king-shoes-12.jpeg'); 
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('3', '2023-01-10', 'YEEZY BOOST 350 V2 BELUGA REFLECTIVE', 'Vải', 'YEEZY BOOST 350 V2 BELUGA REFLECTIVE', '1200000', '20', 0, '3', '2', '1', 'https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-beluga-reflective-gw1229-king-shoes-sneaker-real-hcm-11-1639905369.jpeg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('4', '2023-01-10', 'ULTRABOOST 4.0 DNA', 'Vải', 'ULTRABOOST 4.0 DNA', '3600000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-ultraboost-tra%CC%86%CC%81ng-fz4007-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1-1647670125.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('5', '2023-01-10', 'YEEZY BOOST 700 V2 STATIC', 'Vải', 'YEEZY BOOST 700 V2 STATIC', '1200000', '20', 0, '3', '2', '1', 'https://kingshoes.vn/data/upload/media/adidas-yeezy-boost-700-v2-static-chinh-hang-tphcm-king-shoes-sneaker-authentic-9.png');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('6', '2023-01-10', 'NIKE AIR MAX 97', 'Vải', 'NIKE AIR MAX 97', '4200000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/917646-004-giay-air-max-97-prm-light-bone-chinh-hang-gia-tot-den-king-shoes-12.jpeg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('7', '2023-01-10', 'DUNK HIGH AMBUSH', 'Da lộn', 'DUNK HIGH AMBUSH', '16000000', '20', 0, '2', '3', '1', 'https://kingshoes.vn/data/upload/media/nike-dunk-hi-cu7544-400-king-shoes-sneaker-real-hcm35-1623475900.jpg');

INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('8', '2023-01-10', 'PUMA SLIPSTREAM', 'Da lộn', 'PUMA SLIPSTREAM', '3800000', '20', 0, '7', '1', '1', 'https://kingshoes.vn/data/upload/media/388549-04-giay-puma-slipstream-chinh-hang-gia-tot-den-king-shoes-29.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('9', '2023-01-10', 'NMD R1 ALL WHITE', 'Vải', 'NMD R1 ALL WHITE', '2800000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/adidas-nmd-r1-all-white-h019031-king-shoes-sneaker-real-hcm-1624253160.jpeg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('10', '2023-01-10', 'ADIDAS GRADAS CLOUD WHITE', 'Da lộn', 'ADIDAS GRADAS CLOUD WHITE', '2900000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-8.jpeg');

INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('11', '2023-01-10', 'MLB Big Ball Chunky A', 'Da lộn', 'MLB Big Ball Chunky A', '2490000', '20', 0, '4', '1', '1', 'https://product.hstatic.net/1000284478/product/50ivs_3ashc101n_1_bc11cc03aa6c40a8a23f08086d01b4bf_large.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('12', '2023-01-10', 'Converse Chuck 70 Nautical Tri Blocked', 'Vải', 'Converse Chuck 70 Nautical Tri Blocked', '1800000', '20', 0, '6', '1', '1', 'https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04968C/A04968C_1-650x650.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('13', '2023-01-10', 'ADIDAS SAMBA CLASSIC', 'Da lộn', 'ADIDAS SAMBA CLASSIC', '2900000', '20', 0, '2', '3', '1', 'https://kingshoes.vn/data/upload/media/772109-giay-adidas-samba-classic-chinh-hang-gia-tot-den-king-shoes1.jpg');

INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('14', '2023-01-10', 'NIKE AIR MAX EXCEE', 'Vải', 'NIKE AIR MAX EXCEE', '2900000', '20', 0, '1', '1', '1', 'https://kingshoes.vn/data/upload/media/cd5432-127-giay-nike-air-max-excee-jade-ice-chinh-hang-gia-tot-den-king-shoes-19.jpg'); 
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('15', '2023-01-10', 'NIKE E-SERIES AD', 'Vải', 'NIKE E-SERIES AD', '2900000', '20', 0, '1', '1', '5', 'https://kingshoes.vn/data/upload/media/dv2436-003-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-3.jpeg'); 
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('16', '2023-01-10', 'NIKE AIR MAX 1 87', 'Vải', 'NIKE AIR MAX 1 87', '4200000', '20', 0, '1', '1', '1', 'https://kingshoes.vn/data/upload/media/fj7734-101-giay-nike-air-max-1-87-womens-chinh-hang-gia-tot-den-king-shoes-12.jpeg'); 
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('17', '2023-01-10', 'NIKE E-SERIES AD', 'Vải', 'NIKE E-SERIES AD', '2900000', '20', 0, '1', '1', '1', 'https://kingshoes.vn/data/upload/media/dv2436-200-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-3.jpeg'); 
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('18', '2023-01-10', 'NIKE DOWNSHIFTER 12 PREMIUM', 'Vải', 'NIKE DOWNSHIFTER 12 PREMIUM', '2200000', '20', 0, '1', '1', '1', 'https://kingshoes.vn/data/upload/media/dx7885-100-giay-nike-downshifter-12-premium-womens-road-running-chinh-hang-gia-tot-den-king-shoes-13.jpeg'); 
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('19', '2023-01-10', 'AIR MAX 1 87 SAFARI', 'Vải', 'AIR MAX 1 87 SAFARI', '4800000', '20', 0, '1', '1', '1', 'https://kingshoes.vn/data/upload/media/fb5059-100-giay-nike-air-max-1-87-safari-chinh-hang-gia-tot-den-king-shoes-12.jpeg'); 
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('20', '2023-01-10', 'AIR FORCE 1 SERENA', 'Vải', 'AIR FORCE 1 SERENA', '3600000', '20', 0, '1', '1', '1', 'https://kingshoes.vn/data/upload/media/dm5036-100-giay-nike-air-force-1-serena-summit-white-chinh-hang-gia-tot-den-king-shoes-12.jpeg'); 
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('21', '2023-01-10', 'AIR FORCE 1 STAR', 'Vải', 'AIR FORCE 1 STAR', '3600000', '20', 0, '1', '1', '1', 'https://kingshoes.vn/data/upload/media/fd0793-100-giay-nike-air-force-1-star-chinh-hang-gia-tot-den-king-shoes-15-1692784511.jpeg'); 


INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('22', '2023-01-10', 'SOLAR HU NMD', 'Vải', 'SOLAR HU NMD', '5800000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/adidas-solar-hu-nmd-ee7579-king-shoes-sneaker-real-hcm-1624252655.jpeg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('23', '2023-01-10', 'NMD_CS1 PK COMPLEX', 'Vải', 'NMD_CS1 PK COMPLEX', '4900000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/giay-adidas-NMD-CS1-PK-COMPLEX-chinh-hang-tphcm-B41819-king-shoes-sneaker-authentic-tan-binh-4-1552211506-.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('24', '2023-01-10', 'ADIDAS ULTRA4D SUN DEVILS', 'Vải', 'ADIDAS ULTRA4D SUN DEVILS', '4800000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/fy3960-giay-ultra4d-sun-devils-chinh-hang-gia-tot-den-king-shoes-1.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('25', '2023-01-10', 'ADIDAS ULTRA 4D', 'Vải', 'ADIDAS ULTRA 4D', '4800000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/hq0949-giay-adidas-ultra-4d-chinh-hang-gia-tot-den-king-shoes-1.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('26', '2023-01-10', 'ADIDAS FORUM LOW CL', 'Vải', 'ADIDAS FORUM LOW CL', '3200000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/hq6874-giay-forum-low-cl-trang-chinh-hang-gia-tot-den-king-shoes-1.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('27', '2023-01-10', 'ULTRABOOST 20 CLOUD WHITE', 'Vải', 'ULTRABOOST 20 CLOUD WHITE', '3200000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/adidas-ultraboost-20-cloud-white-fv83361-king-shoes-sneaker-real-hcm-1624253332.jpeg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('28', '2023-01-10', 'ADIDAS GRADAS CLOUD WHITE', 'Vải', 'ADIDAS GRADAS CLOUD WHITE', '2900000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-8.jpeg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('29', '2023-01-10', 'NMD_R1 SPECTOO', 'Vải', 'NMD_R1 SPECTOO', '2800000', '20', 0, '2', '1', '1', 'https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-r1-gz9289-king-shoes-1-1642591968.jpg');

INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('30', '2023-01-10', 'YEEZY BOOST 350 V2 YEEZREEL', 'Vải', 'YEEZY BOOST 350 V2 YEEZREEL', '8500000', '20', 0, '3', '1', '1', 'https://kingshoes.vn/data/upload/media/adidas-yeezy-boost-350-v2-yeezreel-fw5191-king-shoes-sneaker-real-hcm-1624266288.jpeg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('31', '2023-01-10', 'YEEZY BOOST 350 V2 BLACK', 'Vải', 'YEEZY BOOST 350 V2 BLACK', '16000000', '20', 0, '3', '1', '1', 'https://kingshoes.vn/data/upload/media/adidas-yeezy-350-v2-black-fu9006-king-shoes-sneaker-real-hcm-1624266346.jpeg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('32', '2023-01-10', 'YEEZY BOOST 350 V2', 'Vải', 'YEEZY BOOST 350 V2', '11000000', '20', 0, '3', '1', '1', 'https://kingshoes.vn/data/upload/media/yeezy-boost-350-v2-yecheil-yecheil-yecheil-fw5190-king-shoes-sneaker-real-hcm-1.png');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('33', '2023-01-10', 'YEEZY BOOST 350 V2 BLACK RED', 'Vải', 'YEEZY BOOST 350 V2 BLACK RED', '13000000', '20', 0, '3', '1', '1', 'https://kingshoes.vn/data/upload/media/adidas-yeezy-boost-350-v2-black-red-cp96521-king-shoes-sneaker-real-hcm-1624265904.jpeg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('34', '2023-01-10', 'YEEZY BOOST 350', 'Vải', 'YEEZY BOOST 350', '12000000', '20', 0, '3', '1', '1', 'https://kingshoes.vn/data/upload/media/by9612-gia%CC%80y-adidas-yeezy-boost-350-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-2.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('35', '2023-01-10', 'YEEZY BOOST 350 V2 DAZZLING BLUE', 'Vải', 'YEEZY BOOST 350 V2 DAZZLING BLUE', '10000000', '20', 0, '3', '1', '1', 'https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-dazzling-blue-gy7164-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-4-1646911295.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('36', '2023-01-10', 'YEEZY BOOST 350 V2', 'Vải', 'YEEZY BOOST 350 V2', '9000000', '20', 0, '3', '1', '1', 'https://kingshoes.vn/data/upload/media/hp7870-gia%CC%80y-adidas-yeezy-boost-350-v2-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-12.jpg');

INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('37', '2023-01-10', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky P Mega', 'Da lộn', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky P Mega', '3390000', '20', 0, '4', '1', '1', 'https://product.hstatic.net/200000642007/product/50whs_3ashbcp3n_1_1701d23e76ff4c9c886026fddb76f0b9_d10d4685fcfe4860a0823815080a3b0e_master.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('38', '2023-01-10', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky A Gradient Classic Monogram', 'Da lộn', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky A Gradient Classic Monogram', '3490000', '20', 0, '4', '1', '1', 'https://product.hstatic.net/200000642007/product/50ivs_3ashbor3n_1_1e3937c8743b4ab4bf0f9a4502281002_d6acc7f033c34296a969f2de50de7240_master.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('39', '2023-01-10', 'MLB - Giày sneakers unisex cổ thấp Chunky Liner', 'Da lộn', 'MLB - Giày sneakers unisex cổ thấp Chunky Liner', '3590000', '20', 0, '4', '1', '1', 'https://product.hstatic.net/200000642007/product/50crs_3asxclb3n_1_1f3add431fe64cc5bc520af7a0fe95d8_534ea9298af648679b3a406a342033a7_master.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('40', '2023-01-10', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky A Gradient Classic Monogram', 'Da lộn', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky A Gradient Classic Monogram', '3490000', '20', 0, '4', '1', '1', 'https://product.hstatic.net/200000642007/product/07whs_3ashbor3n_1_a6ac4b8db9644c03963224f1b971ec54_307aca86d4454808b1b29037e0f72d30_master.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('41', '2023-01-10', 'MLB - Giày sneakers unisex cổ thấp Chunky Liner', 'Da lộn', 'MLB - Giày sneakers unisex cổ thấp Chunky Liner', '3590000', '20', 0, '4', '1', '1', 'https://product.hstatic.net/200000642007/product/50gns_3asxca12n_1_f76ffa2cd497447d8052c79e0448e530_8c071358c55b4c24a24513954df5f574_master.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('42', '2023-01-10', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky A', 'Da lộn', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky A', '2490000', '20', 0, '4', '1', '1', 'https://product.hstatic.net/200000642007/product/50bgs_3ashc101n_1_5f570c078d754ad3bb4a9d14efac5056_1b39e6fa306349bea007e60ed9d1c875_master.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('43', '2023-01-10', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky P Mega', 'Da lộn', 'MLB - Giày sneakers unisex cổ thấp Big Ball Chunky P Mega', '2790000', '20', 0, '4', '1', '1', 'https://product.hstatic.net/200000642007/product/43rds_3ashc2b2n_1_1b39b7c802e24596a89299dc947cfcd5_4ac128ca40d242e79aaf24f910d8933f_master.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('44', '2023-01-10', 'MLB - Giày sneakers unisex cổ thấp Playball Lux', 'Da lộn', 'MLB - Giày sneakers unisex cổ thấp Playball Lux', '2990000', '20', 0, '4', '1', '1', 'https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_1_b6cce9e680fc40d6a1a212702c6b6a43_684ecc99eb134846971207b2a5a24a27_master.jpg');


INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('45', '2023-01-10', 'Giày Gucci 1921 Like Auth', 'Da lộn', 'Giày Gucci 1921 Like Auth', '2690000', '20', 0, '5', '1', '1', 'https://duongluxury.com/wp-content/uploads/2023/06/giay-gucci-1921-like-auth-5.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('46', '2023-01-10', 'Giày Gucci x KAI Rhyton Sneaker Like Auth', 'Da lộn', 'Giày Gucci x KAI Rhyton Sneaker Like Auth', '2690000', '20', 0, '5', '1', '1', 'https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-kai-x-gucci-rhyton-sneaker-like-auth-9-300x300.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('47', '2023-01-10', 'Giày Gucci Rhyton Logo Like Auth màu trắng', 'Da lộn', 'Giày Gucci Rhyton Logo Like Auth màu trắng', '2690000', '20', 0, '5', '1', '1', 'https://duongluxury.com/wp-content/uploads/2021/05/giay-gucci-chunky-rhyton-logo-like-auth-mau-trang-9-300x300.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('48', '2023-01-10', 'Giày Gucci Ace White Blue Red Like Auth', 'Da lộn', 'Giày Gucci Ace White Blue Red Like Auth', '2190000', '20', 0, '5', '1', '1', 'https://duongluxury.com/wp-content/uploads/2022/02/giay-gucci-ace-white-blue-red-like-auth-8-300x300.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('49', '2023-01-10', 'Giày Gucci Ong', 'Da lộn', 'Giày Gucci Ong', '2190000', '20', 0, '5', '1', '1', 'https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-ace-bee-theu-ong-mau-trang-like-auth-3-300x300.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('50', '2023-01-10', 'Giày Gucci Sơn Tùng GG Screener Like Auth', 'Da lộn', 'Giày Gucci Sơn Tùng GG Screener Like Auth', '2390000', '20', 0, '5', '1', '1', 'https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-son-tung-gg-screener-like-auth-4-300x300.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('51', '2023-01-10', 'Giày Gucci GG Screener Sơn Tùng bản bẩn Like Auth', 'Da lộn', 'Giày Gucci GG Screener Sơn Tùng bản bẩn Like Auth', '2390000', '20', 0, '5', '1', '1', 'https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-gg-screener-son-tung-ban-ban-like-auth-5-300x300.jpg');
INSERT INTO `sneaker_store`.`product` (`id`, `date_import`, `description_product`, `material`, `name_product`, `price`, `quantity`, `status_product`, `id_brand`, `id_discount`, `id_product_type`, `image_main`) VALUES ('52', '2023-01-10', 'Giày Gucci GG Screener Beige gót tím Sơn Tùng Like Auth', 'Da lộn', 'Giày Gucci GG Screener Beige gót tím Sơn Tùng Like Auth', '2390000', '20', 0, '5', '1', '1', 'https://duongluxury.com/wp-content/uploads/2023/08/giay-gucci-gg-screener-beige-got-tim-son-tung-like-auth-8-300x300.jpg');
-- image
INSERT INTO `sneaker_store`.`image` (`id_image`, `url`, `id_product`) VALUES ('1','https://kingshoes.vn/data/upload/media/SNEAKER-315122-111-AIR-FORCE-1-07-NIKE-KINGSHOES.VN-TPHCM-TANBINH-17-logo-1551924204-.jpg', '1');
INSERT INTO `sneaker_store`.`image` (`id_image`, `url`, `id_product`) VALUES ('2','https://kingshoes.vn/data/upload/media/SNEAKER-315122-111-AIR-FORCE-1-07-NIKE-KINGSHOES.VN-TPHCM-TANBINH-14.jpg', '1');
INSERT INTO `sneaker_store`.`image` (`id_image`, `url`, `id_product`) VALUES ('3','https://kingshoes.vn/data/upload/media/SNEAKER-315122-111-AIR-FORCE-1-07-NIKE-KINGSHOES.VN-TPHCM-TANBINH-14.jpg', '1');
INSERT INTO `sneaker_store`.`image` (`id_image`, `url`, `id_product`) VALUES ('4','https://kingshoes.vn/data/upload/media/SNEAKER-315122-111-AIR-FORCE-1-07-NIKE-KINGSHOES.VN-TPHCM-TANBINH-14.jpg', '1');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fj5472-121-giay-nike-air-max-1-time-warp-chinh-hang-gia-tot-den-king-shoes-12.jpeg', '2');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fj5472-121-giay-nike-air-max-1-time-warp-chinh-hang-gia-tot-den-king-shoes-3.jpg', '2');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fj5472-121-giay-nike-air-max-1-time-warp-chinh-hang-gia-tot-den-king-shoes-3.jpg', '2');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fj5472-121-giay-nike-air-max-1-time-warp-chinh-hang-gia-tot-den-king-shoes-3.jpg', '2');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-beluga-reflective-gw1229-king-shoes-sneaker-real-hcm-11-1639905369.jpeg', '3');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-beluga-reflective-gw1229-king-shoes-sneaker-real-hcm-27.jpeg', '3');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-beluga-reflective-gw1229-king-shoes-sneaker-real-hcm-24.jpeg', '3');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-beluga-reflective-gw1229-king-shoes-sneaker-real-hcm-25.jpeg', '3');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-ultraboost-tra%CC%86%CC%81ng-fz4007-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1-1647670125.jpg', '4');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-ultraboost-tra%CC%86%CC%81ng-fz4007-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-2.jpg', '4');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-ultraboost-tra%CC%86%CC%81ng-fz4007-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-3.jpg', '4');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-ultraboost-tra%CC%86%CC%81ng-fz4007-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-5.jpg', '4');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-yeezy-boost-700-v2-static-chinh-hang-tphcm-king-shoes-sneaker-authentic-9.png', '5');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-Yeezy-Boost-700-V2-Static-chinh-hang-tphcm-king-shoes-sneaker-authentic-117.jpg', '5');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-Yeezy-Boost-700-V2-Static-chinh-hang-tphcm-king-shoes-sneaker-authentic-11.jpg', '5');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-yeezy-boost-700-v2-static-chinh-hang-tphcm-king-shoes-sneaker-authentic-10.jpg', '5');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/917646-004-giay-air-max-97-prm-light-bone-chinh-hang-gia-tot-den-king-shoes-12.jpeg', '6');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/917646-004-giay-air-max-97-prm-light-bone-chinh-hang-gia-tot-den-king-shoes-1.jpg', '6');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/917646-004-giay-air-max-97-prm-light-bone-chinh-hang-gia-tot-den-king-shoes-1.jpg', '6');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/917646-004-giay-air-max-97-prm-light-bone-chinh-hang-gia-tot-den-king-shoes-13.png', '6');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/nike-dunk-hi-cu7544-400-king-shoes-sneaker-real-hcm35-1623475900.jpg', '7');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/nike-dunk-hi-cu7544-400-king-shoes-sneaker-real-hcm34.jpg', '7');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/nike-dunk-hi-cu7544-400-king-shoes-sneaker-real-hcm37.jpg', '7');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/nike-dunk-hi-cu7544-400-king-shoes-sneaker-real-hcm36.jpg', '7');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/388549-04-giay-puma-slipstream-chinh-hang-gia-tot-den-king-shoes-29.jpg', '8');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/388549-04-giay-puma-slipstream-chinh-hang-gia-tot-den-king-shoes-28.jpg', '8');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/388549-04-giay-puma-slipstream-chinh-hang-gia-tot-den-king-shoes-27.jpg', '8');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/388549-04-giay-puma-slipstream-chinh-hang-gia-tot-den-king-shoes-26.jpg', '8');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-nmd-r1-all-white-h019031-king-shoes-sneaker-real-hcm-1624253160.jpeg', '9');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-r1-all-white-h01903-king-shoes-sneaker-real-hcm-34.jpeg', '9');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-r1-all-white-h01903-king-shoes-sneaker-real-hcm-33.jpeg', '9');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-r1-all-white-h01903-king-shoes-sneaker-real-hcm-32.jpeg', '9');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-8.jpeg', '10');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-1.jpg', '10');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-2.jpg', '10');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-3.jpg', '10');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/1000284478/product/50ivs_3ashc101n_5_4b49f5bc7f4c4212abf10bae73c55e02_large.jpg', '11');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/1000284478/product/50ivs_3ashc101n_6_6644eae78ad6481cb335b5f4a15b7fb3_large.jpg', '11');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/1000284478/product/50ivs_3ashc101n_7_5daf931ba6924c7cb9e32a6e9694b5e6_large.jpg', '11');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/1000284478/product/50ivs_3ashc101n_3_ff492f73006d43febfcd28ec5913bd47_large.jpg', '11');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04968C/A04968C_2-150x150.jpg', '12');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04968C/A04968C_3-150x150.jpg', '12');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04968C/A04968C_4-150x150.jpg', '12');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/A04968C/A04968C_1-500x500.jpg', '12');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/772109-giay-adidas-samba-classic-chinh-hang-gia-tot-den-king-shoes1.jpg', '13');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/772109-giay-adidas-samba-classic-chinh-hang-gia-tot-den-king-shoes-2.jpg', '13');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/772109-giay-adidas-samba-classic-chinh-hang-gia-tot-den-king-shoes-8.jpg', '13');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/772109-giay-adidas-samba-classic-chinh-hang-gia-tot-den-king-shoes-9.jpg', '13');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/cd5432-127-giay-nike-air-max-excee-jade-ice-chinh-hang-gia-tot-den-king-shoes-19.jpg', '14');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/cd5432-127-giay-nike-air-max-excee-jade-ice-chinh-hang-gia-tot-den-king-shoes-18.jpg', '14');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/cd5432-127-giay-nike-air-max-excee-jade-ice-chinh-hang-gia-tot-den-king-shoes-17.jpg', '14');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/cd5432-127-giay-nike-air-max-excee-jade-ice-chinh-hang-gia-tot-den-king-shoes-16.jpg', '14');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dv2436-003-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-3.jpeg', '15');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dv2436-003-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-1.jpeg', '15');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dv2436-003-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-2.jpeg', '15');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dv2436-003-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-5.jpeg', '15');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fj7734-101-giay-nike-air-max-1-87-womens-chinh-hang-gia-tot-den-king-shoes-12.jpeg', '16');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fj7734-101-giay-nike-air-max-1-87-womens-chinh-hang-gia-tot-den-king-shoes-1.jpeg', '16');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fj7734-101-giay-nike-air-max-1-87-womens-chinh-hang-gia-tot-den-king-shoes-2.jpeg', '16');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fj7734-101-giay-nike-air-max-1-87-womens-chinh-hang-gia-tot-den-king-shoes-3.jpeg', '16');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dv2436-200-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-3.jpeg', '17');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dv2436-200-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-1.jpeg', '17');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dv2436-200-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-2.jpeg', '17');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dv2436-200-giay-nike-e-series-ad-chinh-hang-gia-tot-den-king-shoes-5.jpeg', '17');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dx7885-100-giay-nike-downshifter-12-premium-womens-road-running-chinh-hang-gia-tot-den-king-shoes-13.jpeg', '18');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dx7885-100-giay-nike-downshifter-12-premium-womens-road-running-chinh-hang-gia-tot-den-king-shoes-1.jpeg', '18');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dx7885-100-giay-nike-downshifter-12-premium-womens-road-running-chinh-hang-gia-tot-den-king-shoes-2.jpeg', '18');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dx7885-100-giay-nike-downshifter-12-premium-womens-road-running-chinh-hang-gia-tot-den-king-shoes-5.jpeg', '18');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fb5059-100-giay-nike-air-max-1-87-safari-chinh-hang-gia-tot-den-king-shoes-12.jpeg', '19');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fb5059-100-giay-nike-air-max-1-87-safari-chinh-hang-gia-tot-den-king-shoes-1.jpg', '19');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fb5059-100-giay-nike-air-max-1-87-safari-chinh-hang-gia-tot-den-king-shoes-2.jpg', '19');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fb5059-100-giay-nike-air-max-1-87-safari-chinh-hang-gia-tot-den-king-shoes-3.jpg', '19');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dm5036-100-giay-nike-air-force-1-serena-summit-white-chinh-hang-gia-tot-den-king-shoes-12.jpeg', '20');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dm5036-100-giay-nike-air-force-1-serena-summit-white-chinh-hang-gia-tot-den-king-shoes-3.jpg', '20');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dm5036-100-giay-nike-air-force-1-serena-summit-white-chinh-hang-gia-tot-den-king-shoes-5.jpg', '20');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/dm5036-100-giay-nike-air-force-1-serena-summit-white-chinh-hang-gia-tot-den-king-shoes-6.jpg', '20');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fd0793-100-giay-nike-air-force-1-star-chinh-hang-gia-tot-den-king-shoes-15-1692784511.jpeg', '21');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fd0793-100-giay-nike-air-force-1-star-chinh-hang-gia-tot-den-king-shoes-6.png', '21');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fd0793-100-giay-nike-air-force-1-star-chinh-hang-gia-tot-den-king-shoes-2.jpg', '21');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fd0793-100-giay-nike-air-force-1-star-chinh-hang-gia-tot-den-king-shoes-3.jpg', '21');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-8.jpeg', '28');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-1.jpg', '28');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-2.jpg', '28');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fw7208-giay-adidas-gradas-white-green-gum-chinh-hang-gia-tot-den-king-shoes-3.jpg', '28');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-solar-hu-nmd-ee7579-king-shoes-sneaker-real-hcm-1624252655.jpeg', '22');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/ee7579_2.jpg', '22');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/ee7579_3.jpg', '22');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/EE7579_4.jpg', '22');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/giay-adidas-NMD-CS1-PK-COMPLEX-chinh-hang-tphcm-B41819-king-shoes-sneaker-authentic-tan-binh-4-1552211506-.jpg', '23');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/giay-adidas-NMD-CS1-PK-COMPLEX-chinh-hang-tphcm-B41819-king-shoes-sneaker-authentic-tan-binh-1.jpg', '23');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/giay-adidas-NMD-CS1-PK-COMPLEX-chinh-hang-tphcm-B41819-king-shoes-sneaker-authentic-tan-binh-2.jpg', '23');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/giay-adidas-NMD-CS1-PK-COMPLEX-chinh-hang-tphcm-B41819-king-shoes-sneaker-authentic-tan-binh-3.jpg', '23');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fy3960-giay-ultra4d-sun-devils-chinh-hang-gia-tot-den-king-shoes-1.jpg', '24');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fy3960-giay-ultra4d-sun-devils-chinh-hang-gia-tot-den-king-shoes-3.jpg', '24');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fy3960-giay-ultra4d-sun-devils-chinh-hang-gia-tot-den-king-shoes-5.jpg', '24');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/fy3960-giay-ultra4d-sun-devils-chinh-hang-gia-tot-den-king-shoes-6.jpg', '24');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hq0949-giay-adidas-ultra-4d-chinh-hang-gia-tot-den-king-shoes-1.jpg', '25');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hq0949-giay-adidas-ultra-4d-chinh-hang-gia-tot-den-king-shoes-2.jpg', '25');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hq0949-giay-adidas-ultra-4d-chinh-hang-gia-tot-den-king-shoes-3.jpg', '25');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hq0949-giay-adidas-ultra-4d-chinh-hang-gia-tot-den-king-shoes-6.jpg', '25');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hq6874-giay-forum-low-cl-trang-chinh-hang-gia-tot-den-king-shoes-1.jpg', '26');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hq6874-giay-forum-low-cl-trang-chinh-hang-gia-tot-den-king-shoes-2.jpg', '26');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hq6874-giay-forum-low-cl-trang-chinh-hang-gia-tot-den-king-shoes-3.jpg', '26');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hq6874-giay-forum-low-cl-trang-chinh-hang-gia-tot-den-king-shoes-5.jpg', '26');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-ultraboost-20-cloud-white-fv83361-king-shoes-sneaker-real-hcm-1624253332.jpeg', '27');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-ultraboost-20-fv8336-king-shoes-sneaker-real-hcm-66.jpeg', '27');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-ultraboost-20-fv8336-king-shoes-sneaker-real-hcm-65.jpeg', '27');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-ultraboost-20-fv8336-king-shoes-sneaker-real-hcm-64.jpeg', '27');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-r1-gz9289-king-shoes-1-1642591968.jpg', '29');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-r1-gz9289-king-shoes-10.jpg', '29');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-r1-gz9289-king-shoes-9.jpg', '29');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nmd-r1-gz9289-king-shoes-5.jpg', '29');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-yeezy-boost-350-v2-yeezreel-fw5191-king-shoes-sneaker-real-hcm-1624266288.jpeg', '30');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-yeezreel-nam-fw5191-king-shoes-sneaker-real-hcm-45.jpeg', '30');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-yeezreel-nam-fw5191-king-shoes-sneaker-real-hcm-44.jpeg', '30');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-yeezreel-nam-fw5191-king-shoes-sneaker-real-hcm-43.jpeg', '30');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-yeezy-350-v2-black-fu9006-king-shoes-sneaker-real-hcm-1624266346.jpeg', '31');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-yeezy-350-v2-black-fu9006-king-shoes-sneaker-real-hcm-1624266346.jpeg', '31');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-black-fu9006-king-shoes-sneaker-real-hcm-63.jpeg', '31');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-black-fu9006-king-shoes-sneaker-real-hcm-64.jpeg', '31');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/yeezy-boost-350-v2-yecheil-yecheil-yecheil-fw5190-king-shoes-sneaker-real-hcm-1.png', '32');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/yeezy-boost-350-v2-yecheil-yecheil-yecheil-fw5190-king-shoes-sneaker-real-hcm.jpg', '32');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/yeezy-boost-350-v2-yecheil-yecheil-yecheil-fw5190-king-shoes-sneaker-real-hcm-3.jpg', '32');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/yeezy-boost-350-v2-yecheil-yecheil-yecheil-fw5190-king-shoes-sneaker-real-hcm-4.jpeg', '32');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/adidas-yeezy-boost-350-v2-black-red-cp96521-king-shoes-sneaker-real-hcm-1624265904.jpeg', '33');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-nam-cp9652-king-shoes-sneaker-real-hcm-15.jpeg', '33');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-nam-cp9652-king-shoes-sneaker-real-hcm-14.jpeg', '33');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-nam-cp9652-king-shoes-sneaker-real-hcm-13.jpeg', '33');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/by9612-gia%CC%80y-adidas-yeezy-boost-350-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-2.jpg', '34');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/by9612-gia%CC%80y-adidas-yeezy-boost-350-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1.jpg', '34');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/by9612-gia%CC%80y-adidas-yeezy-boost-350-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-12.jpeg', '34');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/by9612-gia%CC%80y-adidas-yeezy-boost-350-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-3.jpg', '34');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-dazzling-blue-gy7164-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-4-1646911295.jpg', '35');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-dazzling-blue-gy7164-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-8.jpg', '35');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-dazzling-blue-gy7164-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-9.jpg', '35');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-yeezy-boost-350-v2-dazzling-blue-gy7164-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-1.png', '35');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hp7870-gia%CC%80y-adidas-yeezy-boost-350-v2-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-12.jpg', '36');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hp7870-gia%CC%80y-adidas-yeezy-boost-350-v2-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-4.jpeg', '36');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hp7870-gia%CC%80y-adidas-yeezy-boost-350-v2-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-5.jpeg', '36');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://kingshoes.vn/data/upload/media/hp7870-gia%CC%80y-adidas-yeezy-boost-350-v2-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-15.jpg', '36');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50whs_3ashbcp3n_3_66854764bd864732955659acf92d2deb_68b9ca472b794720bf2cc26758b51278_small.jpg', '37');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50whs_3ashbcp3n_4_d86ac193a15c47bf888f73bcc736fe86_6e9d0fbb3fb14f769152f32d41d5f919_small.jpg', '37');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50whs_3ashbcp3n_7_f4224e59ccbe43208a9ce6e520a13a29_d2084577bc3f40e2904c931b3531e2be_small.jpg', '37');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50whs_3ashbcp3n_6_a75df31c2c1b4376b6dc84ab66f36b6a_45d39fdd2d2540cd9e6f844008f25de5_small.jpg', '37');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3ashbor3n_2_59ee0d044fd14904b05e4f22195ef0b9_4c6d7fdd11614039b5585a1fa8865eab_small.jpg', '38');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3ashbor3n_3_cbb3cd679d484b4c8bb23f78357f22e6_d399eb8f67df4dc893148039504e63bd_small.jpg', '38');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3ashbor3n_4_a2971af4017e42cc9929c72dd87d7bbc_22ec4976fde14d17976ca1fcd2d7d2a5_small.jpg', '38');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50ivs_3ashbor3n_5_c42acb1a240a4bc9a8997151a58e48b2_74a5df300e55481fa59df1e4aaec9da3_small.jpg', '38');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50crs_3asxclb3n_1_1f3add431fe64cc5bc520af7a0fe95d8_534ea9298af648679b3a406a342033a7_small.jpg', '39');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50crs_3asxclb3n_3_62746daf7bf6489ab09b9abb7f87ffb5_50082028c58a4c8ab997d2be887c4dea_small.jpg', '39');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50crs_3asxclb3n_4_6052685dd36c46899e94e6235890a90e_0815b69c53b7427dade592c36fa5969e_small.jpg', '39');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50crs_3asxclb3n_5_efc181c367a04d4e9ce3c50891d89560_951eb32f6a8241a8a2c2f0718a2c214a_small.jpg', '39');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/07whs_3ashbor3n_2_82c54f27a2d24333812be6cce180a4a3_eec94ba8c05344e3afeee43c29971d19_small.jpg', '40');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/07whs_3ashbor3n_4_a71ad96fe064404bab8a3ca3e57b8218_06af78a1fdec41ab9b85a90fe2e59318_small.jpg', '40');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/07whs_3ashbor3n_5_3e1a94fe80fe4e17aa9f6a8193a9f4e3_68aca5583c71488b8281f76112a818b9_small.jpg', '40');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/07whs_3ashbor3n_3_a5f3bc41c1e743e7b97c76e0a78fe329_4220d996e3414e51b1d62d9b16c5d0cf_small.jpg', '40');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50gns_3asxca12n_3_3f46cc8f62524b2bbba53aa3eaafe329_f987eb5fc1eb47b494ff50215164227b_small.jpg', '41');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50gns_3asxca12n_2_5923d64de4ac4b32a99915e456d30a3b_f225d23d4ada4ad8a7aeece9caac82c1_small.jpg', '41');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50gns_3asxca12n_4_9e87f3f85d2f4de1b2e4043a0fb2acac_a473a63ff1fc4036859ca274fe326a28_small.jpg', '41');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50gns_3asxca12n_5_6b1e6f94721a4261aa74e05cc821359d_d2d554a167464fa983a10f6bb04451a4_small.jpg', '41');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50bgs_3ashc101n_2_3e5662ae24154a4fb34af4cb121aaa1f_3b91402ca48c413e8918fb9d61f40ee9_small.jpg', '42');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50bgs_3ashc101n_3_5f97f6af5ff94d7182670b3b1d30cb8f_9f2c57759552469f9f188dd3d13542e6_small.jpg', '42');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50bgs_3ashc101n_4_8663493957244c4a80089d422d62657e_58cf4a076ed04df78c0b8a058664a50c_small.jpg', '42');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/50bgs_3ashc101n_5_1061a227484843cb9e349629bb381046_862853e091af469f9dfc961348a5beaa_small.jpg', '42');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/43rds_3ashc2b2n_2_43aaa6843d654ce89e924974448e085b_a8b8da3fda9246bc87ec4d5351b07720_small.jpg', '43');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/43rds_3ashc2b2n_3_f7dc8695eff14f73be26fa99d6905ea6_5a76b4cb63bb4f4cb34811ef232efc92_small.jpg', '43');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/43rds_3ashc2b2n_4_e817866e91ac4b029caa0faaef032c6e_5aa007105fca47a8a8cd15ae63fec8a4_small.jpg', '43');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/43rds_3ashc2b2n_5_9d2ada548e204953aed441bbdbd16b63_787d497cccbf4e069189e254c4d86910_small.jpg', '43');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_3_dbd72786a16849d69794564b76c3ee73_cf84044849d442188a4c7204d78b4efe_small.jpg', '44');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_2_985b748435ba432ebe9a02a5ad44db2f_f8040ca9b8c44fa8b8e7687be53a5b5e_small.jpg', '44');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_4_8b71633d84a647248b365f1189106952_765120a74e5b4ae4bdc7a93a30f92e20_small.jpg', '44');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://product.hstatic.net/200000642007/product/07ivs_3acvppr3n_5_edd4b64e65e34af289a17313d9d85482_e1bcd8d62770463e94ad0c9045119c56_small.jpg', '44');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/06/giay-gucci-1921-like-auth-8-150x150.jpg', '45');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/06/giay-gucci-1921-like-auth-7-150x150.jpg', '45');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/06/giay-gucci-1921-like-auth-7-150x150.jpg', '45');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/06/giay-gucci-1921-like-auth-9-150x150.jpg', '45');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-kai-x-gucci-rhyton-sneaker-like-auth-4-150x150.jpg', '46');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-kai-x-gucci-rhyton-sneaker-like-auth-1-150x150.jpg', '46');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-kai-x-gucci-rhyton-sneaker-like-auth-3-150x150.jpg', '46');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-kai-x-gucci-rhyton-sneaker-like-auth-7-150x150.jpg', '46');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2021/05/giay-gucci-chunky-rhyton-logo-like-auth-mau-trang-7-150x150.jpg', '47');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2021/05/giay-gucci-chunky-rhyton-logo-like-auth-mau-trang-6-150x150.jpg', '47');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2021/05/giay-gucci-chunky-rhyton-logo-like-auth-mau-trang-3-150x150.jpg', '47');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2021/05/giay-gucci-chunky-rhyton-logo-like-auth-mau-trang-2-150x150.jpg', '47');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2022/02/giay-gucci-ace-white-blue-red-like-auth-2-150x150.jpg', '48');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2022/02/giay-gucci-ace-white-blue-red-like-auth-6-150x150.jpg', '48');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2022/02/giay-gucci-ace-white-blue-red-like-auth-1-150x150.jpg', '48');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2022/02/giay-gucci-ace-white-blue-red-like-auth-7-150x150.jpg', '48');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-ace-bee-theu-ong-mau-trang-like-auth-6-150x150.jpg', '49');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-ace-bee-theu-ong-mau-trang-like-auth-7-150x150.jpg', '49');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-ace-bee-theu-ong-mau-trang-like-auth-4-150x150.jpg', '49');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/04/giay-gucci-ace-bee-theu-ong-mau-trang-like-auth-4-150x150.jpg', '49');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-son-tung-gg-screener-like-auth-8-150x150.jpg', '50');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-son-tung-gg-screener-like-auth-7-150x150.jpg', '50');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-son-tung-gg-screener-like-auth-6-150x150.jpg', '50');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-son-tung-gg-screener-like-auth-8-150x150.jpg', '50');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-gg-screener-son-tung-ban-ban-like-auth-5.jpg', '51');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-gg-screener-son-tung-ban-ban-like-auth-4-150x150.jpg', '51');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-gg-screener-son-tung-ban-ban-like-auth-6-150x150.jpg', '51');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/05/giay-gucci-gg-screener-son-tung-ban-ban-like-auth-1-150x150.jpg', '51');

INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/08/giay-gucci-gg-screener-beige-got-tim-son-tung-like-auth-5-150x150.jpg', '52');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/08/giay-gucci-gg-screener-beige-got-tim-son-tung-like-auth-4-150x150.jpg', '52');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/08/giay-gucci-gg-screener-beige-got-tim-son-tung-like-auth-3-150x150.jpg', '52');
INSERT INTO `sneaker_store`.`image` (`url`, `id_product`) VALUES ('https://duongluxury.com/wp-content/uploads/2023/08/giay-gucci-gg-screener-beige-got-tim-son-tung-like-auth-6-150x150.jpg', '52');














