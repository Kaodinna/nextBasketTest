import { useAppSelector, useAppDispatch } from "@/components/store/hooks";
import { useEffect } from "react";
import { closeCart } from "./store/modal/cartModalSlice";
import CartItemCard from "./CartItemCard";
import { RootState } from "./store/store";
import CartTotal from "./cartTotal";
import { AiOutlineClose } from "react-icons/ai";

export default function Cart() {
  const { toggleCart } = useAppSelector((state) => state.cartModal);
  const { cart } = useAppSelector((state) => state.cart);
  const { cart: cartItem } = useAppSelector((state: RootState) => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart.length === 0) {
      dispatch(closeCart());
    }
  }, [cart, dispatch]);

  return (
    <>
      {toggleCart && (
        <div className="cart-shadow absolute top-36 left-1/2 z-30 flex h-[400px] md:w-[360px] w-[300px]  -translate-x-1/2 flex-col rounded-[10px] bg-custom-white pb-1 lg:top-30 lg:left-[80%] bg-[#23856D] font-Montserrat overflow-y-scroll">
          <div className="border-1 w-full border-b border-slate-200 p-2">
            <AiOutlineClose
              className="text-white text-lg"
              onClick={() => {
                dispatch(closeCart());
              }}
            />

            <p className="text-16 font-bold text-white text-center">Cart</p>
          </div>
          <div className="flex  w-full flex-col justify-between gap-2 px-6">
            {cart.length === 0 ? (
              <p className="text-16 font-bold text-grayish-blue-300 text-center">
                Your cart is empty.
              </p>
            ) : (
              <>
                <div className="flex flex-col mb-2 gap-2 ">
                  {cartItem?.map((item) => (
                    <CartItemCard product={item} key={item.id} />
                  ))}
                </div>
              </>
            )}
            <div className="md:sticky mt-2 bg-[#23A6F0] text-white flex-none  rounded-2xl">
              <CartTotal />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
