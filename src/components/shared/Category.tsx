import { Grid, Typography } from "@mui/material";
import Product from "./ProductCard";

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
    <Grid container sx={{ padding: "48px" }}>
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
    </Grid>
  );
};

export default Category;
