import { CssBaseline, ThemeProvider, Stack } from "@mui/material";
import theme from "./themes/theme.ts";
import NavBar from "./components/shared/NavBar.tsx";
import Footer from "./components/shared/Footer.tsx";
import Cart from "./components/pages/Cart.tsx";
import Checkout from "./components/pages/Checkout.tsx";
import CartIcon from "./components/shared/CartIcon.tsx";
import SideCart from "./components/shared/SideCart.tsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import item from "./models/Item.ts";
import Home from "./components/pages/home";
import Restaurants from "./components/pages/restaurants";
import Register from "./components/pages/register";
import Login from "./components/pages/login";
import { Menu } from "./components/pages/Menu.tsx";
import Ditails from "./components/pages/Ditails.tsx";
import UserInfoAndOrders from "./components/pages/UserInfoAndOrders.tsx";
import axios from "axios";
const url = "http://localhost:3000/api/v1";
function App() {
  const path = useLocation().pathname;
  const [openSideCart, setOpenSideCart] = useState(false);

  const [isUser, setisUser] = useState(false);

  const [cartItems, setCartItems] = useState<item[]>([]);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const [phones, setPhones] = useState<string[]>([]);
  const [addresses, setAddresses] = useState<string[]>([]);
  const [restaurantId, setRestaurantId] = useState<string>("");

  useEffect(() => {
    const getUserCart = async () => {
      const res = await axios.get(url + "/cart", {
        headers: { jwt: localStorage.getItem("token") },
      });
      if (res.data.itemsIds.length) {
        const newCartItems = res.data.itemsIds;
        setCartItems(newCartItems);
        setRestaurantId(res.data.itemsIds[0].productId.restaurantId);
        calculateQuantity(newCartItems);
        calculateTotal(newCartItems);
      }
    };
    const getUserAddresses = async () => {
      const res = await axios.get(url + "/addresses", {
        headers: { jwt: localStorage.getItem("token") },
      });
      if (!res.data.message) {
        const newAddresses = res.data;
        setAddresses(newAddresses);
      }
    };
    const getUserPhones = async () => {
      const res = await axios.get(url + "/phones", {
        headers: { jwt: localStorage.getItem("token") },
      });
      if (!res.data.message) {
        const newPhones = res.data;
        setPhones(newPhones);
      }
    };
    // localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDhkYjIzOTY1ZjcyZGQ4YjhkY2M4MSIsInJvbGUiOnsiX2lkIjoiNjYzZGZlOWJhMmVkZTE3N2U2ODg1ZTQxIiwibmFtZSI6ImFkbWluIn0sImlhdCI6MTcxNzg3MzUyNSwiZXhwIjoxNzE3ODk1MTI1fQ.fd943kL94iZYZPnEvYuZFJRWzb7laqnNkHbPitysi9g")
    if (localStorage.getItem("token")) {
      setisUser(true);
      getUserCart();
      getUserAddresses();
      getUserPhones();
    } else {
      setisUser(false);
    }
  }, [isUser]);

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
  const emptyCart = () => {
    setCartItems([]);
    setCartQuantity(0);
    setCartTotal(0);
  };
  const addPhoneNumber = (phone: any) => {
    const newPhones = [...phones, phone];
    setPhones(newPhones);
  };
  const addAddress = (address: any) => {
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
          {path !== "/register" && path !== "/login" && (
            <NavBar
              isUser={isUser}
              setisUser={setisUser}
              cartQuantity={cartQuantity}
            ></NavBar>
          )}
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/productdetails" element={<Ditails />} />
            <Route path="/userinfo" element={<UserInfoAndOrders />} />
            <Route
              path="/register"
              element={<Register setisUser={setisUser} />}
            />
            <Route path="/login" element={<Login setisUser={setisUser} />} />
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  emptyCart={emptyCart}
                  restaurantId={restaurantId}
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
                  deleteItemQuantity={deleteItemQuantity}
                  cartQuantity={cartQuantity}
                  cartItems={cartItems}
                  cartTotal={cartTotal}
                  editItemQuantity={editItemQuantity}
                />
              }
            />
          </Routes>
          {path !== "/register" && path !== "/login" && <Footer></Footer>}
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
        {path !== "/register" && path !== "/login" && path !== "/cart" && (
          <CartIcon setOpenSideCart={setOpenSideCart} cartTotal={cartTotal} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
