import { Card, CardMedia, Grid, Box, Button } from "@mui/material";
import img from "../../assets/WhatsApp Image 2024-05-24 at 17.42.05_1ebcada5.jpg";

interface IProps {}

const restaurantInfo = {
  items: [
    { name: "Pizza", image: img },
    { name: "Kiri Pie", image: img },
    { name: "Roll Pie", image: img },
    { name: "Pies", image: img },
    { name: "Pizza Cake", image: img },
    { name: "Sweet Pie", image: img },
  ],
};

const Section = ({}: IProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#E8DCCC",
        width: "100%",
        height: "252px",
        borderRadius: "25px",
        mt: "70px",
        mb: "123px",
      }}
    >
      <Grid sx={{ paddingTop: "15px" }}>
        <Grid container spacing={6} justifyContent="center">
          {restaurantInfo.items.map((item, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  width: "152px",
                  height: "224px",
                  gap: "0px",
                  opacity: "0.88px",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    height: "152px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    mb: "5px",
                  }}
                />
                <Box
                  sx={{
                    textAlign: "center",
                    padding: "0",
                  }}
                >
                  <Button
                    sx={{
                      fontWeight: "700",
                      height: "64px",
                      fontSize: "20px",
                      color: "black",
                      transition: "background-color 0.3s",
                      "&:hover": {
                        backgroundColor: "#D74339",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
