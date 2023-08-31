create database store_sneaker;
use store_sneaker;
create table `role`(
role_id int not null auto_increment primary key,
name_role varchar(55)
);

create table `account`(
account_id int not null auto_increment primary key,
user_name varchar(55) unique,
email varchar (60) unique,
role_id int not null,
foreign key(role_id) references `role`(role_id)
);

create table `user`(
id_user int not null auto_increment primary key,
name_user varchar(100) not null,
date_of_birth date not null,
gender bit(1) not null,
phone_number varchar(20),
address varchar(100),
account_id int not null,
foreign key(account_id) references `account`(account_id)
);

create table brand (
brand_id int not null auto_increment primary key,
brand_name varchar(100) not null
);
 create table product_type(
 product_type_id int not null auto_increment primary key,
 product_type_name varchar(50) not null
 );
create table discount(
discount_id int not null auto_increment primary key,
percent double not null
);

create table `product`(
product_id int not null auto_increment primary key,
product_code varchar (100) not null unique,
product_name longtext not null,
product_description longtext not null,
price double not null,
quantity int not null,
size int not null,
color varchar(50),
material varchar (100),
date_at datetime not null,
product_status bit(1) not null,
brand_id int not null,
foreign key(brand_id) references brand(brand_id),
discount_id int not null,
foreign key(discount_id) references discount(discount_id),
product_type_id int not null,
foreign key(product_type_id) references product_type (product_type_id)
);

create table cart_shopping (
cart_id int not null auto_increment primary key,
quantity int not null,
product_id int not null,
foreign key(product_id) references `product`(product_id),
id_user int not null,
foreign key(id_user) references `user`(id_user)
);

create table image (
image_id int not null auto_increment primary key,
image_url longtext not null,
product_id int not null,
foreign key (product_id) references `product`(product_id)
);

create table `order`(
order_id int not null auto_increment primary key,
date_order datetime not null,
order_status bit(1) not null,
id_user int not null, 
foreign key (id_user) references `user`(id_user)
);

create table order_detail(
order_detail_id int not null auto_increment primary key,
quantity_order_detail int not null,
product_id int not null,
foreign key (product_id) references product(product_id),
order_id int not null,
foreign key (order_id) references `order`(order_id)
)
