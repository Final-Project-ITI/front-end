import { Grid, Typography } from "@mui/material";
import Product from "./Product";
import Ditails from "../pages/Ditails";
import UserInfoAndOrders from "../pages/UserInfoAndOrders";

interface ProductType {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface IProps {
  name: string;
  products: ProductType[];
}

const Category = ({ name, products }: IProps) => {
  return (
    <Grid container sx={{ padding: 8, mb: -40 }}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          gutterBottom
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "40vh",
            fontWeight: "bold",
            fontSize: "32px",
            mt: -5,
            mb: 0,
          }}
        >
          {name}
        </Typography>
      </Grid>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <Ditails />

      <UserInfoAndOrders />
    </Grid>
  );
};

export default Category;
