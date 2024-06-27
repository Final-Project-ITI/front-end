import React from "react";
import { Box, keyframes } from "@mui/material";
import styled from "@emotion/styled";

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const LoaderContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const Dot = styled(Box)({
  width: "16px",
  height: "16px",
  margin: "0 4px",
  borderRadius: "50%",
  animation: `${bounce} 1.4s infinite ease-in-out both`,
  "&:nth-of-type(1)": {
    backgroundColor: "#ff8a80",
    animationDelay: "-0.32s",
  },
  "&:nth-of-type(2)": {
    backgroundColor: "#ff5252",
    animationDelay: "-0.16s",
  },
  "&:nth-of-type(3)": {
    backgroundColor: "#ff1744",
  },
  "&:nth-of-type(4)": {
    backgroundColor: "#d50000",
    animationDelay: "-0.16s",
  },
  "&:nth-of-type(5)": {
    backgroundColor: "#f44336",
    animationDelay: "-0.32s",
  },
  "&:nth-of-type(6)": {
    backgroundColor: "#b71c1c",
  },
});

const Loader = () => {
  return (
    <LoaderContainer>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </LoaderContainer>
  );
};

export default Loader;
