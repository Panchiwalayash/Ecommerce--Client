import axios from "axios";
import React, { useContext, useState } from "react";
import ApiContext from "../../context/Apis/apiContext";

const AdminCreateProduct = ({ setCreate,setload, load }) => {
  const context = useContext(ApiContext);
  const { host,addproduct } = context;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [quantity,setQuantity]=useState(0)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("desc", description);
    formData.append("image", image);
    if(quantity!==0) formData.append("quantity",quantity)
    await addproduct(formData)
    setCreate(false);
    setload(!load)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <div className="text-xl font-semibold mb-5">Add Product</div>
    <form  className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray font-bold mb-2">
          Product Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray font-bold mb-2">
          Image:
        </label>
        <div className="flex items-center justify-between">
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            required
            className="hidden"
            />
          <label
            htmlFor="image"
            className="inline-block bg-royal-blue hover:bg-blue text-light font-semibold py-1 px-2 rounded cursor-pointer"
            >
            Choose Image
          </label>
          {previewImage && (
            <img src={previewImage} alt="Product Preview" width="200" />
            )}
        </div>
      </div>
      <div className="flex justify-around">
      <button
        type="submit"
        className="px-4 py-2 bg-lime-green font-bold text-lg rounded-[8px] text-light hover:cursor-pointer"
        >
        Add Product
      </button>
      <div onClick={e=>setCreate(false)}
        className="px-4 py-2 bg-gray font-bold text-lg rounded-[8px] text-light hover:cursor-pointer" 
      >
            Close
      </div>
          </div>
    </form>
</div>
  );
};

export default AdminCreateProduct;
