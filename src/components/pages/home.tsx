import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Stack,
  alpha,
  styled,
  InputBase,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../../styles/home.css";
import img from "../../assets/images/11.png";
import img2 from "../../assets/images/12.png";
import img3 from "../../assets/images/elsraya.jpg";
import img4 from "../../assets/images/x&o.jpg";
import img5 from "../../assets/images/chq.jpg";
import img6 from "../../assets/images/nour-elsham.jpg";
import ButtonAppBar from "../navebar";
import Card from "../card";

const images = [img3, img4, img5, img6];
const restaurantNames = [
  "Al Saraya",
  "XO burger",
  "Chicken Hills",
  "Nour Elsham",
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "25px",
  border: "1px solid #d74339",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "gray",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "45ch",
    },
  },
}));

export default function Home() {
  const [searchRest, setSearchRest] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchRest(event.target.value);
  };

  const filteredRestaurants = restaurantNames.filter((name) =>
    name.toLowerCase().includes(searchRest.toLowerCase())
  );

  const filteredImages = images.filter((_, index) =>
    restaurantNames[index].toLowerCase().includes(searchRest.toLowerCase())
  );

  return (
    <div>
      
      <Stack
        height={"400px"}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "500px", background: "#F9F1E5" }}
        spacing={20}
      >
        <Box
          sx={{
            backgroundImage: `url(${img})`,
            width: "300px",
            height: "300px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            border: "5px",
            borderRadius: "20%",
            position: "relative",
            bottom: "20px",
          }}
        ></Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={10}
          position={"relative"}
          top={"-40px"}
        >
          <Typography
            variant="h5"
            noWrap
            sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textAlign: "center",
              position: "initial",
              // bottom: "20px",
            }}
          >
            Order food online in Zagazig
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              value={searchRest}
              onChange={handleSearchChange}
              inputProps={{ "aria-label": "Search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </Stack>

        <Box
          sx={{
            backgroundImage: `url(${img2})`,
            width: "300px",
            height: "300px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            border: "5px",
            borderRadius: "5%",
          }}
        ></Box>
      </Stack>

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
            top: "100px",
          }}
        >
          Restaurants
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
            sx={{ background: "white", minHeight: "400px" }}
            spacing={4}
          >
            {filteredImages.map((imageUrl, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={imageUrl} alt={`Image ${index}`} />
                  </div>
                  <div className="flip-card-back">
                    <Typography variant="h5">
                      {filteredRestaurants[index]}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </Stack>
          <button className="bb">
            <Link to="/restaurant" id="sign-link" className="log3">
              <h3>See More</h3>
            </Link>
          </button>
        </Stack>
        <Box sx={{ marginTop: "40px" }}>
          <Card />
        </Box>
      </Box>
    </div>
  );
}
