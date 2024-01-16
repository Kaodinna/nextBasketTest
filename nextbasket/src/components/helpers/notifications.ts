import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyAddedToCart = (item: any) =>
  toast.success(`${item.title} added to cart!`, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
export const notifyAddedToWishList = (item: any) =>
  toast.success(`${item.title} added to WishList!`, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      backgroundColor: "#fff",
      color: "#000",
    },
  });

export const notifyRemovedFromCart = (item: any) =>
  toast.error(`${item.title} removed from cart!`, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      backgroundColor: "#000",
      color: "#fff",
    },
  });
export const notifyRemovedFromWishList = (item: any) =>
  toast.error(`${item.title} removed from WishList!`, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      backgroundColor: "#000",
      color: "#fff",
    },
  });
