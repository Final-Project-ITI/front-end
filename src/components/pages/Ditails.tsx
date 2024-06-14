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
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct } from "../../models/product.model";

interface IProps {}
const Ditails = ({}: IProps) => {
  const theme = useTheme();
  const location = useLocation();
  const [productdetails, setProductDetails] = useState<IProduct>();

  useEffect(() => {
    setProductDetails(location.state);
  }, []);

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent={"center"}
        marginBlock={"100px"}
      >
        <Grid item xs={12} xl={4} margin={{ xl: "0 20px 0 0", xs: "20px" }}>
          <CardMedia
            component="img"
            image={productdetails?.icon}
            alt="Margherita Pizza"
            sx={{
              width: "100%",
              height: { xs: "auto", md: "500px" },
              borderRadius: "25px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          xl={6}
          margin={{ xl: "0", xs: "0 20px 20px 20px" }}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "25px",
            padding: { xs: "20px", md: "25px" },
            height: { xs: "auto", md: "500px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent sx={{ textAlign: "left" }}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "700",
                  fontSize: { xs: "24px", md: "32px" },
                  lineHeight: { xs: "32px", md: "48px" },
                  color: theme.palette.primary.main,
                }}
              >
                {productdetails?.title}
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                component="span"
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "700",
                  display: { xs: "block", md: "inline" },
                }}
              >
                EGP {productdetails?.price}
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: { xs: "16px", md: "24px" },
                fontSize: { xs: "16px", md: "24px" },
                color: "black",
              }}
            >
              {productdetails?.description}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mt: { xs: "16px", md: "24px" },
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: "700",
                color: theme.palette.primary.main,
              }}
            >
              Ingredients:
            </Typography>
            {productdetails?.ingredientsIds.map((ingredient, index) => (
              <Typography
                variant="body2"
                color="text.secondary"
                key={index}
                sx={{
                  mt: "8px",
                  fontSize: { xs: "16px", md: "24px" },
                  color: "black",
                }}
              >
                - {ingredient.name}
              </Typography>
            ))}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: { xs: "24px", md: "60px" },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: { xs: "100%", md: "577px" },
                  height: "64px",
                  borderRadius: "50px",
                  padding: "10px",
                  gap: "10px",
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: "700",
                }}
              >
                <ShoppingCartIcon />
                Add To Cart
              </Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default Ditails;
