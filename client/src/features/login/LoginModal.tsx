import { Box } from "@mui/material";
import LoginBottomHalf from "./LoginBottomHalf";
import LoginUpperHalf from "./LoginUpperHalf";

const LoginModal = () => {
  return (
    <Box
      display={"flex"}
      width={0.63}
      margin={"auto"}
      marginBottom={"50px"}
      flexDirection={"column"}
      justifyContent={"center"}
      boxShadow={10}
    >
      <LoginUpperHalf />
      <LoginBottomHalf />
    </Box>
  );
};

export default LoginModal;
