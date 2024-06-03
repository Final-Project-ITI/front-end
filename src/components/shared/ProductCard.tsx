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
    <Grid item xs={12} sm={6} md={6} lg={3} container justifyContent="center">
      <Card
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "25px",
          textAlign: "center",
          width: { xs: "90%", sm: "90%", md: "100%", lg: "100%" },
          height: "445px",
          position: "relative",
          overflow: "visible",
          mt: { xs: 0, sm: 0, md: -2 },
          mb: { xs: "200px", sm: "200px", md: "200px" },
        }}
      >
        <CardMedia
          component="img"
          alt={product.name}
          image={product.image}
          sx={{
            width: { xs: "300px", sm: "300px", md: "320px" },
            height: { xs: "300px", sm: "300px", md: "320px" },
            border: "10px solid",
            borderColor: theme.palette.primary.main,
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            top: "-150px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <CardContent sx={{ paddingTop: "250px" }}>
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
