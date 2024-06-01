import { Box, CssBaseline, ThemeProvider, Typography , Stack} from "@mui/material";
import theme from "./themes/theme.ts"
import NavBar from "./components/shared/NavBar.tsx";
import Footer from "./components/shared/Footer.tsx";
import Cart from "./components/pages/Cart.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Stack justifyContent={"space-between"} sx={{minHeight:"100vh", backgroundColor:"#F3ECE4"}}>
        <NavBar></NavBar>
        <Cart cartitems={5}></Cart>
        <Footer>
        </Footer>

        </Stack>
        
        
      </ThemeProvider>
    </>
  );
}

export default App;
