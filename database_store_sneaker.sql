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
create table `product_type`(
product_type_id int not null  auto_increment primary key,
product_type_name varchar(100) not null 
);

create table `product`(
product_id int not null auto_increment primary key,
product_name varchar(100) not null,
product_description varchar(200) not null,
price double not null,
quantity int not null,
image varchar(100) not null,
size int not null,
product_status bit(1) not null,
product_type_id int,
foreign key(product_type_id) references product_type(product_type_id)
);

create table `order`(
order_id int not null auto_increment primary key,
date_order datetime not null,
order_status bit(1) not null,
id_user int, 
foreign key (id_user) references `user`(id_user)
);

create table order_detail(
order_detail_id int not null auto_increment primary key,
quantity_order_detail int not null,
product_id int ,
foreign key (product_id) references product(product_id),
order_id int,
foreign key (order_id) references `order`(order_id)
)
