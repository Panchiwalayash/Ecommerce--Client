import ApiContext from "./apiContext";
import { useState } from "react";
import axios from 'axios'

const ApiState = (props) => {

    const host = "http://localhost:5000"
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get(`${host}/api/product/getproduct`)
        setProducts(response.data.product)
    }

    const addproduct = async (formData) => {
        try {
            const res = await axios.post(`${host}/admin/createproduct`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    adminToken: localStorage.getItem("adminToken"),
                },
            });
            console.log(res.data);
            setProducts(res.data.product)
        } catch (error) {
            console.error(error);
        }
    };
return (
    <ApiContext.Provider value={{ getProducts,addproduct, products, host, setProducts }}>
        {props.children}
    </ApiContext.Provider>
)
}

export default ApiState