import { useAppSelector, useAppDispatch } from "@/components/store/hooks";
import { useEffect } from "react";
import { closeWishList } from "./store/modal/wishListModalSlice";
import { RootState } from "./store/store";
import WishListItemCard from "./wishListItemCard";
import WishListTotal from "./wishListTotal";
import { AiOutlineClose } from "react-icons/ai";

const WishList = () => {
  const { toggleWishList } = useAppSelector((state) => state.wishListModal);
  const { wishList } = useAppSelector((state) => state.wishList);
  const { wishList: wishListItem } = useAppSelector(
    (state: RootState) => state.wishList
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (wishList.length === 0) {
      dispatch(closeWishList());
    }
  }, [wishList, dispatch]);

  return (
    <>
      {toggleWishList && (
        <div className="cart-shadow absolute top-36 left-1/2 z-30 flex h-[400px] md:w-[360px] w-[300px] -translate-x-1/2 flex-col rounded-[10px] bg-custom-white pb-1 lg:top-30 lg:left-[85%] bg-[#23856D] overflow-y-scroll font-Montserrat">
          <div className="border-1 w-full border-b border-slate-200 p-2">
            <AiOutlineClose
              className="text-white text-lg"
              onClick={() => {
                dispatch(closeWishList());
              }}
            />
            <p className="text-16 font-bold text-white text-center">WishList</p>
          </div>
          <div className="flex w-full flex-col justify-between gap-2 px-6">
            {wishList.length === 0 ? (
              <p className="text-16 font-bold text-grayish-blue-300 text-center">
                Your wishList is empty.
              </p>
            ) : (
              <>
                <div className="flex flex-col mb-2  gap-2">
                  {wishListItem?.map((item) => (
                    <WishListItemCard product={item} key={item.id} />
                  ))}
                </div>
              </>
            )}
            <div className="md:sticky mt-2 bg-[#23A6F0] text-white flex-none rounded-2xl">
              <WishListTotal />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default WishList;
