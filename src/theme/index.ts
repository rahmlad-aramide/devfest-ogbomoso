import { extendTheme } from "@chakra-ui/react";
import buttonTheme from "./components/Button";

const theme = extendTheme({
  colors: {
    blue: {
      50: "#e1f2ff",
      100: "#b4d6fe",
      200: "#87baf8",
      300: "#599ff2",
      400: "#2c83ed",
      500: "#126ad3",
      600: "#0852a5",
      700: "#013b77",
      800: "#00234a",
      900: "#000d1e",
    },
  },
  fonts: {
    heading: `"Google Sans"', 'sans-serif'`,
    body: `"Google Sans"', 'sans-serif'`,
  },
  components: {
    Button: buttonTheme,
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
    cssVarPrefix: "devfest_ogbomoso",
  },
});

export default theme;
