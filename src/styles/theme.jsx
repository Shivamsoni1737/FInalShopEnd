import { Button } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import "@fontsource/montserrat";

const theme = createTheme();

const the = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        borderRadius: "4px",
      },
    },
    MuiTextField: {
      styleOverrides: {
        inputProps: {
          style: {
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
        InputLabelProps: {
          style: {
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px",
          },
        },
      },
    },
  },
});

export const lighttheme = createTheme({
  ...the,
  typography: {
    fontFamily: "montserrat",
    button: {
      textTransform: "none",
    },
    Heading: {
      fontWeight: 600,
      [theme.breakpoints.up("xs")]: {
        fontSize: "48px",
        lineHeight: "59px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "64px",
        lineHeight: "78px",
      },
    },
    Headline: {
      fontWeight: 600,
      [theme.breakpoints.up("xs")]: {
        fontSize: "32px",
        lineHeight: "39px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "48px",
        lineHeight: "58.5px",
      },
    },
    Body: {
      [theme.breakpoints.up("xs")]: {
        fontSize: "20px",
        lineHeight: "25px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "24px",
        lineHeight: "30px",
      },
    },
  },
  palette: {
    primary: { main: "#9AB999" },
    onprimary: { main: "#000000" },
    secondary: { main: "#F4837D" },
    light: { main: "#FFFFFF" },
    dark: { main: "#000000" },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: `0px 4px 16px 0px #A6A6A640`,
        },
      },
    },
  },
});

export const darktheme = createTheme({
  ...the,
  typography: {
    fontFamily: "montserrat",
    button: {
      textTransform: "none",
    },
    Heading: {
      fontWeight: 600,
      [theme.breakpoints.up("xs")]: {
        fontSize: "48px",
        lineHeight: "59px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "64px",
        lineHeight: "78px",
        fontWeight: "bolder",
      },
    },
    Headline: {
      fontWeight: 600,
      [theme.breakpoints.up("xs")]: {
        fontSize: "32px",
        lineHeight: "39px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "48px",
        lineHeight: "58.5px",
      },
    },
    Body: {
      [theme.breakpoints.up("xs")]: {
        fontSize: "20px",
        lineHeight: "25px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "24px",
        lineHeight: "30px",
      },
    },
  },
  palette: {
    mode: "dark",
    primary: { main: "#9AB999" },
    onprimary: { main: "#27363B" },
    secondary: { main: "#F4837D" },
    light: { main: "#000000" },
    dark: { main: "#FFFFFF" },
  },
  // components: {
  //     MuiPaper: {
  //         styleOverrides: {
  //             root: {
  //                 border: "1px solid rgba(255, 255, 255, 0.2)",
  //             },
  //         },
  //     },
  // }
});

export const FilledButton = styled(Button)(({ theme }) => ({
  borderRadius: "0px",
  padding: "10px 24px",
  color: theme.palette.dark.main,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    opacity: (theme.palette.primary.main, 0.8),
  },
  "&:focus": {
    // color: theme.palette.onprimary.main,
    backgroundColor: theme.palette.secondary.main,
  },
  "&:disabled": {
    // color: theme.palette.onprimary.main,
    // backgroundColor: "#363636"   , // on-background + opacity color
    opacity: 0.8,
  },
}));

export const TextButton = styled(Button)(({ theme }) => ({
  borderRadius: "0px",
  padding: "0px",
  justifyContent: "flex-start",
  color: theme.palette.dark.main,
  "&:hover": {
    opacity: (theme.palette.dark.main, 0.8),
  },
  "&:focus": {
    opacity: (theme.palette.dark.main, 1.2),
  },
  "&:disabled": {
    // color: theme.palette.onbackground.main,
    opacity: 0.12,
  },
}));
//     borderRadius: "4px",
//     position: "absolute",
//     padding: "10px 24px",
//     color: theme.palette.primary.main,
//     backgroundColor: theme.palette.newbackground.main,
//     '&:hover ': {
//         backgroundColor: theme.palette.newbackground.main,
//         opacity: (theme.palette.primary.main, 0.8),
//     },
//     '&:focus': {
//         backgroundColor: theme.palette.newbackground.main,
//         opacity: (theme.palette.primary.main, 1.2),
//     },
//     '&:disabled': {
//         color: theme.palette.onbackground.main,
//         backgroundColor: "#363636", // on-background + opacity color
//         opacity: 0.4,
//     },
// }));

// export const TonalButton = styled(Button)(({ theme }) => ({
//     borderRadius: "4px",
//     padding: "10px 24px",
//     color: theme.palette.onbackground.main,
//     backgroundColor: `rgba(${theme.palette.onprimary.main}, 0.12)`,
//     '&:hover': {
//         backgroundColor: `rgba(171, 199, 255, 0.08)`,
//         // backgroundColor: `rgba(${theme.palette.onprimarycontainer.main}, 0.16)`,
//     },
//     '&:focus': {
//         backgroundColor: `rgba(171, 199, 255, 0.16)`,
//     },
//     '&:disabled': {
//         color: theme.palette.onbackground.main,
//         backgroundColor: "#363636", // on-background + opacity color
//         opacity: 0.4,
//     },
// }));
