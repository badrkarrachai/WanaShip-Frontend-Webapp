import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import colors from "tailwindcss/colors";
import { nextui } from "@nextui-org/react";

const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",
};

const generateThemeObject = (colors: any, mapping: any, invert = false) => {
  const theme: any = {};
  baseColors.forEach((color) => {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadeKey = invert ? value : key;
      theme[color][key] = colors[color][shadeKey];
    });
  });
  return theme;
};

const lightTheme = generateThemeObject(colors, shadeMapping);
const darkTheme = generateThemeObject(colors, shadeMapping, true);

const themes = {
  light: {
    ...lightTheme,
    white: "#ffffff",
  },
  dark: {
    ...darkTheme,
    white: colors.gray["950"],
    black: colors.gray["50"],
  },
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        lg: "45px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        WaPurple: "#A158EE",
        WaGreen: "#10B25D",
        WaBlue: "#1B9FC8",
        WaBrown: "#5D5F0B",
        WaBlack: "#060606",
        WaWhite: "#FDFEFD",
        WaGold: "#F8B024",
        WaGray: "#98989D",
        WaBorderDark: "#464663",
        WaBackground: "#FBFAF8",
        WaBackgroundDark: "#0D0F1B",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    keyframes: {
      hide: {
        from: {
          opacity: "1",
        },
        to: {
          opacity: "0",
        },
      },
      slideDownAndFade: {
        from: {
          opacity: "0",
          transform: "translateY(-6px)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      slideLeftAndFade: {
        from: {
          opacity: "0",
          transform: "translateX(6px)",
        },
        to: {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      slideUpAndFade: {
        from: {
          opacity: "0",
          transform: "translateY(6px)",
        },
        to: {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      slideRightAndFade: {
        from: {
          opacity: "0",
          transform: "translateX(-6px)",
        },
        to: {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      accordionOpen: {
        from: {
          height: "0px",
        },
        to: {
          height: "var(--radix-accordion-content-height)",
        },
      },
      accordionClose: {
        from: {
          height: "var(--radix-accordion-content-height)",
        },
        to: {
          height: "0px",
        },
      },
      dialogOverlayShow: {
        from: {
          opacity: "0",
        },
        to: {
          opacity: "1",
        },
      },
      dialogContentShow: {
        from: {
          opacity: "0",
          transform: "translate(-50%, -45%) scale(0.95)",
        },
        to: {
          opacity: "1",
          transform: "translate(-50%, -50%) scale(1)",
        },
      },
      drawerSlideLeftAndFade: {
        from: {
          opacity: "0",
          transform: "translateX(100%)",
        },
        to: {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      drawerSlideRightAndFade: {
        from: {
          opacity: "1",
          transform: "translateX(0)",
        },
        to: {
          opacity: "0",
          transform: "translateX(100%)",
        },
      },
    },
  },
  animation: {
    hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    slideDownAndFade: "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    slideLeftAndFade: "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    slideRightAndFade: "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    // Accordion
    accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
    accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
    // Dialog
    dialogOverlayShow: "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    dialogContentShow: "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    // Drawer
    drawerSlideLeftAndFade:
      "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
  },

  plugins: [createThemes(themes), nextui(), require("tailwindcss-animate")],
};
export default config;
