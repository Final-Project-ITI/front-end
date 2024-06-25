import { createContext, useState } from "react";
import item from "../models/Item";
const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
    const [cartItems, setCartItems] = useState<item[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [restaurantId, setRestaurantId] = useState<string>("");


  const calculateQuantity = (newCartItems: item[]) => {
    const newCartQuantity = newCartItems.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );
    setCartQuantity(newCartQuantity);
  };
  const calculateTotal = (newCartItems: item[]) => {
    const newCartTotal = newCartItems.reduce(
      (acc, curr) => acc + curr.quantity * curr.productId.price,
      0
    );
    setCartTotal(newCartTotal);
  };

  const editItemQuantity = (itemId: string, newQuantity: number) => {
    const newCartItems = [...cartItems];
    const index = newCartItems.findIndex(
      (item) => item.productId._id === itemId
    );
    // if (newCartItems[index].quantity + newQuantity < 0) {
    //   return;
    // } else if (newCartItems[index].quantity + newQuantity === 0) {
    //   deleteItemQuantity(itemId);
    //   return;
    // }
    newCartItems[index] = {
      ...newCartItems[index],
      quantity: newCartItems[index].quantity + newQuantity,
    };
    setCartItems(newCartItems);
    setCartQuantity((pre:any) => pre + newQuantity);
    setCartTotal(
      (pre:any) => pre + newQuantity * newCartItems[index].productId.price
    );
  };

  const deleteItemQuantity = (itemId: string) => {
    const newCartItems = cartItems.filter(
      (item:any) => item.productId._id !== itemId
    );
    setCartItems(newCartItems);
    calculateQuantity(newCartItems);
    calculateTotal(newCartItems);
  };
  const emptyCart=()=>{
    setCartItems([])
    setCartQuantity(0)
    setCartTotal(0)
  }

  return (
    <CartContext.Provider value={{cartItems, setCartItems,cartQuantity, setCartQuantity,cartTotal, setCartTotal,emptyCart,deleteItemQuantity,editItemQuantity,calculateTotal ,calculateQuantity,restaurantId, setRestaurantId}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
