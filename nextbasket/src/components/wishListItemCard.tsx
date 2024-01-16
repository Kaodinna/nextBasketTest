import { Minus, Plus, X } from "lucide-react";
import React from "react";
import { useAppDispatch } from "@/components/store/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "./store/slice/wishListSlice";
import Image from "next/image";
import CartProduct from "./types/CartProduct";
import { notifyRemovedFromWishList } from "@/components/helpers/notifications";

interface CartItemCardProps {
  product: CartProduct;
}

const WishListItemCard: React.FC<CartItemCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const onIncreaseQuantity = (productId: number) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const onDecreaseQuantity = (productId: number) => {
    dispatch(decreaseQuantity({ id: productId }));
  };

  const onRemoveItem = (productId: number) => {
    dispatch(removeItem({ id: productId }));
    notifyRemovedFromWishList(product);
  };

  return (
    <div className="flex mt-2 hover:shadow-lg  transition-all ease-in duration-150 basis-1/3 flex-1  flex-col border-2 border-slate-500 px-2 py-2 rounded-md">
      <div className="flex flex-col items-center">
        <Image
          width={150}
          height={150}
          className=" w-[100px] h-[100px] object-contain"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="flex flex-col">
          <h3 className="text-center  font-bold">{product.title}</h3>
          <h3 className="text-center  font-medium">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </h3>
          <h3 className="text-center  font-medium">
            Quantity: {product.quantity}
          </h3>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 mb-1">
        <button
          onClick={() => onIncreaseQuantity(product.id)}
          title="Increase quantity"
          className="bg-[#23A6F0] px-1 py-1 text-white rounded-full"
        >
          <Plus />
        </button>
        <button
          onClick={() => onDecreaseQuantity(product.id)}
          title="Decrease Quantity"
          className="bg-[#23A6F0] px-1 py-1 text-white rounded-full"
        >
          <Minus />
        </button>
        <button
          onClick={() => onRemoveItem(product.id)}
          title="Remove item from cart"
          className="bg-[#23A6F0] px-1 py-1 text-white rounded-full"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default WishListItemCard;
