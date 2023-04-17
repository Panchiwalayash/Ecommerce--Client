import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../../context/Apis/apiContext'
import axios from 'axios'

const AdminEditProduct = ({ id, setEdit,load,setload }) => {
    const context = useContext(ApiContext)
    const { host } = context

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [newPreviewImage, setNewPreviewImage] = useState(null);

    const [quantity, setQuantity] = useState(0)
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setNewPreviewImage(URL.createObjectURL(file));
    };

    useEffect(() => {
        const getproduct = async () => {
            const res = await axios.get(`${host}/admin/getproduct/${id}`)
            setTitle(res.data.name)
            setPrice(res.data.price)
            setDescription(res.data.desc)
            setPreviewImage(res.data.imgUrl)
            setQuantity(res.data.quantity)
        }
        getproduct()
    }, [0])


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", title);
        formData.append("price", price);
        formData.append("desc", description);
        formData.append("image", image);
        if(quantity!==0) formData.append("quantity",quantity)
        try {
            const res=await axios.put(`${host}/admin/updateproduct/${id}`,formData)
            setload(!load)
            setEdit(false)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='mt-[5vh]'>
            <form className="w-full max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray font-bold mb-2">
                        Product Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray font-bold mb-2">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray font-bold mb-2">
                        Quantity:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray font-bold mb-2">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        rows={5}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4 flex ">
                    <label htmlFor="image" className="block text-gray font-bold mb-2 mr-5">
                        Current Image:
                    </label>
                    {previewImage && (
                        <img src={previewImage} alt="Product Preview" width="200" />
                    )}
                </div>
                <div className="mb-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="image" className="block text-gray font-bold mb-2">
                            Change Image to:
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}    
                            className="hidden"
                        />
                        <label
                            htmlFor="image"
                            className="inline-block bg-royal-blue hover:bg-blue text-light font-semibold py-1 px-2 rounded cursor-pointer"
                        >
                            Choose Image
                        </label>
                        {newPreviewImage && (
                            <img src={newPreviewImage} alt="Product Preview" width="200" />
                        )}
                    </div>
                </div>
                <div className="flex justify-around">
                    <div
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-lime-green font-bold text-lg rounded-[8px] text-light hover:cursor-pointer"
                    >
                        Apply Changes
                    </div>
                    <div onClick={e => setEdit(false)}
                        className="px-4 py-2 bg-gray font-bold text-lg rounded-[8px] text-light hover:cursor-pointer"
                    >
                        Close
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdminEditProduct