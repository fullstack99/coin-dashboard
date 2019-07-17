import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.4,
  googleFonts: [
    {
      name: "Oswald",
      styles: ["700"],
    },
    {
      name: "Open sans",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Oswald", "sans-serif"],
  bodyFontFamily: ["Open sans", "sans-serif"],
  headerColor: "hsla(360,100%,100%,1) !important",
  bodyColor: "hsla(360,100%,100%,1) !important",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: () => {
    return {
      html: {
        height: "100%",
      },
      body: {
        backgroundColor: "#1c1e2e !important",
        height: "100%",
      },
      ".scroll-disabler": {
        overflowY: "hidden"
      },
      a: {
        textShadow: "none",
      },
      ".navigation": {
        color: "#9dafbd",
        fontFamily: "Roboto, sans-serif",
        fontSize: "14px",
        fontStretch: "normal",
        fontStyle: "normal",
        fontWeight: "normal",
        letterSpacing: "-0.5px",
        lineHeight: "normal",
        padding: "0 20px",
        textDecoration: "none",
        textTransform: "uppercase",
        transition: "all 100ms linear",
      },
      ".navigation:hover": {
        color: "#475ff2",
      },
    }
  },
})

export default typography
