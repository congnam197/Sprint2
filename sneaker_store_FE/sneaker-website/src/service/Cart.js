import axios from "axios";
export const getCartByIdAccount = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(
      `http://localhost:8080/api/user/shopping-cart`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
