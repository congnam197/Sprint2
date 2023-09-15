import axios from "axios";
const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
};
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
  await axios.post(`http://localhost:8080/api/user/add/${idProduct}/${num}`, null, {
    headers,
  });
};
export const miniusProductToCart = async (idProduct) => {
  await axios.post("http://localhost:8080/api/user/minius/" + idProduct, null, {
    headers,
  });
};
export const totalProductOnCart = async (headers) => {
  try {
    const res = await axios.get("http://localhost:8080/api/user/product-on-cart", {
      headers,
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
export const deleteProductById = async (idProduct) => {
  try {
    const res = await axios.delete(
      "http://localhost:8080/cart/remove/" + idProduct,
      { headers }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
