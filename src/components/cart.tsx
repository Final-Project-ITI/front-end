import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import img from "../assets/images/2da114b4-ecdf-41b8-a60b-b16cd5da3ae8.jpg";
// import "../../styles/home.css";

export default function Card() {
  return (
    <div>
      <Box
        sx={{
          minHeight: "400px",
          backgroundColor: "white",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          noWrap
          sx={{
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "black",
            textAlign: "center",
            position: "relative",
            top: "-20px",
          }}
        >
          Wy Us
        </Typography>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "800px", background: "white" }}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            position="relative"
            top="-60px"
            sx={{ background: "white", minHeight: "400px" }}
            spacing={10}
          >
            <Stack justifyContent="center" alignItems="center" spacing={1}>
              <Box
                sx={{
                  backgroundImage: `url(${img})`,
                  width: "250px",
                  height: "250px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontWeight: 700,
                  //   letterSpacing: ".3rem",
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  top: "20px",
                }}
              >
                Wide Selection
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  top: "20px",
                }}
              >
                Explore a diverse range <br />
                of cuisines and dishes
                <br /> to satisfy any craving.
              </Typography>
            </Stack>
            <Stack justifyContent="center" alignItems="center" spacing={1}>
              <Box
                sx={{
                  backgroundImage: `url(${img})`,
                  width: "250px",
                  height: "250px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontWeight: 700,
                  //   letterSpacing: ".3rem",
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  top: "20px",
                }}
              >
                Fresh ingredients
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  top: "20px",
                }}
              >
                Experience the vibrant taste <br />
                of fresh ingredients in every <br />
                bite.
              </Typography>
            </Stack>
            <Stack justifyContent="center" alignItems="center" spacing={1}>
              <Box
                sx={{
                  backgroundImage: `url(${img})`,
                  width: "250px",
                  height: "250px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontWeight: 700,
                  //   letterSpacing: ".3rem",
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  top: "20px",
                }}
              >
                Exceptional Service
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  top: "20px",
                  //   left: "-20px",
                }}
              >
                Our dedicated team is <br /> committed to providing
                <br /> excellent service.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}
