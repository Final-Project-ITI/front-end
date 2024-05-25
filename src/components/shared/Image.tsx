import { Grid, CardMedia } from "@mui/material";
import image from "../../assets/WhatsApp Image 2024-05-24 at 17.42.33_2e3495d8.jpg";

interface IProps {}
const Image = ({}: IProps) => {
  return (
    <>
      <Grid>
        <CardMedia
          component="img"
          image={image}
          alt="Placeholder Image"
          sx={{
            width: "100%",
            height: "70vh",
            borderRadius: "10px",
          }}
        />
      </Grid>
    </>
  );
};

export default Image;
