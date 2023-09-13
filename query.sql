select * from product p where id_brand = 1 order by price;
select * from product p where id_brand = 1 order by price desc;
select * from product where id_brand = 1;
select * from product where id_discount =1;
select * from product p join brand b on p.id_brand = b.id_brand;
select b.name_brand from brand b
 union
select p.name_product from product p

