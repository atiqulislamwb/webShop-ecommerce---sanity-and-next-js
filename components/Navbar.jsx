import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Context } from "../context/context";
import { Cart } from "./index";

const Navbar = () => {
  const { totalQuantites, setShowCart, showCart } = useContext(Context);

  return (
    <>
      <div className="navbar-container">
        <p className="logo">
          <Link href="/">WebShop</Link>
        </p>

        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShoppingCart />
          <span className="cart-item-qty">{totalQuantites}</span>
        </button>
        {showCart && <Cart />}
      </div>
    </>
  );
};

export default Navbar;
