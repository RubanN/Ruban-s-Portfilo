import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import useStyles from "./styles";
export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <img
          src={
            "https://capebretonspectator.com/wp-content/uploads/2018/01/Amazon-Logo.jpg"
          }
          alt="RM App"
          height="50px"
          width="100px"
        />
        <Box>
          <LocationOnIcon />
          <Typography className={classes.textss}>Hello</Typography>
          <Typography>select your address</Typography>
        </Box>
      </Box>
    </div>
  );
};
