import { Box, Grid, Typography } from "@mui/material";

interface IProps {}
const About = ({}: IProps) => {
  return (
    <>
      <Grid item xs={12} sx={{ width: "100%", marginTop: "48px" }}>
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", fontSize: "32px", mb: "8px" }}
          >
            About
          </Typography>
          <Typography sx={{ fontWeight: "400", fontSize: "24px", mb: "16px" }}>
            A specialized pies and pizza restaurant
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", fontSize: "32px", mb: "8px" }}
          >
            Address
          </Typography>
          <Typography sx={{ fontWeight: "400", fontSize: "24px", mb: "16px" }}>
            Ammar Ibn Yasser St, Al villal, Zagazig
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", fontSize: "32px", mb: "8px" }}
          >
            Phone number
          </Typography>
          <Typography sx={{ fontWeight: "400", fontSize: "24px" }}>
            01124095409
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default About;
