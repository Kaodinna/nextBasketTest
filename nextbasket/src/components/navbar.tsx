"use client";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "./store/store";
import { useAppSelector, useAppDispatch } from "@/components/store/hooks";
import { toggleCart, closeCart } from "@/components/store/modal/cartModalSlice";
import {
  toggleWishList,
  closeWishList,
} from "@/components/store/modal/wishListModalSlice";
import Cart from "./cart";
import WishList from "./wishList";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart: cartItem } = useAppSelector((state: RootState) => state.cart);
  const { wishList: wishListItem } = useAppSelector(
    (state: RootState) => state.wishList
  );
  const dispatch = useAppDispatch();

  const closeDropDown = () => {
    setOpen(false);
  };
  const handleCart = () => {
    dispatch(toggleCart());
    dispatch(closeWishList());
    closeDropDown();
  };
  const handleWishList = () => {
    dispatch(toggleWishList());
    dispatch(closeCart());
    closeDropDown();
  };

  return (
    <div className="  font-Montserrat font-[700] text-[14px] leading-[24px] tracking-[0.2px] text-white ">
      <div className=" hidden md:flex flex-row items-center w-full bg-[#23856D]  px-10  h-[58px]">
        <div className="w-1/3 flex flex-row items-center gap-[10px]">
          <div className=" flex flex-row items-center gap-[5px]">
            <Image
              src="/images/telephoneIcon.svg"
              height={16}
              width={16}
              alt="Telephone"
            />
            <h6 className="font">(225) 555-0118</h6>
          </div>
          <div className=" flex flex-row items-center gap-[5px]">
            <Image
              src="/images/mailIcon.svg"
              height={16}
              width={16}
              alt="Mail"
            />
            <h6>michelle.rivera@example.com</h6>
          </div>
        </div>
        <div className="w-1/3 flex justify-center">
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="w-1/3 flex flex-row items-center gap-[10px] justify-end">
          <h6>Follow Us :</h6>
          <Image
            src="/images/instagramIcon.svg"
            height={16}
            width={16}
            alt="Instagram"
          />
          <Image
            src="/images/youtubeIcon.svg"
            height={16}
            width={16}
            alt="Youtube"
          />
          <Image
            src="/images/facebookIcon.svg"
            height={16}
            width={16}
            alt="Facebook"
          />
          <Image
            src="/images/twitterIcon.svg"
            height={16}
            width={16}
            alt="Twitter"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col bg-white pt-[36px] items-center md:px-10 px-4">
        <div className="md:w-[15%] w-full">
          <h3 className="text-[24px] hidden md:block leading-[32px] tracking-[0.1px] text-[#252B42]">
            Bandage
          </h3>
          <div className="flex flex-row justify-between pb-8 md:pb-0">
            <h3 className="text-[24px] flex md:hidden leading-[32px] tracking-[0.1px] text-[#252B42]">
              Bandage
            </h3>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl  absolute right-8  cursor-pointer md:hidden text-black items-center justify-center flex"
            >
              {open ? (
                <AiOutlineClose className="text-black" />
              ) : (
                <AiOutlineMenu className="text-black" />
              )}
            </div>
          </div>
        </div>
        <div
          className={`md:w-[85%] w-full flex md:flex-row flex-col justify-between md:opacity-100 bg-white absolute md:static md:z-auto z-[100] transition-all duration-500 ease-in ${
            open ? "top-16 opacity-100" : "top-[-900px]"
          }`}
        >
          <div className="text-[#737373] flex md:flex-row flex-col items-center md:gap-[15px] gap-[30px] md:text-[14px] text-[30px] md:leading-[24px] leading-[45px] tracking-[0.2px]">
            {" "}
            <Link href="/">Home</Link>
            <Link
              href="/shop"
              className="flex flex-row items-center gap-[10px]"
            >
              Shop{" "}
              <Image
                src="/images/dropdown.svg"
                height={10}
                width={10}
                alt="Dropdown"
              />
            </Link>
            <Link href="/shop">About</Link>
            <Link href="/shop">Blog</Link>
            <Link href="/shop">Contact</Link>
            <Link href="/shop">Pages</Link>
          </div>
          <div>
            <div className="flex md:flex-row flex-col items-center gap-[5px]">
              <div className="flex mt-4 md:mt-0 flex-row gap-[5px] items-center md:text-[14px] text-[30px] md:leading-[24px] leading-[45px] tracking-[0.2px]">
                <Image
                  src="/images/profileIcon.svg"
                  height={12}
                  width={12}
                  alt="Dropdown"
                  className="md:h-[12px] md:w-[12px] w-[27px] h-[28px]"
                />
                <Link href="/signup" className="text-[#23A6F0] ">
                  Login / Register
                </Link>
              </div>
              <span className=" p-[15px]">
                <Image
                  src="/images/searchLens.svg"
                  height={16}
                  width={16}
                  alt="Search"
                  className="md:h-[16px] md:w-[16px] w-[34px] h-[34px]"
                />
              </span>
              <span
                className=" p-[15px] flex flex-row items-center gap-[5px] cursor-pointer"
                onClick={handleCart}
              >
                <Image
                  src="/images/cart.svg"
                  height={16}
                  width={16}
                  alt="Cart"
                  className="md:h-[16px] md:w-[16px] w-[37px] h-[37px]"
                />
                <small className="font-[400] text-[12px] leading-[16px] text-[#23A6F0]">
                  {cartItem.length}
                </small>
              </span>
              <span
                className=" p-[15px] flex flex-row items-center gap-[5px] cursor-pointer"
                onClick={handleWishList}
              >
                <Image
                  src="/images/wishList.svg"
                  height={16}
                  width={16}
                  alt="Wish List"
                  className="md:h-[16px] md:w-[16px] w-[29px] h-[29px]"
                />
                <small className="font-[400] text-[12px] leading-[16px] text-[#23A6F0]">
                  {wishListItem.length}
                </small>
              </span>
            </div>
          </div>
        </div>
        <Cart />
        <WishList />
      </div>
    </div>
  );
};

export default Navbar;
