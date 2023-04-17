import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/Admin/AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faClipboard,
  faUser,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import AdminDash from "../components/Admin/AdminDash";
import AdminOrder from "../components/Admin/AdminOrder";
import AdminUser from "../components/Admin/AdminUser";
import AdminProduct from "../components/Admin/AdminProduct";

const AdminHome = () => {
  const [dash, setDash] = useState(true);
  const [user, setUser] = useState(false);
  const [product, setProduct] = useState(false);
  const [order, setOrder] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let adminToken = localStorage.getItem("adminToken");
    if (!adminToken) {
      navigate("/admin/signin");
    }
  }, [0]);

  const handledash = () => {
    setDash(true);
    setOrder(false);
    setProduct(false);
    setUser(false);
  };

  const handleuser = () => {
    setDash(false);
    setOrder(false);
    setProduct(false);
    setUser(true);
  };

  const handleorder = () => {
    setDash(false);
    setOrder(true);
    setProduct(false);
    setUser(false);
  };

  const handleproduct = () => {
    setDash(false);
    setOrder(false);
    setProduct(true);
    setUser(false);
  };

  return (
    <div className="h-[94vh]">
      <div className="navbar-section fixed z-20 top-0 w-[100%] ">
        <AdminNavbar />
      </div>
      <div className="body-section flex relative top-[6vh]">
        <div className=" w-[18vw] fixed h-full bg-[rgb(89,89,89)]">
          <div
            className={
              dash
                ? " text-xl text-[#fbe0e0] tablet:text-sm bg-[#6d6d6d] p-3 hover:cursor-pointer mb-4 mt-4"
                : `text-light dashboard tablet:text-xs p-3 hover:cursor-pointer mb-4 mt-4 hover:bg-[#6d6d6d]`
            }
            onClick={handledash}
          >
            <FontAwesomeIcon className=" pr-2" icon={faBriefcase} />
            <span>Dashboard</span>
          </div>
          <div
            className={
              user
                ? " text-xl text-[#fbe0e0] tablet:text-sm bg-[#6d6d6d] p-3 hover:cursor-pointer mb-4 "
                : `text-light user p-3 tablet:text-xs hover:cursor-pointer mb-4 hover:bg-[#6d6d6d]`
            }
            onClick={handleuser}
          >
            <FontAwesomeIcon className=" pr-2 " icon={faUser} />
            <span>User</span>
          </div>
          <div
            className={
              product
                ? " text-xl text-[#fbe0e0] tablet:text-sm bg-[#6d6d6d] p-3 hover:cursor-pointer mb-4"
                : `text-light product p-3 tablet:text-xs hover:cursor-pointer mb-4 hover:bg-[#6d6d6d]`
            }
            onClick={handleproduct}
          >
            <FontAwesomeIcon className=" pr-2" icon={faWarehouse} />
            <span>Inventory</span>
          </div>
          {/* <div
            className={
              order
                ? " text-xl text-[#fbe0e0] tablet:text-sm bg-[#6d6d6d] p-3 hover:cursor-pointer mb-4"
                : `text-light order p-3 tablet:text-xs hover:cursor-pointer mb-4 hover:bg-[#6d6d6d]`
            }
            onClick={handleorder}
          >
            <FontAwesomeIcon className=" pr-2" icon={faClipboard} />
            <span>Orders</span>
          </div> */}
        </div>
        <div className="right relative left-[18vw] w-[80vw] m-[8px]">
          {dash ? <AdminDash /> : ""}
          {order ? <AdminOrder /> : ""}
          {product ? <AdminProduct /> : ""}
          {user ? <AdminUser /> : ""}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
