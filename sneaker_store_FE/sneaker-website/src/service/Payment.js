import axios from "axios";
export const paymentByVNPay=async (totalPrice)=>{
    const res = await axios.post(`http://localhost:8080/api/user/vn-pay/create?total=`+totalPrice);
    return res.data;

}