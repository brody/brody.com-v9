const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

module.exports = {
  siteName: "Gridsome",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};

module.exports = {
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        neutral: {
          100: "var(--brody-neutral-100)",
          200: "var(--brody-neutral-200)",
          300: "var(--brody-neutral-300)",
          400: "var(--brody-neutral-400)",
          500: "var(--brody-neutral-500)",
          600: "var(--brody-neutral-600)",
          700: "var(--brody-neutral-700)",
          800: "var(--brody-neutral-800)",
          900: "var(--brody-neutral-900)",
        },
        neutrala: {
          05: "var(--brody-neutrala-05)",
          10: "var(--brody-neutrala-10)",
          20: "var(--brody-neutrala-20)",
          30: "var(--brody-neutrala-30)",
          40: "var(--brody-neutrala-40)",
          50: "var(--brody-neutrala-50)",
          60: "var(--brody-neutrala-60)",
          70: "var(--brody-neutrala-70)",
          80: "var(--brody-neutrala-80)",
          90: "var(--brody-neutrala-90)",
        },
        brand: {
          main: "var(--brody-brand-main)",
          bright: "var(--brody-brand-bright)",
          dim: "var(--brody-brand-dim)",
        },
      },
      // fontSize: {
      // 'xs': '.75rem',
      // 'sm': '.875rem',
      // 'tiny': '.875rem',
      // 'base': '1rem',
      // 'lg': '1.125rem',
      // 'xl': '1.25rem',
      // '2xl': '1.5rem',
      // '3xl': '1.875rem',
      // '3-5xl': '2rem',
      // '4xl': '2.25rem',
      // '5xl': '3rem',
      // '6xl': '4rem',
      // '7xl': '5rem',
      // },
      fontFamily: {
        sans: [
          '"Inter"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      spacing: {
        full: {
          10: "10%",
          20: "20%",
          30: "30%",
          40: "40%",
          50: "50%",
          60: "60%",
          70: "70%",
          80: "80%",
          90: "90%",
        },
        "025": "0.0625rem",
        "05": "0.125rem",
        "7": "1.75rem",
      },
      borderWidth: {},
    },
    // container: {},
    // fontFamily: {
    // sans: [
    //   '"Manrope VF"',
    //   'Manrope',
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   '"Noto Sans"',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    //   '"Noto Color Emoji"',
    // ],
    // serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    // mono: [
    //   'Menlo',
    //   'Monaco',
    //   'Consolas',
    //   '"Liberation Mono"',
    //   '"Courier New"',
    //   'monospace',
    // ],
    // },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ],
};
