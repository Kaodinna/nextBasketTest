import { RootState } from "./store/store";
import CartProduct from "./types/CartProduct";
import { useAppSelector } from "@/components/store/hooks";
import Link from "next/link";

const getTotal = (cartItem: CartProduct[]) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity!;
    totalPrice += item.price! * item.quantity!;
  });
  return { totalPrice, totalQuantity };
};
const WishListTotal = () => {
  const { wishList: wishListItem } = useAppSelector(
    (state: RootState) => state.wishList
  );

  const quantity = getTotal(wishListItem).totalQuantity;
  const price = getTotal(wishListItem).totalPrice;

  return (
    <div className="py-3 px-3 flex flex-col gap-3">
      <h3 className="text-[14px] text-center  ">
        Total Quantity: <span className="font-bold"> {quantity}</span>
      </h3>
      <h3 className="text-[14px] text-center">
        Total Price:{" "}
        <span className="font-bold">
          {" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </span>
      </h3>

      <div className="flex justify-center">
        <button className="text-[18px] font-bold border-solid border-3 border-white text-white rounded-lg">
          <Link href="/order/checkout">Checkout</Link>
        </button>
      </div>
    </div>
  );
};

export default WishListTotal;
