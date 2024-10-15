/* eslint-disable react/prop-types */
import { useLogout } from "../api/useLogout";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Spinner from "../ui/Spinner";

import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useArticles } from "../api/useArticles";
import Loader from "../ui/Loader";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://community-corner-web.vercel.app/">
        Community Chronicle
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

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

function ItemRow({ data }) {
  const img = data.img;
  const heading = data.heading;
  const author = data.author;
  return (
    <div className="grid grid-cols-4 items-center justify-items-center my-4">
      <img src={img} className="h-10 w-10" />
      <div className="text-center">{heading}</div>
      <div className="text-center">{author}</div>
      <div className="flex gap-3">
        <button className="border-2 px-3 py-1 border-[#53B161] font-semibold hover:bg-[#53B161] hover:border-gray-50 hover:text-gray-50">
          Edit
        </button>
        <button className="border-2 px-3 py-1 border-[#53B161] font-semibold hover:bg-[#53B161] hover:border-gray-50 hover:text-gray-50">
          delete
        </button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [showSwitch, setShowSwitch] = React.useState(0);
  const { logout, isLoading } = useLogout();

  const mainListItems = (
    <React.Fragment>
      <ListItemButton onClick={() => setShowSwitch(0)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Make an entry" />
      </ListItemButton>
      <ListItemButton onClick={() => setShowSwitch(1)}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Edit an Entry" />
      </ListItemButton>
    </React.Fragment>
  );

  const navigate = useNavigate();

  const { isLoading: isloadingArticles, articles } = useArticles();

  if (isloadingArticles) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );
  }

  let check = false;

  if (!articles.articles.length) check = true;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
              className="!text-gray-50"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              className="!text-gray-50"
            >
              Dashboard
            </Typography>
            <Button
              className="!text-gray-50 !font-medium hover:!bg-black/[.04]"
              onClick={() => navigate("/")}
            >
              &larr; Go back to website
            </Button>
            <IconButton color="inherit" onClick={() => logout()}>
              {!isLoading ? (
                <HiArrowRightOnRectangle className="text-gray-50" />
              ) : (
                <Spinner />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {showSwitch == 0 ? (
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {check ? (
                      <p>There are no articles to show!</p>
                    ) : (
                      <>
                        <header className="grid grid-cols-4 items-center justify-items-center font-bold underline my-2">
                          <div>Image</div>
                          <div>Heading</div>
                          <div>Author</div>
                        </header>
                        <div>
                          {articles.articles.map((e) => (
                            <ItemRow data={e} key={e.id} />
                          ))}
                        </div>
                      </>
                    )}
                  </Paper>
                </Grid>
              ) : null}
              {showSwitch == 1 ? (
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <h1>TODO: Add the feature to add articles</h1>
                  </Paper>
                </Grid>
              ) : null}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
