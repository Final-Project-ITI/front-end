import {
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
  Stack,
} from "@mui/material";
import theme from "./themes/theme.ts";
import NavBar from "./components/shared/NavBar.tsx";
import Footer from "./components/shared/Footer.tsx";
import Cart from "./components/pages/Cart.tsx";
import Checkout from "./components/pages/Checkout.tsx";
import CartIcon from "./components/shared/CartIcon.tsx";
import SideCart from "./components/shared/SideCart.tsx";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import cart from "./models/Cart.ts";
import item from "./models/Item.ts";
import Home from "./components/pages/home";
import Restaurants from "./components/pages/restaurants";
import Register from "./components/pages/register";
import Login from "./components/pages/login";
import { Menu } from "./components/pages/Menu.tsx";
import Ditails from "./components/pages/Ditails.tsx";
import UserInfoAndOrders from "./components/pages/UserInfoAndOrders.tsx";

function App() {
  const [openSideCart, setOpenSideCart] = useState(false);

  const [isUser, setisUser] = useState(false);

  const [cartItems, setCartItems] = useState<item[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const [phones, setPhones] = useState<string[]>([]);
  const [addresses, setAddresses] = useState<string[]>([]);

  useEffect(() => {
    setisUser(true);
    const newCartItems = [
      {
        productId: {
          _id: "1",
          title: "Chicken BBQ pizza",
          icon: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d6c392a84e4f665424d710649452e7f9/Derivates/a6bdb196bee23faef1d8020319c7c64750ef7686.jpg",
          price: 120,
        },
        quantity: 2,
      },
      {
        productId: {
          _id: "2",
          title: "Chicken burger",
          icon: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d6c392a84e4f665424d710649452e7f9/Derivates/a6bdb196bee23faef1d8020319c7c64750ef7686.jpg",
          price: 70,
        },
        quantity: 3,
      },
    ];
    setCartItems(newCartItems);
    calculateQuantity(newCartItems);
    calculateTotal(newCartItems);

    const newPhones = [
      "01120633680",
      "01030622894",
      "01240277648",
      "01548522960",
    ];
    setPhones(newPhones);

    const newAddresses = [
      "101-nasr city, cairo, egypt",
      "202-ard elgamaeyat, ismailia, egypt",
      "101-el-abasa, abu-hammad, sharkia, egypt",
    ];
    setAddresses(newAddresses);
  }, []);

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
    if (newCartItems[index].quantity + newQuantity < 0) {
      return;
    } else if (newCartItems[index].quantity + newQuantity === 0) {
      deleteItemQuantity(itemId);
      return;
    }
    newCartItems[index] = {
      ...newCartItems[index],
      quantity: newCartItems[index].quantity + newQuantity,
    };
    setCartItems(newCartItems);
    setCartQuantity((pre) => pre + newQuantity);
    setCartTotal(
      (pre) => pre + newQuantity * newCartItems[index].productId.price
    );
  };

  const deleteItemQuantity = (itemId: string) => {
    const newCartItems = cartItems.filter(
      (item) => item.productId._id !== itemId
    );
    setCartItems(newCartItems);
    calculateQuantity(newCartItems);
    calculateTotal(newCartItems);
  };
  const addPhoneNumber = (phone: string) => {
    const newPhones = [...phones, phone];
    setPhones(newPhones);
  };
  const addAddress = (address: string) => {
    const newAddresses = [...addresses, address];
    setAddresses(newAddresses);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack
          justifyContent={"space-between"}
          sx={{
            minHeight: "100vh",
            backgroundColor: "#F3ECE4",
            position: "relative",
          }}
        >
          <NavBar
            isUser={isUser}
            setisUser={setisUser}
            cartQuantity={cartQuantity}
          ></NavBar>
          <Routes>
            <Route path="/Menu" element={<Menu />} />
            <Route path="/ProductDetails" element={<Ditails />} />
            <Route path="/UserInfo" element={<UserInfoAndOrders />} />
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/restaurant" element={<Restaurants />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  phones={phones}
                  addresses={addresses}
                  cartTotal={cartTotal}
                  addPhoneNumber={addPhoneNumber}
                  addAddress={addAddress}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartQuantity={cartQuantity}
                  cartItems={cartItems}
                  cartTotal={cartTotal}
                  editItemQuantity={editItemQuantity}
                />
              }
            />
          </Routes>
          <Footer></Footer>
        </Stack>
        {openSideCart && (
          <SideCart
            deleteItemQuantity={deleteItemQuantity}
            setOpenSideCart={setOpenSideCart}
            cartItems={cartItems}
            cartQuantity={cartQuantity}
            cartTotal={cartTotal}
            editItemQuantity={editItemQuantity}
          />
        )}
        <CartIcon setOpenSideCart={setOpenSideCart} cartTotal={cartTotal} />
      </ThemeProvider>
    </>
  );
}

export default App;
