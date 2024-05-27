import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./themes/theme.ts";
import NavBar from "./components/shared/NavBar.tsx";
import Category from "./components/shared/Category.tsx";
import Image from "./components/shared/Image.tsx";
import img from "./assets/WhatsApp Image 2024-05-24 at 17.42.05_1ebcada5.jpg";

function App() {
  const pizzaProducts = [
    {
      id: 1,
      name: "Margherita",
      description: "Product description",
      price: "50 EGP",
      image: img,
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Product description",
      price: "60 EGP",
      image: img,
    },
    {
      id: 3,
      name: "Four Cheese",
      description: "Product description",
      price: "70 EGP",
      image: img,
    },
    {
      id: 4,
      name: "Hawaiian",
      description: "Product description",
      price: "80 EGP",
      image: img,
    },
  ];

  const sandwichProducts = [
    {
      id: 1,
      name: "Falafel Sandwich",
      description: "Product description",
      price: "20 EGP",
      image: img,
    },
    {
      id: 2,
      name: "Shawarma Sandwich",
      description: "Product description",
      price: "30 EGP",
      image: img,
    },
    {
      id: 3,
      name: "Liver Sandwich",
      description: "Product description",
      price: "25 EGP",
      image: img,
    },
    {
      id: 4,
      name: "Pane Sandwich",
      description: "Product description",
      price: "35 EGP",
      image: img,
    },
  ];

  const souqProducts = [
    {
      id: 1,
      name: "Souq Product 1",
      description: "Product description",
      price: "15 EGP",
      image: img,
    },
    {
      id: 2,
      name: "Souq Product 2",
      description: "Product description",
      price: "25 EGP",
      image: img,
    },
    {
      id: 3,
      name: "Souq Product 3",
      description: "Product description",
      price: "20 EGP",
      image: img,
    },
    {
      id: 4,
      name: "Souq Product 4",
      description: "Product description",
      price: "30 EGP",
      image: img,
    },
  ];

  const piesProducts = [
    {
      id: 1,
      name: "Cheese Pie",
      description: "Product description",
      price: "45 EGP",
      image: img,
    },
    {
      id: 2,
      name: "Meat Pie",
      description: "Product description",
      price: "55 EGP",
      image: img,
    },
    {
      id: 3,
      name: "Vegetable Pie",
      description: "Product description",
      price: "50 EGP",
      image: img,
    },
    {
      id: 4,
      name: "Spinach Pie",
      description: "Product description",
      price: "60 EGP",
      image: img,
    },
  ];

  const pastaProducts = [
    {
      id: 1,
      name: "White Pasta",
      description: "Product description",
      price: "70 EGP",
      image: img,
    },
    {
      id: 2,
      name: "Red Pasta",
      description: "Product description",
      price: "80 EGP",
      image: img,
    },
    {
      id: 3,
      name: "Seafood Pasta",
      description: "Product description",
      price: "90 EGP",
      image: img,
    },
    {
      id: 4,
      name: "Chicken Pasta",
      description: "Product description",
      price: "85 EGP",
      image: img,
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: "100vh", backgroundColor: "#F3ECE4" }}>
          <NavBar></NavBar>
          <Image />
          <Category name="PIZZA" products={pizzaProducts} />
          <Category name="SANDWICH" products={sandwichProducts} />
          <Category name="SOUQ" products={souqProducts} />
          <Category name="PIES" products={piesProducts} />
          <Category name="PASTA" products={pastaProducts} />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
