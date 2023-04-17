import { useContext, useState } from "react";
import Navbar from "../components/User/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import ApiContext from "../context/Apis/apiContext";
import axios from "axios";

const Checkout = () => {
    
    const context=useContext(ApiContext)
    const {host}=context

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [phone, setPhone] = useState("");
    const [pincode, setPincode] = useState("");
    const [payType, setPayType] = useState("Select Payment Type");

    const param=useParams()

    const navigate=useNavigate()

    const handleSubmit = async(event) => {
        event.preventDefault();

        const orderDetail={
            address:address,
            city:city,
            state:state,
            phoneNo:phone,
            pincode:pincode,
            paymentType:payType
        }
        try {
            const res=await axios.post(`${host}/api/order/create/${param.id}`,orderDetail,{headers:{userToken:localStorage.getItem('userToken')}})
            setAddress("")
            setCity("")
            setPhone("")
            setPincode("")
            setPayType("Select Payment Type")
            setState("")
            navigate('/order/')
            alert("ordered placed")

        } catch (error) {
            alert(error)
        }

    };

    return (
        <>
            <Navbar />
            <div className="relative top-[7vh]">
                <form
                    onSubmit={handleSubmit}
                    className="flex-col mt-[3vh] min-w-[400px] w-[60vw] m-auto"
                >
                     <div className="p-4 my-5 border-b shadow-sm border-gray">
                        <label htmlFor="address" className="text-base font-medium">
                            Address:
                        </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            required
                            className="px-2 mt-2 py-1 text-base focus:outline-none  "
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            
                        />
                    </div>
                    <div className="p-4 my-5 border-b shadow-sm border-gray">
                        <label htmlFor="city" className="text-base font-medium">
                            City:
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            required
                            className="px-2 mt-2 py-1 text-base focus:outline-none  "
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="p-4 my-5 border-b shadow-sm border-gray">
                        <label htmlFor="state" className="text-base font-medium">
                            State/Province:
                        </label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            required
                            className="px-2 mt-2 py-1 text-base focus:outline-none "
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                    <div className="p-4 my-5 border-b shadow-sm border-gray">
                        <label htmlFor="phone" className="text-base font-medium mr-3">
                            Phone:
                        </label>
                        <input
                            type="number"
                            id="phone"
                            className=" focus:outline-none"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="p-4 my-5 border-b shadow-sm border-gray">
                        <label htmlFor="pincode" className="text-base font-medium mr-3">
                            Pincode:
                        </label>
                        <input
                            type="number"
                            id="pincode"
                            className=" focus:outline-none"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            required
                        />
                    </div>
                    <div className="p-4 my-5 border-b shadow-sm border-gray">
                        <label
                            htmlFor="paymentType"
                            className=" block font-medium mb-3 text-base"
                        >
                            Delivery Type:
                        </label>
                        <select
                            id="paymentType"
                            required
                            className="w-full text-base text-dark"
                            value={payType}
                            onChange={(e) => setPayType(e.target.value)}
                        >
                            <option value="">{payType}</option>
                            <option value="COD">Cash On delivery</option>
                            <option value="Online">Online</option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                    <div className="px-2 py-1 w-[180px] text-center bg-gray-light hover:cursor-pointer text-dark" >Checkout</div>
                    <div className="px-2 py-1 w-[180px] text-center bg-[#4fcb2d] hover:cursor-pointer text-light" onClick={handleSubmit}>Developer Checkout</div>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Checkout;
