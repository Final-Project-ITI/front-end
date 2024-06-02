import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OrderSubmitted from "../popups/OrderSubmitted";
import AddNumber from "../popups/AddNumber";
import AddAdress from "../popups/AddAdress";

function Checkout() {
  const [submitOrderPopUp, setSubmitOrderPopUp] = useState(false);
  const [addNumberPopUp, setAddNumberPopUp] = useState(false);
  const [addAddressPopUp, setAddAddressPopUp] = useState(false);
  const ITEM_HEIGHT = 30;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        // maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP,
        width: 250,
        borderRadius: "15px",
        border: "1px solid #d84339",

        // "&::-webkit-scrollbar": {
        //   width: "5px",
        //   height: "8px",
        //   backgroundColor: "red",
        //   color:"red"
        // },
        // "&.::-webkit-scrollbar-track": {
        //   width: "5px",
        //   height: "8px",
        //   backgroundColor: "red",
        //   color:"red"
        // },
        // "&::-webkit-scrollbar-thumb": {
        //   width: "5px",
        //   height: "8px",
        //   backgroundColor: "red",
        //   color:"red"
        // }
      },
    },
  };
  return (
    <>
      <Container maxWidth="xl" >
        
        {submitOrderPopUp&&<OrderSubmitted setSubmitOrderPopUp={setSubmitOrderPopUp}></OrderSubmitted>}
        {addNumberPopUp&&<AddNumber  setAddNumberPopUp={setAddNumberPopUp}></AddNumber>}
        {addAddressPopUp&&<AddAdress setAddAddressPopUp={setAddAddressPopUp}></AddAdress>}


        
        <Grid
          container
          justifyContent={"space-between"}
          sx={{
            paddingBottom: "60px",
            alignItems: { xs: "center", lg: "start" },
          }}
        >
          <Grid
            item
            xs={12}
            lg={7}
            sx={{
              backgroundColor: "#E8DCCC",
              paddingInline: { xs: "1rem", sm: "2rem", md: "4rem" },
              paddingBlock: "1.5rem",
              borderRadius: "10px",
              marginTop: "3rem",
            }}
          >
            <Stack alignItems={"center"}>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "700",
                  textTransform: "capitalize",
                  marginBottom: "24px",
                }}
              >
                contact info
              </Typography>
              <FormControl fullWidth>
                <Box>
                  <Typography sx={{ color: "#111111BA", fontSize: "18px" }}>
                    Phone Number
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    spacing={2}
                  >
                    <Select
                      MenuProps={MenuProps}
                      sx={{
                        width:"100%",
                        maxWidth: "100%",
                        border: "1px solid #d84339",
                        backgroundColor: "#F3ECE5",
                        borderRadius: "15px",
                        height: "50px",
                      }}
                      id="demo-simple-select"
                      //   value={[3]}
                      //   label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"01020633680"}>01020633680</MenuItem>
                      <MenuItem value={"01020633680"}>01020633680</MenuItem>
                      <MenuItem value={"01020633680"}>01020633680</MenuItem>
                      <MenuItem value={"01020633680"}>01020633680</MenuItem>
                      <MenuItem value={"01020633680"}>01020633680</MenuItem>
                      <MenuItem value={"01020633680"}>01020633680</MenuItem>
                    </Select>
                    <Box
                     onClick={()=>{setAddNumberPopUp(true)}}
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                      <svg
                        width="24"
                        height="30"
                        viewBox="0 0 24 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 16.5259V23.8704H11V16.5259H5L5 14.0778H11L11 6.73336H13L13 14.0778L19 14.0778V16.5259H13Z"
                          fill="#111111"
                        />
                      </svg>
                    </Box>
                  </Stack>
                </Box>
              </FormControl>
              <FormControl fullWidth sx={{marginTop:"8px"}}>
                <Box>
                  <Typography sx={{ color: "#111111BA", fontSize: "18px" }}>
                  Address
                  </Typography>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    spacing={2}
                    sx={{paddingInline:"0px"}}
                  >
                    <Select
                      MenuProps={MenuProps}
                      sx={{
                        width:"100%",
                        border: "1px solid #d84339",
                        backgroundColor: "#F3ECE5",
                        borderRadius: "15px",
                        height: "96px",
                        wordWrap: "break-word",
                        "& MuiSelect-select":{wordWrap: "break-word"}
                        
                      }}
                      id="demo-simple-select"
                      //   value={[3]}
                      //   label="Age"
                      // onChange={handleChange}
                    >
                      <MenuItem value={"010206,  k,mmmmmmmmmmmmmmmmmmmmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm33680"}>010206,k,mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm33680</MenuItem>
                      <MenuItem value={"01020633680"}>01020633680</MenuItem>
                      <MenuItem value={"01020633680"}>01020633680</MenuItem>
                    </Select>
                    <Box
                     onClick={()=>{setAddAddressPopUp(true)}}
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                      <svg
                        width="24"
                        height="30"
                        viewBox="0 0 24 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 16.5259V23.8704H11V16.5259H5L5 14.0778H11L11 6.73336H13L13 14.0778L19 14.0778V16.5259H13Z"
                          fill="#111111"
                        />
                      </svg>
                    </Box>
                  </Stack>
                </Box>
              </FormControl>
            </Stack>
          </Grid>
          {
            <Grid
              item
              xs={12}
              md={7}
              lg={4}
              sx={{
                marginTop: "3rem",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#E8DCCC",
                  paddingBlock: "32px",
                  borderRadius: "10px",
                  height: "243px",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  sx={{
                    paddingInline: { xs: "1.5rem", sm: "3rem", md: "1rem" },
                  }}
                >
                  <Stack>
                    <Typography
                      sx={{
                        color: "#00000069",
                        fontSize: { xs: "18px", sm: "20px" },
                      }}
                    >
                      Sub Total:
                    </Typography>
                    <Typography
                      sx={{
                        color: "#00000069",
                        fontSize: { xs: "18px", sm: "20px" },
                      }}
                    >
                      vat:
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography
                      sx={{
                        color: "#00000069",
                        fontSize: { xs: "18px", sm: "20px" },
                      }}
                    >
                      EGP 120
                    </Typography>
                    <Typography
                      sx={{
                        color: "#00000069",
                        fontSize: { xs: "18px", sm: "20px" },
                      }}
                    >
                      EGP 10
                    </Typography>
                  </Stack>
                </Stack>
                <Divider color={"black"} sx={{ marginBlock: "18px" }} />
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  sx={{
                    paddingInline: { xs: "1.5rem", sm: "3rem", md: "1rem" },
                  }}
                >
                  <Stack>
                    <Typography sx={{ fontSize: { xs: "24px", sm: "28px" } }}>
                      Total
                    </Typography>
                    <Typography
                      sx={{
                        color: "#00000069",
                        marginTop: "14px",
                        fontSize: { xs: "18px", sm: "20px" },
                      }}
                    >
                      Including vat
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: { xs: "20px", sm: "24px" } }}>
                      EGP 130
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          }
          {<Grid item xs={0} lg={8} />}
          {
            <Grid item xs={12} md={4}>
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "50px",
                  marginBlock: "32px",
                  color: "black",
                  height: { xs: "54px", sm: "64px" },
                  fontSize: { xs: "18px", sm: "24px" },
                  fontWeight: "700",
                }}
              >
                Add more items
              </Button>
              <Button
                sx={{
                  width: "100%",
                  borderRadius: "50px",
                  height: { xs: "54px", sm: "64px" },
                  fontSize: { xs: "18px", sm: "24px" },
                  fontWeight: "700",
                }}
                variant="contained"
                color="primary"
                onClick={()=>{setSubmitOrderPopUp(true)}}
              >
                checkout
              </Button>
            </Grid>
          }
        </Grid>
      </Container>
    </>
  );
}

export default Checkout;
