import img from "../../assets/WhatsApp Image 2024-05-24 at 17.42.33_2e3495d8.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  useTheme,
  Box,
  Grid,
} from "@mui/material";

interface IProps {}
const Ditails = ({}: IProps) => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ padding: "234px 160px", boxSizing: "border-box" }}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} md={5} sx={{ paddingRight: "18px" }}>
            <CardMedia
              component="img"
              image={img}
              alt="Margherita Pizza"
              sx={{
                width: "100%",
                height: "500px",
                borderRadius: "25px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              height: "500px",
              backgroundColor: theme.palette.secondary.main,
              borderRadius: "25px",
              paddingLeft: "25px",
            }}
          >
            <CardContent sx={{ textAlign: "left" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "700",
                  fontSize: "32px",
                  lineHeight: "48px",
                  color: theme.palette.primary.main,
                  mt: "24px",
                }}
              >
                Margherita Pizza
                <Typography
                  variant="h6"
                  color="primary"
                  component="span"
                  sx={{
                    mt: "24px",
                    ml: "390px",
                    fontSize: "32px",
                    fontWeight: "700",
                  }}
                >
                  EGP 80
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: "24px", fontSize: "24px", color: "black" }}
              >
                Experience The True Taste Of Italy With Our Classic Margherita
                Pizza.
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mt: "24px",
                  fontSize: "32px",
                  fontWeight: "700",
                  color: theme.palette.primary.main,
                }}
              >
                Ingredients:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "8px", fontSize: "24px", color: "black" }}
              >
                - Fresh Tomato Sauce
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "8px", fontSize: "24px", color: "black" }}
              >
                - Mozzarella Cheese
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "8px", fontSize: "24px", color: "black" }}
              >
                - Touch Of Basil
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: "60px",
                  ml: "120px",
                  width: "577px",
                  height: "64px",
                  borderRadius: "50px",
                  padding: "10px",
                  gap: "10px",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                <ShoppingCartIcon />
                Add To Cart
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Ditails;
