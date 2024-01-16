import Product from "./Product";

type WishListProduct = Product & {
  quantity: number;
};

export default WishListProduct;
