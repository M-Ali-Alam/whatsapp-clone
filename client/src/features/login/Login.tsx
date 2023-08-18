import { Box } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SHADE_BLACK, TEAL_GREEN_DARK } from "../../constants/Color";
import { CLIENT_ID } from "../../constants/miscellaneous";
import LoginModal from "./LoginModal";

const Login = () => {
  return (
    <Box bgcolor={SHADE_BLACK} height={"135vh"}>
      <Box position={"absolute"} paddingTop={15} width={1} margin={"0 auto"}>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <LoginModal />
        </GoogleOAuthProvider>
      </Box>
      <Box bgcolor={TEAL_GREEN_DARK} height={222}></Box>
      <Box bgcolor={SHADE_BLACK}></Box>
    </Box>
  );
};

export default Login;
