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
        fontFamily: "'Oswald', sans-serif",
        color: "#fff",
        fontSize: "18px",
        fontweight: "600",
        letterSpacing: ".8px",
        textDecoration: "none",
        textTransform: "uppercase",
        transition: "all 100ms linear",
      },
      ".navigation:hover": {
        color: "#ff3d5e",
        textDecoration: "none",
      },
    }
  },
})

export default typography
