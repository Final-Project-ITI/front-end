import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function SideCart({ cartitems,setOpenSideCart }: { cartitems: number,setOpenSideCart:React.Dispatch<React.SetStateAction<boolean>> }){
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        sx={{
          position: "fixed",
          height: "100vh",
          width: "488px",
          right: "0",
          top: "0",
          zIndex: "300",
          backgroundColor: "#F3ECE5",
          paddingBlock: "45px 146px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Box onClick={()=>setOpenSideCart(false)} sx={{"& :hover":{cursor:"pointer"}}}>
              <svg
                width="49"
                height="55"
                viewBox="0 0 49 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2808 35.6011L31.7194 19.399M17.2808 19.399L31.7194 35.6011"
                  stroke="#E4002B"
                  stroke-opacity="0.38"
                  stroke-width="1.875"
                  stroke-linecap="round"
                />
              </svg>
            </Box>
            <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
              CART DETAILS
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "700", color: "#D74339" }}
            >
              GO TO CART
            </Typography>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                backgroundColor: "black",
                width: "25px",
                height: "28px",
                borderRadius: "100px",
              }}
            >
              <Typography sx={{ color: "white" }}>0</Typography>
            </Stack>
          </Stack>
          {cartitems === 0 && (
            <Typography
              sx={{ fontSize: "16px", color: "#000000CF", marginTop: "45px" }}
            >
              There are no items in your cart
            </Typography>
          )}
          {cartitems > 0 && (
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{
                backgroundColor: "#E8DCCC",
                height: "83px",
                width: "440px",
                marginInline: "auto",
                paddingInline: "8px",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", top: "0.5px", right: "5px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.46387 15.535L15.5359 8.46503L8.46387 15.535ZM8.46387 8.46503L15.5359 15.535L8.46387 8.46503Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M8.46387 15.535L15.5359 8.46503M8.46387 8.46503L15.5359 15.535"
                    stroke="#E4002B"
                    stroke-opacity="0.34"
                    stroke-width="1.875"
                    stroke-linecap="round"
                  />
                </svg>
              </Box>
              <Box sx={{ height: "64px" }}>
                <img
                  height={"100%"}
                  src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d6c392a84e4f665424d710649452e7f9/Derivates/a6bdb196bee23faef1d8020319c7c64750ef7686.jpg"
                />
              </Box>
              <Typography title="Chicken BBQ pizza" sx={{ fontSize: "16px" }}>
                Chicken BBQ pizza
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                }}
              >
                EGP 120{" "}
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{ gap: { xs: 0.1, sm: 0.5, md: 1.5 } }}
                justifyContent={"space-between"}
              >
                <Box
                  sx={{
                    height: "24px",
                    width: "24px",
                  }}
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
                    fontSize: "16px",
                  }}
                >
                  1
                </Typography>
                <Box
                  sx={{
                    height: "24px",
                    width: "24px",
                  }}
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
            </Stack>
          )}
        </Box>
        <Stack
          alignSelf={"center"}
          alignItems={"center"}
          justifyContent={"space-around"}
          direction={"row"}
          sx={{
            width: "424px",
            height: "64px",
            backgroundColor: "#D74339",
            gap: "32px",
            borderRadius: "50px",
          }}
        >
          <Box>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8638 26.455C13.0058 23.023 12.5768 21.308 13.4778 20.154C14.3778 19 16.1478 19 19.6848 19H24.3148C27.8528 19 29.6208 19 30.5218 20.154C31.4228 21.307 30.9938 23.024 30.1358 26.455C29.5898 28.638 29.3178 29.729 28.5038 30.365C27.6898 31 26.5648 31 24.3148 31H19.6848C17.4348 31 16.3098 31 15.4958 30.365C14.6818 29.729 14.4088 28.638 13.8638 26.455Z"
                fill="white"
                stroke="white"
                stroke-width="1.875"
              />
              <path
                d="M29.5 19.5L28.79 16.895C28.516 15.89 28.379 15.388 28.098 15.009C27.8178 14.6325 27.4373 14.3424 27 14.172C26.56 14 26.04 14 25 14M14.5 19.5L15.21 16.895C15.484 15.89 15.621 15.388 15.902 15.009C16.1822 14.6325 16.5627 14.3424 17 14.172C17.44 14 17.96 14 19 14"
                fill="white"
              />
              <path
                d="M29.5 19.5L28.79 16.895C28.516 15.89 28.379 15.388 28.098 15.009C27.8178 14.6325 27.4373 14.3424 27 14.172C26.56 14 26.04 14 25 14M14.5 19.5L15.21 16.895C15.484 15.89 15.621 15.388 15.902 15.009C16.1822 14.6325 16.5627 14.3424 17 14.172C17.44 14 17.96 14 19 14"
                stroke="white"
                stroke-width="1.875"
              />
              <path
                d="M19 14C19 13.7348 19.1054 13.4804 19.2929 13.2929C19.4804 13.1054 19.7348 13 20 13H24C24.2652 13 24.5196 13.1054 24.7071 13.2929C24.8946 13.4804 25 13.7348 25 14C25 14.2652 24.8946 14.5196 24.7071 14.7071C24.5196 14.8946 24.2652 15 24 15H20C19.7348 15 19.4804 14.8946 19.2929 14.7071C19.1054 14.5196 19 14.2652 19 14Z"
                fill="white"
                stroke="white"
                stroke-width="1.875"
              />
            </svg>
          </Box>
          <Typography sx={{ color: "white", fontSize: "16px" }}>
            GO TO CART
          </Typography>

          <Typography sx={{ color: "white", fontSize: "16px" }}>
            120 EGP
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default SideCart;
