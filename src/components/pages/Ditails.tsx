import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IProduct } from "../../models/product.model";
import axios from "../../api/axios";
import CartContext from "../../context/CartProvider";

interface IProps {}

const Details = ({}: IProps) => {
  const theme = useTheme();
  const location = useLocation();
  const [productdetails, setProductDetails] = useState<IProduct>({
    _id: "",
    description: "",
    icon: "",
    ingredientsIds: [],
    menuCategoryId: {
      _id: "",
      icon: "",
      name: "",
      restaurantId: "",
    },
    price: 0,
    restaurantId: "",
    title: "",
  });
  const { setCartItems, setCartQuantity } = useContext(CartContext);
  const [showMore, setShowMore] = useState(false);

  const handleAddItemToCart = async (productId: string) => {
    try {
      const res = await axios.post(
        "/api/v1/cart",
        {
          productId,
          quantity: 1,
        },
        {
          headers: { jwt: localStorage.getItem("token") },
        }
      );
      setCartItems(res.data.itemsIds);
      setCartQuantity((pre: number) => ++pre);
    } catch (e) {}
  };

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
        spacing={0}
        sx={{ height: "100%" }}
      >
        <Grid
          item
          xs={12}
          xl={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
            margin: { xl: "0 20px 0 0", xs: "20px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              borderRadius: "25px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "600px",
            }}
          >
            <CardMedia
              component="img"
              image={productdetails?.icon}
              alt="Margherita Pizza"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          xl={6}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "25px",
            padding: { xs: "20px", md: "25px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "600px",
            overflowY: "auto",
          }}
        >
          <CardContent
            sx={{
              textAlign: "left",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
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
              <Box
                sx={{ mt: { xs: "16px", md: "24px" }, position: "relative" }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "16px", md: "24px" },
                    color: "black",
                    display: "-webkit-box",
                    WebkitLineClamp: showMore ? "none" : 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {productdetails?.description}
                </Typography>
                {productdetails.description.length > 100 && (
                  <Button
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.primary.main,
                      padding: "4px 8px",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "See Less" : "See More"}
                  </Button>
                )}
              </Box>
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
              <Box
                sx={{
                  mt: "8px",
                  pr: "8px",
                }}
              >
                <Grid container spacing={2}>
                  {productdetails?.ingredientsIds.map((ingredient, index) => (
                    <Grid item xs={6} key={index}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: "16px", md: "24px" },
                          color: "black",
                        }}
                      >
                        - {ingredient.name}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
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
                onClick={() => handleAddItemToCart(productdetails?._id)}
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

export default Details;
