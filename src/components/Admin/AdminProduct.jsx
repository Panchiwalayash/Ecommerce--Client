import React, { useContext, useEffect, useState } from "react";
import ApiContext from "../../context/Apis/apiContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import AdminCreateProduct from "./AdminCreateProduct";
import AdminProductItem from "./AdminProductItem";
import AdminEditProduct from "./AdminEditProduct";

const AdminProduct = () => {
  const context = useContext(ApiContext);
  const { host } = context;

  const [searchProduct, setSearchProduct] = useState(``);
  const [create, setCreate] = useState(false);
  const [load,setload]=useState(false)
  const [product,setProduct]=useState([])
  const [remove,setRemove]=useState(false)
  const [edit,setEdit]=useState(false)
  const [id,setId]=useState('')



  useEffect(() => {
    const getsearchproduct = async () => {
      try {
        const response = await axios.get(
          `${host}/admin/getproduct/`,
        );
        setProduct(response.data.product);
      } catch (error) {
        alert(error);
      }
    };
    getsearchproduct();
  }, [load]);
  

  useEffect(() => {
    const getsearchproduct = async () => {
      try {
        const headers = {
          adminToken: localStorage.getItem("adminToken"),
        };
        const response = await axios.get(
          `${host}/admin/getproduct/search/?q=${searchProduct}`,
          { headers }
        );
        setProduct(response.data.product);
      } catch (error) {
        alert(error);
      }
    };
    getsearchproduct();
  }, [searchProduct]);

  const handleNew = () => {
    setCreate(true);
  };
  return (
    <>
      {create ? (
        <AdminCreateProduct
          setCreate={setCreate}
          setSearchProduct={setSearchProduct}
          setload={setload}
          load={load}
        />
      ) : (
        edit?<AdminEditProduct id={id} setEdit={setEdit} setload={setload} load={load}/>:
        <div className={` min-h-full bg-[#f8f8f8] p-2`}>
          <div className="flex justify-between items-center">
            <div className=" text-2xl font-bold mb-3">Products</div>
            <div
              className="bg-[#14c123] text-light px-3 py-[4px] hover:cursor-pointer text-lg"
              onClick={handleNew}
            >
              <FontAwesomeIcon className="mr-2" icon={faAdd} />
              create new
            </div>
          </div>
          <div className="p-3 m-5 bg-light">
            <div className="text-lg p-2 border border-gray-light mb-5">
              <input
                className=" outline-none w-full"
                type="text"
                placeholder="Search"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap justify-around">
              {product.map((prod) => {
                return (
                  <div
                    className="w-[250px] h-[350px] border border-gray-light m-3"
                    key={prod._id}
                  >
                    <AdminProductItem prod={prod} setRemove={setRemove} setEdit={setEdit} setId={setId} setload={setload}
          load={load}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminProduct;
