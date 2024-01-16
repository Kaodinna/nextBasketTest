"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Spin } from "antd";
import { usePathname } from "next/navigation";

const FeaturedProducts = () => {
  const [data, setData] = useState<any[]>([]);
  const [total, setTotal] = useState<
    { total: number; limit: number } | undefined
  >();
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const homePage = "/";
  const isHomePage = pathname === homePage;
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products/?limit=${limit}`
      );
      setData(response.data.products);
      setTotal(response.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [limit]);
  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };
  const calculateDiscountedPrice = (price: string, discountPercent: string) => {
    const parsedPrice = parseFloat(price);
    const parsedDiscountPercent = parseFloat(discountPercent);

    if (isNaN(parsedPrice) || isNaN(parsedDiscountPercent)) {
      return "Invalid input. Please provide valid numbers.";
    }

    const discountedPrice =
      parsedPrice - (parsedPrice * parsedDiscountPercent) / 100;
    return discountedPrice.toFixed(2); // Assuming you want two decimal places
  };

  return (
    <div
      className={`py-[80px] font-Montserrat  ${
        isHomePage ? "bg-white" : "#FAFAFA"
      }`}
    >
      {isHomePage && (
        <div className="text-center w-full md:w-[300px] mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center text-center items-center">
            <h4 className="font-[400] text-[20px] leading-[30px]  tracking-[0.2px] text-[#737373]">
              Featured Products
            </h4>
            <h3 className="font-[700] text-[24px] leaading-[32px] tracking-[0.1px] text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
            <p className="font-[400] text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center">
        {data && data.length > 0 ? (
          <>
            <div className="py-[8px] grid md:grid-cols-5 grid-cols-1 md:gap-[30px] gap-[15px] g mx-auto  items-center">
              {data.map((product, index) => (
                <Link href={`/selected-product/${product?.id}`} key={index}>
                  <div className="flex flex-col items-center w-[239px] h-[442px] bg-[#FFFFFF]">
                    {" "}
                    <div className="h-[280px]">
                      <Image
                        src={product?.images[0]}
                        height={280}
                        width={183}
                        alt="sample"
                        className="h-[280px] w-full object-contain md:object-fill"
                      />
                    </div>
                    <div className="px-[25px] pb-[35px] pt-[25px] text-center font-[700] leading-[24px] h-[40%] flex flex-col gap-[10px]">
                      <h5 className=" text-[16px]  tracking-[0.1px] text-[#252B42]">
                        {product?.title}
                      </h5>
                      <Link
                        href=""
                        className="text-[14px] tracking-[0.2px] text-[#737373]"
                      >
                        {product?.category}
                      </Link>
                      <span className="flex flex-row items-center justify-center py-[5px] px-[3px] gap-[5px] tracking-[0.1px]">
                        <h5 className="text-[#BDBDBD]">${product?.price}</h5>
                        <h5 className="text-[#23856D]">
                          $
                          {calculateDiscountedPrice(
                            product?.price,
                            product?.discountPercentage
                          )}
                        </h5>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div>
              {total?.total !== total?.limit && isHomePage && (
                <div className="flex justify-center">
                  <button
                    className="py-[15px] px-[40px] border-[1px] border-[#23A6F0] text-[#23A6F0] rounded-[5px]"
                    onClick={handleLoadMore}
                  >
                    {loading ? <Spin /> : "LOAD MORE PRODUCTS"}
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="text-center mt-4 font-bold md:text-3xl text-lg text-black ">
            No Products available
          </div>
        )}
      </div>
    </div>
  );
};
export default FeaturedProducts;
