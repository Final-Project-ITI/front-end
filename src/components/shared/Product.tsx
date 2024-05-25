import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useTheme,
  Button,
} from "@mui/material";

interface ProductProps {
  product: {
    name: string;
    image: string;
    price: string;
  };
}

const Product = ({ product }: ProductProps) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={3} sx={{ padding: 0 }}>
      <Card
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "25px",
          padding: 2,
          paddingTop: 3,
          textAlign: "center",
          width: "100%",
          height: "96%",
          position: "relative",
          overflow: "visible",
        }}
      >
        <CardMedia
          component="img"
          alt={product.name}
          image={product.image}
          sx={{
            width: "250px",
            height: "250px",
            border: "8px solid",
            borderColor: theme.palette.primary.main,
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <CardContent sx={{ paddingTop: "150px" }}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#d84339", fontWeight: "bold" }}
          >
            Price: {product.price}
          </Typography>
          <Grid container direction="column" spacing={1} sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: 8,
                  border: "2px solid #d84339",
                  color: "#d84339",
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
                  borderRadius: 8,
                  backgroundColor: "#d84339",
                  color: "white",
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
