import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import logo from "../../../public/main logo.svg";
import "animate.css";

export default function Loading() {
  return (
    <Stack
      position={"fixed"}
      width={"100vw"}
      height={"100vh"}
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box>
       <img className=" loading" src={logo} />
      </Box>
    </Stack>
  );
}
