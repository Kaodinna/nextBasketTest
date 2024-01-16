"use client";
import React, { useState, useEffect } from "react";
import ImageSlider from "@/components/imageGlider";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Product from "@/components/types/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "@/components/store/slice/cartSlice";
import { addToWishList } from "@/components/store/slice/wishListSlice";
import FeaturedProducts from "@/components/featuredProducts";
import { GoChevronRight } from "react-icons/go";
import {
  notifyAddedToCart,
  notifyAddedToWishList,
} from "@/components/helpers/notifications";

const Page = ({ params }: { params: { productId: string } }) => {
  const [value, setValue] = React.useState<number | null>(2);
  const [data, setData] = useState<Product | null>(null);
  const dispatch = useDispatch();
  const onAddToCart = (product: Product | null) => {
    dispatch(addToCart(product));
    notifyAddedToCart(product);
  };
  const onAddToWishList = (product: Product | null) => {
    dispatch(addToWishList(product));
    notifyAddedToWishList(product);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/${params.productId}`
      );
      setData(response.data);
      setValue(response.data.rating);
      console.log("data", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  function renderStockStatus(stock: number | undefined): string {
    const actualStock = stock !== undefined ? stock : 0;

    return actualStock > 0 ? "In Stock" : "Out of Stock";
  }

  return (
    <div className="font-Montserrat font-[700] ">
      <div className="bg-[#FAFAFA] md:px-10 px-4">
        <div className="py-[24px] ">
          <span className=" gap-[15px] items-center text-[14px] leading-[24px] tracking-[0.2px] flex flex-row">
            <Link href="/" className=" text-[#252B42]">
              Home
            </Link>
            <GoChevronRight className="text-[#BDBDBD] " />
            <h6 className="text-[#BDBDBD]">Shop</h6>
          </span>
        </div>
        <div className="flex md:flex-row flex-col gap-[30px] pb-[48px]">
          <div className="md:w-[40%]">
            <ImageSlider images={data?.images || []} />
          </div>
          <div className="md:w-[60%]">
            <div className="border-b-[1px] border-[#BDBDBD] pb-[120px] w-full">
              <h4 className="font-[400] text-[20px] leading-[30px] text-[#252B42]">
                {data?.title}
              </h4>
              <span className="flex flex-row gap[10px] items-center mt-4">
                <span className="flex justify-center">
                  <Rating name="read-only" value={value} readOnly />
                </span>
                <h6 className="text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
                  10 Reviews
                </h6>
              </span>
              <h3 className="text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mt-4">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data?.price || 0)}
                {/* ${data?.price} */}
              </h3>
              <span className="text-[14px] leading-[24px] tracking-[0.1px] flex flex-row gap-[5px]">
                <h6 className="text-[#737373]">Availability :</h6>
                <h6 className="text-[#23A6F0]">
                  {renderStockStatus(data?.stock)}
                </h6>
              </span>
            </div>
            <div className="flex flex-row gap-[10px] mt-8">
              <span className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full"></span>
              <span className="w-[30px] h-[30px] bg-[#2DC071] rounded-full"></span>
              <span className="w-[30px] h-[30px] bg-[#E77C40] rounded-full"></span>
              <span className="w-[30px] h-[30px] bg-[#252B42] rounded-full"></span>
            </div>
            <div className="mt-20 flex flex-row gap-[10px] items-center">
              <button className="bg-[#23A6F0] py-[10px] px-[20px] rounded-[5px] text-[14px] leading-[24px] tracking-[0.2px]">
                Select Options
              </button>
              <span
                className="border-[1px] cursor-pointer w-[40px] h-[40px] rounded-[44.79px] flex justify-center items-center bg-[#FFFFFF]"
                onClick={() => onAddToWishList(data)}
              >
                <Image
                  alt=""
                  width={17.5}
                  height={15.63}
                  src="/images/wishList2.svg"
                />
              </span>
              <span
                className="border-[1px] cursor-pointer w-[40px] h-[40px] rounded-[44.79px] flex justify-center items-center bg-[#FFFFFF]"
                onClick={() => onAddToCart(data)}
              >
                <Image alt="" width={19} height={19} src="/images/cart2.svg" />
              </span>
              <span className="border-[1px] w-[40px] cursor-pointer h-[40px] rounded-[44.79px] flex justify-center items-center bg-[#FFFFFF]">
                <Image alt="" width={16} height={11} src="/images/eye.svg" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] py-[24px] px-4  md:px-10">
        <span className="font-[600] text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] flex flex-row text-center justify-center gap-[28px] border-b-[1px] border-[#ECECEC] pb-[24px]">
          <Link href="">Description</Link>
          <Link href="">Additional Information</Link>
          <Link href="">
            Reviews <span className="font-[700] text-[#23856D]">(0)</span>
          </Link>
        </span>
        <div className="pt-[24px] pb-[48px] flex md:flex-row flex-col gap-[30px] justify-between">
          <div className="md:w-[50%] w-full pb-[25px] text-[#737373]">
            <h3 className="text-[#252B42] text-[24px] leading-[32px] tracking-[0.1px]">
              the quick fox jumps over{" "}
            </h3>
            <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <h5 className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] border-l-[3px] border-[#23856D] pl-[24px] mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h5>
            <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="md:w-[50%] w-full">
            <Image
              alt=""
              src="/images/unsplash.svg"
              width={413}
              height={372}
              className="rounded-[9px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] py-[48px] md:px-32 px-4">
        <h3 className="text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42] mb-2">
          BESTSELLER PRODUCTS
        </h3>
        <div className="border-t-[1px] border-[#ECECEC]">
          <FeaturedProducts />
        </div>
        <div className="py-[50px] flex justify-center">
          <div className="flex md:flex-row gap-[30px] flex-col">
            <Image alt="" width={103} height={34} src="/images/vector-2.svg" />
            <Image
              alt=""
              width={83}
              height={58.96}
              src="/images/vector-3.svg"
            />
            <Image
              alt=""
              width={102}
              height={74.84}
              src="/images/vector-4.svg"
            />
            <Image
              alt=""
              width={102.98}
              height={41.98}
              src="/images/vector-5.svg"
            />
            <Image
              alt=""
              width={103.68}
              height={61.75}
              src="/images/vector-6.svg"
            />
            <Image
              alt=""
              width={75.75}
              height={71.86}
              src="/images/vector-7.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
