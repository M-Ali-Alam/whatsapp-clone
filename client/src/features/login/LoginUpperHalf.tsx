import { Box, List, ListItem, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import {
  GREEN_TEXT,
  GREY_TEXT,
  SHADE_BLACK,
  WHITE,
} from "../../constants/Color";
import { QR_CODE_IMAGE } from "../../constants/ImageLinks";

const LoginUpperHalf = () => {
  const onLoginSuccess = (res: any) => {
    const userData = jwtDecode(res.credential);
    console.log(userData);
  };

  const onLoginError = () => {
    console.error("Unexpected error occurred :(");
  };

  return (
    <Box
      bgcolor={WHITE}
      // bgcolor={"red"}
      height={"50%"}
      padding={7}
      paddingBottom={0}
      sx={{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box fontWeight={300} sx={{ fontFamily: "Arial" }}>
          <Typography fontSize={"28px"} fontWeight={300} color={GREY_TEXT}>
            Use WhatsApp on your computer
          </Typography>
          <List
            sx={{
              fontSize: "18px",
              lineHeight: "28px",
              color: grey[700],
              marginTop: "30px",
            }}
          >
            <ListItem disableGutters>1. Open WhatsApp on your phone</ListItem>
            <ListItem disableGutters>
              2. Tap Menu or Settings and select Linked Device
            </ListItem>
            <ListItem disableGutters>3. Tap on Link a device</ListItem>
            <ListItem disableGutters>
              4. Point your phone to this screen to capture the QR code
            </ListItem>
          </List>
        </Box>
        <Box>
          <img
            src={QR_CODE_IMAGE}
            alt="QR code"
            width={"264px"}
            height={"264px"}
          />
          <Box
            zIndex={2}
            sx={{
              position: "absolute",
              top: "25%",
              transform: "translateX(25%) ",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Box>
      <Box marginTop={"20px"}>
        <Box height={"1px"} bgcolor={SHADE_BLACK} />
      </Box>
      <Box
        height={"15vh"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Typography
          justifyContent={"center"}
          alignContent={"center"}
          color={GREEN_TEXT}
          sx={{ textDecoration: "none", fontWeight: 300, fontSize: "18px" }}
        >
          Link with phone number
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginUpperHalf;
