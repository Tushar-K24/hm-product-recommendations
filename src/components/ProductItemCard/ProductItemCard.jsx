import React from "react";
import "./ProductItemCard.css";

const ProductItemCard = ({ imageSrc, title, price, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };
  return (
    <button className="flat-btn" onClick={handleClick}>
      <div className="product-item-card">
        <img src={imageSrc} alt={title} className="product-item-image" />
        <div className="product-item-desc">
          <div className="product-item-title">{title}</div>
          <div className="product-item-price">{price}</div>
        </div>
      </div>
    </button>
  );
};

export default ProductItemCard;
