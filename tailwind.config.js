/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import * as defaultTheme from "tailwindcss/defaultTheme";

const sizes = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const Device = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
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
        sm: Device.mobile, // mobile
        md: Device.tablet, // tablet
        lg: Device.laptop, // laptop
        xl: Device.desktop, // desktop
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
