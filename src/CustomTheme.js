import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#A9907E",
    100: "#F3DEBA",
    200: "#ABC4AA",
    300: "#675D50",
    400: "rgba(197, 224, 220, 0.5)",
    500: "#718096",
    600: "#4a5568",
    700: "#2d3748",
    800: "#1a202c",
    900: "#171923"
  }
};

const theme = extendTheme({ colors });

export default theme;
