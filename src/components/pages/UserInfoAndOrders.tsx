import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import OrderDetailsPopup from "./OrderDetailsPopup";
import React from "react";

const UserInfoAndOrders = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        padding: "234px 170px",
      }}
    >
      <Grid container spacing={0}>
        <Grid
          item
          width={1050}
          xs={12}
          md={8}
          sx={{
            height: "680px",
            padding: "0px 50px",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "25px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: "39px",
              mt: "32px",
              fontSize: "26px",
            }}
          >
            User Info
          </Typography>
          <Box sx={{ mb: "19px" }}>
            <Typography
              variant="body1"
              gutterBottom
              fontSize={"20px"}
              sx={{ mb: "10px" }}
            >
              Full Name
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
          <Box sx={{ mb: "19px" }}>
            <Typography
              variant="body1"
              gutterBottom
              fontSize={"20px"}
              sx={{ mb: "10px" }}
            >
              Phone Number
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
          <Box sx={{ mb: "19px" }}>
            <Typography
              variant="body1"
              gutterBottom
              fontSize={"20px"}
              sx={{ mb: "10px" }}
            >
              Second Phone No (Optional)
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
              color="primary"
            />
          </Box>
          <Box sx={{ mb: "19px" }}>
            <Typography
              variant="body1"
              gutterBottom
              fontSize={"20px"}
              sx={{ mb: "10px" }}
            >
              E-Mail
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
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "256px",
                height: "54px",
                borderRadius: "50px",
                mt: "27px",
                mb: "32px",
                fontSize: "16px",
              }}
            >
              Edit User Info
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          width={500}
          xs={12}
          md={4}
          sx={{
            height: "680px",
            padding: "0px 50px",
            backgroundColor: theme.palette.secondary.main,
            borderRadius: "25px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 3,
              mt: "32px",
              fontSize: "28px",
            }}
          >
            Orders
          </Typography>
          <Box
            sx={{
              width: "404",
              height: "456px",
              padding: "32px",
              backgroundColor: "#F3ECE5",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "4px",
                fontSize: "20px",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "5px",
                padding: "0px 5px",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              <span>Al Saraya</span>
              <span>EGP 440</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "10px",
                fontSize: "20px",
                padding: "0px 5px",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              <span>Ox Bu Rger</span>
              <span>EGP 440</span>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <OrderDetailsPopup open={open} handleClose={handleClose} />
    </Box>
  );
};

export default UserInfoAndOrders;
