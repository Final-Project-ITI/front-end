import { CssBaseline, ThemeProvider, Stack } from "@mui/material";
import theme from "./themes/theme.ts";
import NavBar from "./components/shared/NavBar.tsx";
import Footer from "./components/shared/Footer.tsx";
import Cart from "./components/pages/Cart.tsx";
import Checkout from "./components/pages/Checkout.tsx";
import CartIcon from "./components/shared/CartIcon.tsx";
import SideCart from "./components/shared/SideCart.tsx";
import { useContext, useEffect, useRef, useState } from "react";
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
import CartContext from "./context/CartProvider.tsx";
const url="http://localhost:3000/api/v1"
function App() {
  const path = useLocation().pathname;
  const [openSideCart, setOpenSideCart] = useState(false);

  const [isUser, setisUser] = useState(false);

  //@ts-ignore
  const {cartItems, setCartItems,cartQuantity, setCartQuantity,cartTotal, setCartTotal ,emptyCart,deleteItemQuantity,editItemQuantity,calculateTotal ,calculateQuantity,restaurantId, setRestaurantId}=useContext(CartContext)

  const [phones, setPhones] = useState<string[]>([]);
  const [addresses, setAddresses] = useState<string[]>([]);

  const whyUsRef = useRef()

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
          {(path!=="/register" && path!=="/login" )&&<NavBar
            isUser={isUser}
            setisUser={setisUser}
            whyUsRef={whyUsRef}
          ></NavBar>}
          <Routes>
            <Route path="/menu" element={<Menu />} />

            <Route path="/productdetails" element={<Ditails />} />
            <Route path="/userinfo" element={<UserInfoAndOrders />} />
            <Route
              path="/register"
              element={<Register setisUser={setisUser} />}
            />
            <Route path="/login" element={<Login setisUser={setisUser} />} />
            <Route path="/" element={<Home whyUsRef={whyUsRef} />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route
              path="/checkout"
              element={
                <Checkout                
                  phones={phones}
                  addresses={addresses}
                  addPhoneNumber={addPhoneNumber}
                  addAddress={addAddress}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart            />
              }
            />
          </Routes>
          {path !== "/register" && path !== "/login" && <Footer></Footer>}
        </Stack>
        {openSideCart && (
          <SideCart
            setOpenSideCart={setOpenSideCart}
          />
        )}
        {(path!=="/register" && path!=="/login" && path!=="/cart" )&&<CartIcon setOpenSideCart={setOpenSideCart} />}
      </ThemeProvider>
    </>
  );
}

export default App;
