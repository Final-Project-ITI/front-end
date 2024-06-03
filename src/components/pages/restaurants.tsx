import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../styles/restaurant.css";
import img from "../../assets/images/21.png";
import img2 from "../../assets/images/22.png";
import img3 from "../../assets/images/elsraya.jpg";
import img4 from "../../assets/images/x&o.jpg";
import img5 from "../../assets/images/chq.jpg";
import img6 from "../../assets/images/nour-elsham.jpg";
import img7 from "../../assets/images/soy-soshi.jpg";
import img8 from "../../assets/images/baba-awad.jpg";
import img9 from "../../assets/images/wagdy.jpg";
import img10 from "../../assets/images/hi-proust.jpg";

const images = [img3, img4, img5, img6, img7, img8, img9, img10];
const restaurantNames = [
  "Al Saraya",
  "XO burger",
  "Chicken Hills",
  "Nour Elsham",
  "soy sushi",
  "Baba Awad",
  "Wagdy Elsham",
  "HI proust",
];

export default function Restaurants() {
  return (
    <div>
      <Stack
        height={"400px"}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "500px", background: "#F9F1E5" }}
        spacing={30}
      >
        <Box
          sx={{
            backgroundImage: `url(${img})`,
            width: "250px",
            height: "320px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            border: "5px",
            borderRadius: "1%",
          }}
        ></Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={4}
          position={"relative"}
          top={"-40px"}
        >
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontWeight: 700,
              color: "black",
              textAlign: "center",
              position: "initial",
              bottom: "10px",
            }}
          >
            Order from your favorite restaurants now!
          </Typography>
        </Stack>

        <Box
          sx={{
            backgroundImage: `url(${img2})`,
            width: "200px",
            height: "300px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            position: "relative",
            bottom: "20px",
            // border: "5px",
            // borderRadius: "1%",
          }}
        ></Box>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "800px", background: "white" }}
        spacing={4}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ background: "white", minHeight: "400px" }}
          spacing={4}
        >
          {images.slice(0, 4).map((imageUrl, index) => (
            <div key={index} className="card">
              <div className="image-wrapper">
                <img src={imageUrl} alt={`Image ${index}`} />
              </div>
              <div className="text-wrapper">
                <Typography variant="h6">{restaurantNames[index]}</Typography>
                <button className="bb2">
                  <Link to="/restaurant" id="sign-link" className="log4">
                    View Menu
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ background: "white", minHeight: "400px" }}
          spacing={4}
        >
          {images.slice(4).map((imageUrl, index) => (
            <div key={index} className="card">
              <div className="image-wrapper">
                <img src={imageUrl} alt={`Image ${index + 4}`} />
              </div>
              <div className="text-wrapper">
                <Typography variant="h6">
                  {restaurantNames[index + 4]}
                </Typography>
                <button className="bb2">
                  <Link to="/restaurant" id="sign-link" className="log4">
                    View Menu
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
