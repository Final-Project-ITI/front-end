import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import item from "../../models/Item";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:3000/api/v1";

function Cart({
  cartItems,
  cartQuantity,
  cartTotal,
  editItemQuantity,
  deleteItemQuantity
}: {
  cartItems: item[];
  cartQuantity: number;
  cartTotal: number;
  editItemQuantity: (itemId: string, newQuantity: number) => void;
  deleteItemQuantity: (itemId: string) => void;
}) {
  const navigate = useNavigate();
  const vat = 10;

  const handleDeleteItem=(item:any)=>{
    deleteItemQuantity(item.productId._id)

    const fetchDeleteItem = async () => {
      const res = await axios.delete(
        url + "/cart/"+item._id,
        {
          headers: { jwt: localStorage.getItem("token") },
        }
      );
      
      
    };
    fetchDeleteItem()
    
  }

  const handleEditItemQuantity=(item:any,newQuantity:number)=>{
    if (item.quantity + newQuantity < 0) {
      return;
    } else if (item.quantity + newQuantity === 0) {
       handleDeleteItem(item);
      return;
    }
    editItemQuantity(item.productId._id, newQuantity)
    const fetchEditItemQuantity = async () => {
      const res = await axios.patch(
        url + "/cart/"+item._id,
        {
          quantity: item.quantity+newQuantity,
        },
        {
          headers: { jwt: localStorage.getItem("token") },
        }
      );
      console.log(res)
     

    };
    fetchEditItemQuantity()
  }
  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent={"space-between"}
          sx={{
            paddingBottom: "60px",
            alignItems: { xs: "center", lg: "start" },
          }}
        >
          <Grid
            item
            xs={12}
            lg={cartQuantity === 0 ? 12 : 7}
            sx={{
              backgroundColor: "#E8DCCC",
              paddingInline:
                cartQuantity == 0
                  ? { xs: "1rem", sm: "2rem", md: "4rem" }
                  : { xs: "1rem", sm: "2rem", md: "4rem" },
              paddingBlock: "1.5rem",
              borderRadius: cartQuantity != 0 ? "10px" : "0",
              marginTop: "3rem",
              boxShadow: cartQuantity != 0 ? "10" : "0",
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{ gap: { xs: 2.5, md: 4 } }}
              >
                <Typography
                  sx={{ fontSize: { xs: "32px", md: "40px" } }}
                  fontWeight={700}
                  color={"primary"}
                >
                  Cart
                </Typography>
                <Stack
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{
                    height: { xs: "32px", md: "38px" },
                    width: { xs: "32px", md: "38px" },
                    borderRadius: "50%",
                    bgcolor: "black",
                    color: "white",
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                  }}
                >
                  {cartQuantity}
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                  paddingRight: { sm: "1rem", md: "2rem" },
                  gap: { xs: 3.5, sm: 4, md: 6 },
                }}
              >
                <Typography
                  sx={{
                    color: "#00000069",
                    fontSize: { xs: "24px", sm: "28px", md: "32px" },
                  }}
                >
                  Qty
                </Typography>
                <Typography
                  sx={{
                    color: "#00000069",
                    fontSize: { xs: "24px", sm: "28px", md: "32px" },
                  }}
                >
                  Total
                </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ marginTop: "32px" }}>
              {cartQuantity === 0 && (
                <Stack>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      marginBlock: "1rem 4rem",
                      textAlign: "center",
                    }}
                  >
                    There are no items in your cart
                  </Typography>
                </Stack>
              )}

              {cartItems.map((item) => (
                <Stack
                  key={item.productId._id}
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{ marginBottom: "10px" }}
                >
                  <Box sx={{ height: { xs: "38px", sm: "50px", md: "64px" } }}>
                    <img height={"100%"} src={item.productId.icon?item.productId.icon:"https://www.dirtyapronrecipes.com/wp-content/uploads/2015/10/food-placeholder.png"} />
                  </Box>
                  <Typography
                    title={item.productId.title}
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "1.2rem", md: "24px" },
                    }}
                  >
                    {item.productId.title}
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{ gap: { xs: 2, sm: 2.2, md: 3 } }}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      sx={{ gap: { xs: 0.1, sm: 0.5, md: 1.5 } }}
                      justifyContent={"space-between"}
                    >
                      <Box
                        sx={{
                          "&:hover": { cursor: "pointer" },
                          height: { xs: "25px", sm: "30px", md: "40px" },
                          width: { xs: "25px", sm: "30px", md: "40px" },
                        }}
                        onClick={() => handleEditItemQuantity(item, -1)}
                      >
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 3.75C11.04 3.75 3.75 11.04 3.75 20C3.75 28.96 11.04 36.25 20 36.25C28.96 36.25 36.25 28.96 36.25 20C36.25 11.04 28.96 3.75 20 3.75ZM20 6.25C27.6087 6.25 33.75 12.3913 33.75 20C33.75 27.6087 27.6087 33.75 20 33.75C12.3913 33.75 6.25 27.6087 6.25 20C6.25 12.3913 12.3913 6.25 20 6.25ZM12.5 18.75V21.25H27.5V18.75H12.5Z"
                            fill="#E4002B"
                          />
                        </svg>
                      </Box>

                      <Typography
                        sx={{
                          fontSize: { xs: "0.8rem", sm: "1.2rem", md: "24px" },
                        }}
                      >
                        {item.quantity}
                      </Typography>
                      <Box
                        sx={{
                          "&:hover": { cursor: "pointer" },
                          height: { xs: "25px", sm: "30px", md: "40px" },
                          width: { xs: "25px", sm: "30px", md: "40px" },
                        }}
                        onClick={() =>handleEditItemQuantity(item, 1) }
                      >
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 3.75C11.04 3.75 3.75 11.04 3.75 20C3.75 28.96 11.04 36.25 20 36.25C28.96 36.25 36.25 28.96 36.25 20C36.25 11.04 28.96 3.75 20 3.75ZM20 6.25C27.6087 6.25 33.75 12.3913 33.75 20C33.75 27.6087 27.6087 33.75 20 33.75C12.3913 33.75 6.25 27.6087 6.25 20C6.25 12.3913 12.3913 6.25 20 6.25ZM18.75 12.5V18.75H12.5V21.25H18.75V27.5H21.25V21.25H27.5V18.75H21.25V12.5H18.75Z"
                            fill="#E4002B"
                          />
                        </svg>
                      </Box>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "1.2rem", md: "24px" },
                        fontWeight: "700",
                      }}
                    >
                      EGP {item.quantity * item.productId.price}{" "}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Grid>
          {cartQuantity > 0 && (
            <Grid
              item
              xs={12}
              md={12}
              lg={4}
              sx={{
                marginTop: "3rem",
              }}
            >
              <Grid container justifyContent={"space-between"}>
                <Grid item xs={12} md={7} lg={12}>
                  <Box
                    sx={{
                      backgroundColor: "#E8DCCC",
                      paddingBlock: "32px",
                      borderRadius: cartQuantity != 0 ? "10px" : "0",
                      height: "243px",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      sx={{
                        paddingInline: { xs: "1.5rem", sm: "3rem", md: "1rem" },
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{
                            color: "#00000069",
                            fontSize: { xs: "18px", sm: "20px" },
                          }}
                        >
                          Sub Total:
                        </Typography>
                        <Typography
                          sx={{
                            color: "#00000069",
                            fontSize: { xs: "18px", sm: "20px" },
                          }}
                        >
                          vat:
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography
                          sx={{
                            color: "#00000069",
                            fontSize: { xs: "18px", sm: "20px" },
                          }}
                        >
                          EGP {cartTotal}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#00000069",
                            fontSize: { xs: "18px", sm: "20px" },
                          }}
                        >
                          EGP {vat}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Divider color={"black"} sx={{ marginBlock: "18px" }} />
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      sx={{
                        paddingInline: { xs: "1.5rem", sm: "3rem", md: "1rem" },
                      }}
                    >
                      <Stack>
                        <Typography
                          sx={{ fontSize: { xs: "24px", sm: "28px" } }}
                        >
                          Total
                        </Typography>
                        <Typography
                          sx={{
                            color: "#00000069",
                            marginTop: "14px",
                            fontSize: { xs: "18px", sm: "20px" },
                          }}
                        >
                          Including vat
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography
                          sx={{ fontSize: { xs: "20px", sm: "24px" } }}
                        >
                          EGP {cartTotal + vat}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4} lg={12}>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      borderRadius: "50px",
                      marginBlock: "32px",
                      color: "black",
                      height: { xs: "54px", sm: "64px" },
                      fontSize: { xs: "18px", sm: "24px" },
                      fontWeight: "700",
                    }}
                  >
                    Add more items
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("/checkout");
                    }}
                    sx={{
                      width: "100%",
                      borderRadius: "50px",
                      height: { xs: "54px", sm: "64px" },
                      fontSize: { xs: "18px", sm: "24px" },
                      fontWeight: "700",
                    }}
                    variant="contained"
                    color="primary"
                  >
                    checkout
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Cart;
