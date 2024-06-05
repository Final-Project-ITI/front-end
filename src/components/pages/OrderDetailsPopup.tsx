import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import img from "../../assets/WhatsApp Image 2024-05-24 at 17.42.05_1ebcada5.jpg";

interface OrderDetailsPopupProps {
  open: boolean;
  handleClose: () => void;
}

const OrderDetailsPopup = ({ open, handleClose }: OrderDetailsPopupProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const orderItems = [
    { image: img, name: "Chicken BBQ Pizza", qty: 1, price: 120 },
    { image: img, name: "Chicken Pizza", qty: 2, price: 120 },
    { image: img, name: "Chicken Pizza", qty: 2, price: 120 },
    { image: img, name: "Cheese Pizza", qty: 1, price: 80 },
    { image: img, name: "Cheese Pizza", qty: 1, price: 80 },
    { image: img, name: "Cheese Pizza", qty: 1, price: 80 },
    { image: img, name: "Cheese Pizza", qty: 1, price: 80 },
    { image: img, name: "Cheese Pizza", qty: 1, price: 80 },
  ];

  const totalQty = orderItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = orderItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          width: isSmallScreen ? "100%" : "528px",
          height: isSmallScreen ? "100%" : "435px",
          backgroundColor: "#F3ECE5",
          borderRadius: isSmallScreen ? "0px" : "25px",
        },
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: "28px", mt: isSmallScreen ? "12px" : "24px" }}
          >
            Order Details
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              left: "3px",
              top: "1px",
              color: "#D7433980",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <TableContainer
          sx={{
            maxHeight: isSmallScreen ? "calc(100vh - 200px)" : "236px",
            direction: "rtl",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
            },
          }}
        >
          <Table sx={{ direction: "ltr" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    color: "#D7433980",
                    borderBottom: "none",
                    fontSize: "20px",
                    fontWeight: "400",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#F3ECE5",
                    zIndex: 1,
                  }}
                >
                  Item
                </TableCell>
                <TableCell
                  sx={{
                    color: "#D7433980",
                    borderBottom: "none",
                    fontSize: "20px",
                    fontWeight: "400",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#F3ECE5",
                    zIndex: 1,
                  }}
                >
                  Qty
                </TableCell>
                <TableCell
                  sx={{
                    color: "#D7433980",
                    borderBottom: "none",
                    fontSize: "20px",
                    fontWeight: "400",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#F3ECE5",
                    zIndex: 1,
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{
                    color: "#D7433980",
                    borderBottom: "none",
                    fontSize: "20px",
                    fontWeight: "400",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#F3ECE5",
                    zIndex: 1,
                  }}
                >
                  Total
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ borderBottom: "none" }}>
                    <Box
                      display="flex"
                      alignItems="center"
                      sx={{ width: "202px", mb: "-16px" }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "41px",
                          height: "40px",
                          marginRight: 8,
                        }}
                      />
                      <Typography sx={{ fontSize: "16px" }}>
                        {item.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "60px",
                      padding: "0px",
                      textAlign: "center",
                      borderBottom: "none",
                      fontSize: "16px",
                    }}
                  >
                    {item.qty}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "60px",
                      padding: "0px",
                      textAlign: "center",
                      borderBottom: "none",
                      fontSize: "16px",
                    }}
                  >
                    EGP {item.price}
                  </TableCell>
                  <TableCell
                    sx={{
                      width: "60px",
                      padding: "0px",
                      textAlign: "center",
                      borderBottom: "none",
                      fontSize: "16px",
                    }}
                  >
                    EGP {item.price * item.qty}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          flexWrap={isSmallScreen ? "wrap" : "nowrap"}
        >
          <Box
            sx={{
              ml: isSmallScreen ? "0px" : "20px",
              mb: isSmallScreen ? 2 : 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                textAlign: isSmallScreen ? "center" : "left",
              }}
            >
              Total
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              EGP {totalPrice}
            </Typography>
          </Box>
          <Box
            sx={{
              ml: isSmallScreen ? "0px" : "90px",
              mb: isSmallScreen ? 2 : 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                textAlign: isSmallScreen ? "center" : "left",
              }}
            >
              Qty
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              {totalQty}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                textAlign: isSmallScreen ? "center" : "left",
              }}
            >
              Price
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              EGP {totalPrice}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsPopup;
