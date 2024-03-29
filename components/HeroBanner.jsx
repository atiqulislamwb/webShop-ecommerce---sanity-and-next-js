import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  const {
    image,
    buttonText,
    smallText,
    midText,
    discount,
    largeText1,
    largeText2,
    desc,
    product,
  } = heroBanner;
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img
          className="hero-banner-image"
          src={urlFor(image)}
          alt="headphone"
        />
        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc.slice(0, 100)} ...see more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
