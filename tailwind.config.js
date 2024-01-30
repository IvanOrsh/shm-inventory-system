/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import * as defaultTheme from "tailwindcss/defaultTheme";

const sizes = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: sizes.mobile, // mobile
        md: sizes.tablet, // tablet
        lg: sizes.laptop, // laptop
        xl: sizes.desktop, // desktop
      },

      textColor: {
        skin: {
          base: withOpacityValue("--color-text-base"),
          muted: withOpacityValue("--color-text-muted"),
          inverted: withOpacityValue("--color-text-inverted"),
        },
      },

      backgroundColor: {
        skin: {
          fill: withOpacityValue("--color-fill"),
          "fill-total": withOpacityValue("--color-fill-total"), // !
          "button-accent": withOpacityValue(`--color-button-accent`),
          "button-accent-hover": withOpacityValue(
            `--color-button-accent-hover`,
          ),
          "button-muted": withOpacityValue(`--color-button-muted`),
        },
      },

      gradientColorStops: {
        skin: {
          hue: withOpacityValue(`--color-hue`),
        },
      },

      colors: {
        gray: colors.zinc,
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
