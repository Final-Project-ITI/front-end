import { ThemeProvider, Typography } from "@mui/material";
import theme from "./themes/theme.ts"
import NavBar from "./components/shared/NavBar.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Typography color={"primary"}>
          foodi

        </Typography>
        
      </ThemeProvider>
    </>
  );
}

export default App;
