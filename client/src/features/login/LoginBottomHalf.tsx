import { Box, Link, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { GREEN_TEXT, GREY_TEXT } from "../../constants/Color";
import { LOGIN_FQA_LINK } from "../../constants/miscellaneous";

const LoginBottomHalf = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor={grey[50]}
      height="50%"
      textAlign="center"
      sx={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}
    >
      <Box>
        <Typography
          fontSize={"28px"}
          fontWeight={300}
          color={GREY_TEXT}
          marginTop={"30px"}
          marginBottom={"15px"}
        >
          Tutorial
        </Typography>
        <Link
          href={LOGIN_FQA_LINK}
          color={GREEN_TEXT}
          sx={{ textDecoration: "none", fontWeight: 400, fontSize: "14px" }}
        >
          Need help to get started?
        </Link>
      </Box>
      <Box
        height={"100%"}
        display="flex"
        alignSelf={"center"}
        alignItems="center"
        paddingTop={"40px"}
        paddingBottom={"40px"}
      >
        <img
          src={require("../../assets/login thumbnail.png")}
          alt="Web Whatsapp login"
          width="100%"
          max-width="250px"
          max-heigh="200px"
          height="auto"
        />
      </Box>
    </Box>
  );
};

export default LoginBottomHalf;
