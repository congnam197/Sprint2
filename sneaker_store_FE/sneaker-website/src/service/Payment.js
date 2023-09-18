import axios from "axios";
const token = localStorage.getItem("token");
const headers = {
  Authorization: `Bearer ${token}`,
};
export const paymentByVNPay = async (totalPrice) => {
  const res = await axios.post(
    `http://localhost:8080/api/user/vn-pay/create?total=` + totalPrice
  );
  return res.data;
};
export const returnFromPayment = async (email,name,address, phone, note) => {
 const res= await axios.post(
    `http://localhost:8080/api/user/vn-pay/bought?email=${email}&&name=${name}&&address=${address}&&phone=${phone}&&note=${note}`
  );
  return res.data;
};
