import axios from 'axios'
import React, { useContext } from 'react'
import ApiContext from '../../context/Apis/apiContext'

const AdminProductItem = ({prod,setRemove,setEdit,setId ,load, setload}) => {

  const context=useContext(ApiContext)
  const {host}=context

  const handleDelete=async()=>{
    setRemove(false)
    try {
      const response=await axios.delete(`${host}/admin/deleteproduct/${prod._id}`)
      setload(!load)
    } catch (error) {
      alert(error)
    }
  }

  const handleEdit=()=>{
    setId(prod._id)
    setEdit(true)
  }

  return (
    <div>
        <div className="top flex justify-center h-[180px] mb-4">
                      <img
                        className="object-contain"
                        src={prod.imgUrl}
                        alt=""
                      />
                    </div>
                    <div
                      className="bottom h-[150px] p-1"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div className="name font-semibold text-md">
                      {prod.name.length<25?`${prod.name}`:`${prod.name.substring(0,50)}...`}
                      </div>
                      <div className="email text-lg font-bold">
                      ₹{prod.price}
                      </div>
                      <div className="flex justify-between w-[80%] mb-3">
                        <div className="px-2 py-[4px] rounded-[4px] text-light bg-[#e63636] hover:cursor-pointer" onClick={handleDelete}>
                          Delete
                        </div>
                        <div className="px-2 rounded-[4px] text-light bg-[#e6ce1a] py-[4px] hover:cursor-pointer " onClick={handleEdit}>
                          Edit
                        </div>
                      </div>
                    </div>
    </div>
  )
}

export default AdminProductItem