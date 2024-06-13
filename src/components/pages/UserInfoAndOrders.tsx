import {
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
  Box,
} from "@mui/material";
import OrderDetailsPopup from "./OrderDetailsPopup";
import React from "react";

const UserInfoAndOrders = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container marginBlock={"100px"} justifyContent={"center"}>
      <Grid
        item
        xs={12}
        xl={7}
        margin={{ xl: "0 20px 0 0", xs: "20px" }}
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "25px",
          padding: { xs: "20px", md: "25px" },
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "24px", md: "26px" },
          }}
        >
          User Info
        </Typography>
        {[
          "Full Name",
          "Phone Number",
          "Second Phone No (Optional)",
          "E-Mail",
        ].map((label, index) => (
          <Box key={index} sx={{ mb: { xs: "10px", md: "19px" } }}>
            <Typography
              variant="body1"
              gutterBottom
              fontSize={{ xs: "18px", md: "20px" }}
              sx={{ mb: "10px" }}
            >
              {label}
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  backgroundColor: "#F3ECE5",
                  "& fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
          </Box>
        ))}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "100%", md: "256px" },
              height: "54px",
              borderRadius: "50px",
              mt: "27px",
              mb: "32px",
              fontSize: { xs: "16px", md: "16px" },
            }}
          >
            Edit User Info
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        xl={3}
        margin={{ xl: "0 20px 0 0", xs: "20px" }}
        sx={{
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "25px",
          padding: { xs: "20px", md: "25px" },
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: { xs: "20px", md: "30px" },
            mt: "32px",
            fontSize: { xs: "24px", md: "28px" },
          }}
        >
          Orders
        </Typography>
        <Box
          sx={{
            width: "100%",
            padding: "32px",
            backgroundColor: "#F3ECE5",
            borderRadius: "10px",
          }}
        >
          {["Al Saraya", "Ox Bu Rger"].map((order, index) => (
            <Typography
              variant="body1"
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: index === 0 ? "4px" : "10px",
                fontSize: { xs: "18px", md: "20px" },
                backgroundColor:
                  index === 1 ? theme.palette.primary.main : "transparent",
                borderRadius: "5px",
                padding: "0px 5px",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              <span>{order}</span>
              <span>EGP 440</span>
            </Typography>
          ))}
        </Box>
      </Grid>
      <OrderDetailsPopup open={open} handleClose={handleClose} />
    </Grid>
  );
};

export default UserInfoAndOrders;
