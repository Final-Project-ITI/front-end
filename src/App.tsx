import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import theme from "./themes/theme.ts"
import NavBar from "./components/shared/NavBar.tsx";
import Footer from "./components/shared/Footer.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box sx={{minHeight:"100vh", backgroundColor:"#F3ECE4"}}>
        <NavBar></NavBar>
        <Footer>
        </Footer>

        </Box>
        
        
      </ThemeProvider>
    </>
  );
}

export default App;
