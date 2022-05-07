import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer-container">
      <p>{year} &copy; All Right Reserved by WebShop </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <FaFacebookSquare />
      </p>
    </div>
  );
};

export default Footer;
