import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useTheme,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  product: {
    name: string;
    image: string;
    price: string;
  };
}

const Product = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    // <Grid
    //   item
    //   xs={12}
    //   sm={8}
    //   lg={4}
    //   xl={3}
    //   container
    //   justifyContent="center"
    //   sx={{
    //     backgroundColor: "green",
    //   }}
    // >
    //   <Card
    //     sx={{
    //       backgroundColor: theme.palette.secondary.main,
    //       borderRadius: "25px",
    //       textAlign: "center",
    //       width: { xs: "70%", sm: "90%", lg: "90%" },
    //       height: "auto",
    //       position: "relative",
    //       overflow: "visible",
    //       paddingBottom: "24px",
    //     }}
    //   >
    //     <CardMedia
    //       component="img"
    //       alt={product.name}
    //       image={product.image}
    //       sx={{
    //         width: { xs: "200px", sm: "250px", md: "300px" },
    //         height: { xs: "200px", sm: "250px", md: "300px" },
    //         border: "10px solid",
    //         borderColor: theme.palette.primary.main,
    //         borderRadius: "50%",
    //         objectFit: "cover",
    //         position: "absolute",
    //         top: { xs: "-100px", sm: "-125px", md: "-150px" },
    //         left: "50%",
    //         transform: "translateX(-50%)",
    //       }}
    //     />
    //     <CardContent sx={{ paddingTop: "150px" }}>
    //       <Typography sx={{ fontWeight: "700", fontSize: "24px", mt: "24px" }}>
    //         {product.name}
    //       </Typography>
    //       <Typography
    //         sx={{
    //           color: "#d84339",
    //           fontWeight: "bold",
    //           fontSize: { xs: "16px", sm: "18px" },
    //           mt: "34px",
    //         }}
    //       >
    //         Price: {product.price}
    //       </Typography>
    //       <Grid container direction="column" sx={{ marginTop: "22px" }}>
    //         <Grid item>
    //           <Button
    //             onClick={() => {
    //               navigate("/productdetails");
    //             }}
    //             variant="outlined"
    //             fullWidth
    //             sx={{
    //               borderRadius: "50px",
    //               border: "2px solid #d84339",
    //               color: "black",
    //               fontSize: "20px",
    //               fontWeight: "700",
    //             }}
    //           >
    //             View Details
    //           </Button>
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Button
    //             variant="contained"
    //             fullWidth
    //             sx={{
    //               borderRadius: "50px",
    //               backgroundColor: "#d84339",
    //               color: "white",
    //               fontSize: "20px",
    //               fontWeight: "700",
    //               mt: "16px",
    //             }}
    //           >
    //             Add To Cart
    //           </Button>
    //         </Grid>
    //       </Grid>
    //     </CardContent>
    //   </Card>
    // </Grid>

    <>
      <Stack
        position={"relative"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#E8DCCC",
          padding: "24px",
          borderRadius: "25px",
          width: { xl: "20%", xs: "300px" },
        }}
      >
        <CardMedia
          component="img"
          alt={product.name}
          image={product.image}
          sx={{
            width: { xs: "200px", sm: "250px", md: "250px" },
            height: { xs: "200px", sm: "250px", md: "250px" },
            border: "10px solid",
            borderColor: theme.palette.primary.main,
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            top: "-25%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Typography sx={{ fontWeight: "700", fontSize: "24px", mt: "159px" }}>
          {product.name}
        </Typography>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Typography
            sx={{
              color: "#d84339",
              fontSize: { xs: "16px", sm: "18px" },
              mt: "34px",
            }}
          >
            Price
          </Typography>

          <Typography
            sx={{
              color: "#d84339",
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "18px" },
              mt: "34px",
            }}
          >
            {product.price}
          </Typography>
        </Stack>

        <Button
          onClick={() => {
            navigate("/productdetails");
          }}
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: "50px",
            border: "2px solid #d84339",
            "&:hover": {
              border: "2px solid #d84339",
            },
            color: "black",
            fontSize: "20px",
            fontWeight: "700",
            mt: "22px",
          }}
        >
          View Details
        </Button>

        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: "50px",
            backgroundColor: "#d84339",
            color: "white",
            fontSize: "20px",
            fontWeight: "700",
            mt: "16px",
          }}
        >
          Add To Cart
        </Button>
      </Stack>
    </>
  );
};

export default Product;
