import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLogin } from "../api/useLogin";
import { useNavigate } from "react-router-dom";
import { useUser } from "../api/useUser";
import { useEffect } from "react";
import Loader from "../ui/Loader";
import Spinner from "../ui/Spinner";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#53B161",
    },
    secondary: {
      main: "#53B161",
    },
  },
});

export default function SignIn() {
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();
  const { isLoading: isLoadingUser, isAuthenticated } = useUser();
  useEffect(
    function () {
      if (isAuthenticated && !isLoadingUser) navigate("/dashboard");
    },
    [isAuthenticated, isLoadingUser, navigate]
  );
  if (isLoadingUser)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const pass = data.get("password");
    login({ email, password: pass });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className="mb-24">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...(isLoading ? { disabled: true } : {})}
              defaultValue={"communitycornerpodcast@gmail.com"} // remove this
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...(isLoading ? { disabled: true } : {})}
              defaultValue={"pass123"} // Remove this
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              {...(isLoading ? { disabled: true } : {})}
              className="!text-gray-50"
            >
              {isLoading ? <Spinner /> : "Sign In"}
            </Button>

            <div className="flex items-center justify-center mt-4">
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
