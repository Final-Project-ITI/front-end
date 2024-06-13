import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useTheme,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  product: {
    name: string;
    image: string;
    price: string;
  };
}

const Product = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} lg={4} xl={3} container justifyContent="center">
      <Card
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "25px",
          textAlign: "center",
          width: { xs: "90%", sm: "80%", lg: "90%" },
          height: "auto",
          position: "relative",
          overflow: "visible",
          paddingBottom: "24px",
        }}
      >
        <CardMedia
          component="img"
          alt={product.name}
          image={product.image}
          sx={{
            width: { xs: "70%", sm: "250px", md: "300px" },
            height: { xs: "70%", sm: "250px", md: "300px" },
            border: "10px solid",
            borderColor: theme.palette.primary.main,
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            top: { xs: "-100px", sm: "-125px", md: "-150px" },
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <CardContent sx={{ paddingTop: "150px" }}>
          <Typography sx={{ fontWeight: "700", fontSize: "24px", mt: "24px" }}>
            {product.name}
          </Typography>
          <Typography
            sx={{
              color: "#d84339",
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "18px" },
              mt: "34px",
            }}
          >
            Price: {product.price}
          </Typography>
          <Grid container direction="column" sx={{ marginTop: "22px" }}>
            <Grid item>
              <Button
                onClick={() => {
                  navigate("/productdetails");
                }}
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: "50px",
                  border: "2px solid #d84339",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                View Details
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "50px",
                  backgroundColor: "#d84339",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "700",
                  mt: "16px",
                }}
              >
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
