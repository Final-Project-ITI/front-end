import { Grid, Typography } from "@mui/material";
import Product from "./Product";

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
    <Grid container spacing={2} sx={{ padding: 8 }}>
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
            fontSize: "25px",
          }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{}}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Category;
