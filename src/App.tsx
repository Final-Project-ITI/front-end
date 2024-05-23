import { ThemeProvider, Typography } from "@mui/material";
import theme from "./themes/theme.ts"

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography color={"primary"}>
          foodi

        </Typography>
        
      </ThemeProvider>
    </>
  );
}

export default App;
