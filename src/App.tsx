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
import { useState } from "react";

function App() {
  const[openSideCart,setOpenSideCart]=useState(false)
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
          <NavBar></NavBar>
          <Checkout></Checkout>
          <Footer></Footer>
        </Stack>
        {openSideCart && <SideCart setOpenSideCart={setOpenSideCart} cartitems={5}/>}
        <CartIcon  setOpenSideCart={setOpenSideCart}/>

      </ThemeProvider>
    </>
  );
}

export default App;
