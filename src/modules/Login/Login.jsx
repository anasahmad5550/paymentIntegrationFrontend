import { Grid } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Copyright from "../../components/copyright/copyright";
import { useMutation } from "@apollo/client";
import { SIGNIN } from "../../graphql/mutations/user";
import { links } from "../../navigation/config";
import { Link } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [createUser, { data, loading, error }] = useMutation(SIGNIN, {
    variables: {
      email: formValues.email,
      password: formValues.password,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser();
    if (!loading) {
      window.localStorage.setItem("token", data?.signinUser?.token);
      setFormValues({
        password: "",
        email: "",
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" component="h2">
          Log In
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: "390px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                type="email"
                name="email"
                value={formValues.email}
                autoComplete="email"
                variant="outlined"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    email: e.target.value,
                  })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="password"
                variant="outlined"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    password: e.target.value,
                  })
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Typography component={Link} to={links.signup}>
                Don't have an account? Signup
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};
export default Login;
