import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsDetails();
  }, []);

  const fetchProductsDetails = async () => {
    try {
      const response = await axios.get("http://13.51.107.169/api/products");
      // console.log(response.data);
      setProducts(response.data.productsList);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleProductDelete = async (id) => {
    await axios.delete(`http://13.51.107.169/api/products/delete/${id}`);
    fetchProductsDetails();
  };

  return (
    <div className="users-page-container">
      <h1 className="heading">Products Page</h1>

      {products.map((product) => (
        <div className="listdiv">
          <li className="li">{product.name}</li>
          <button
            className="deletebtn"
            onClick={() => {
              handleProductDelete(product.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
