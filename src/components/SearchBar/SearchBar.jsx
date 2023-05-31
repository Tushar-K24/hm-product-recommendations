import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.css";
import ProductItemCard from "../ProductItemCard/ProductItemCard";

const SearchBar = () => {
  const [similarClothes, setSimilarClothes] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://asia-south1-clothes-similarity.cloudfunctions.net/clothes-similarity-noauth",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        description: description,
        limit: 10,
      },
    };
    const res = await axios.request(config);
    setSimilarClothes(res.data.similarItems);
  };

  return (
    <>
      <form action="/" className="search-form" onSubmit={submit}>
        <input className="search-bar" name="description" placeholder="Search" />
      </form>

      <div className="container">
        {similarClothes.map((productDesc) => (
          <ProductItemCard
            key={productDesc.id}
            imageSrc={productDesc.imageUrl}
            title={productDesc.name}
            url={productDesc.url}
            // price={productDesc.price}
          />
        ))}
      </div>
    </>
  );
};

export default SearchBar;
