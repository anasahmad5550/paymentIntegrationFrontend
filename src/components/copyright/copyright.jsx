import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Copyright = (props) => {
  return (
    <Typography
      align="center"
      variant="body2"
      color="text.secondary"
      {...props}
    >
      Copyright © Your Website 2023.
    </Typography>
  );
};

export default Copyright;
