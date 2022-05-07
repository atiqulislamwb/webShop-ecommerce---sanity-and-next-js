import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Product = ({ product }) => {
  const { image, name, slug, price } = product;
  return (
    <>
      <div className="product-container">
        <Link href={`/product/${slug.current}`}>
          <div className="product-card">
            <img
              width={250}
              height={250}
              className="product-image"
              src={urlFor(image && image[0])}
              alt="products"
            />
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
