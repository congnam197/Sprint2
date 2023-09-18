import axios from "axios";
const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
};
console.log(headers);
export const getCartByIdAccount = async () => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/user/shopping-cart`,
      { headers }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const addProductToCart = async (idProduct) => {
  await axios.post(
    "http://localhost:8080/api/user/add-to-cart/" + idProduct,
    null,
    { headers }
  );
};
export const addProductToCartDetail = async (idProduct, num) => {
  await axios.post(
    `http://localhost:8080/api/user/add-detail?id=${idProduct}&&quantity=${num}`,
    null,
    {
      headers,
    }
  );
};

export const minusProductToCart = async (idProduct) => {
  try{
    await axios.post("http://localhost:8080/api/user/minus/" + idProduct, null, {
      headers,
    });
  }catch(e){
    console.log(e);
  }
};

export const totalProductOnCart = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/user/cart-item", {
      headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const deleteProductById = async (idProduct) => {
  try {
    await axios.delete(
      "http://localhost:8080/api/user/cart-remove/" + idProduct,
      { headers }
    );
  } catch (e) {
    console.log(e);
  }
};
