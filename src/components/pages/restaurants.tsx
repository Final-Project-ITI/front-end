import React, { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
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

const itemsInPage = 8;

export default function Restaurants() {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage(
      (prevPage) => (prevPage + 1) % Math.ceil(images.length / itemsInPage)
    );
  };

  const handlePrev = () => {
    setPage(
      (prevPage) =>
        (prevPage - 1 + Math.ceil(images.length / itemsInPage)) %
        Math.ceil(images.length / itemsInPage)
    );
  };

  const startIndex = page * itemsInPage;
  const endIndex = startIndex + itemsInPage;
  const currentItems = images.slice(startIndex, endIndex);

  return (
    <div>
      <Stack
        height={"400px"}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ minHeight: "500px", background: "#F9F1E5" }}
      >
        <Box
          sx={{
            backgroundImage: `url(${img})`,
            width: "250px",
            height: "320px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
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
          }}
        ></Box>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "800px", background: "#f3ece4" }}
        spacing={4}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "#f3ece4",
            minHeight: "400px",
            flexWrap: "wrap",
            paddingInline: { lg: "10%" },
          }}
          spacing={4}
        >
          {currentItems.map((imageUrl, index) => (
            <div key={index} className="card">
              <div className="image-wrapper">
                <img src={imageUrl} alt={`Image ${index}`} />
              </div>
              <div className="text-wrapper">
                <Typography variant="h6">
                  {restaurantNames[startIndex + index]}
                </Typography>
                <button className="bb2">
                  <Link to="/menu" id="sign-link" className="log4">
                    View Menu
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button onClick={handlePrev} sx={{ fontSize: "2rem" }}>
            &larr;
          </Button>
          <Typography variant="h6">
            {page + 1} / {Math.ceil(images.length / itemsInPage)}
          </Typography>
          <Button onClick={handleNext} sx={{ fontSize: "2rem" }}>
            &rarr;
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
