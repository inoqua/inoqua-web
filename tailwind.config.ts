import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens tal como están definidos en el archivo de Figma
        naranja: {
          DEFAULT: "#FF8D28", // "Naranja1"
        },
        azul: {
          DEFAULT: "#1B263B", // "Azul Oscuro"
        },
        texto: {
          DEFAULT: "#282828", // "Gris Texto"
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      fontSize: {
        // Escala tipográfica del design system (nombre de estilo Figma -> clase tailwind)
        // Títulos y subtítulos bajados 10px respecto al valor original de Figma
        "titulo-xxl": ["26px", { lineHeight: "36px", fontWeight: "700" }], // Titulo XXL (40 -> 30 -> 26, todos los componentes salvo los hero)
        "titulo-xxl-hero": ["30px", { lineHeight: "42px", fontWeight: "700" }], // Titulo XXL de los componentes hero (Home, Servicio, Contacto)
        "titulo-xxl-hero-sm": ["28px", { lineHeight: "38px", fontWeight: "700" }], // Versión mobile del título hero (< sm)
        "subtitulo-35": ["25px", { lineHeight: "36px", fontWeight: "700" }], // Subtitulo35 (35 -> 25)
        "subtitulo-35-sm": ["22px", { lineHeight: "30px", fontWeight: "700" }], // Versión mobile de Subtitulo35 (< sm)
        "subtitulo-xxl": ["16px", { lineHeight: "26px", fontWeight: "500" }], // Subtitulo XXL (24 -> 16, mínimo legible)
        "parrafo-20": ["18px", { lineHeight: "29px", fontWeight: "500" }], // Parrafo 20 (20 -> 18)
        "footer-titulo": ["20px", { lineHeight: "1", fontWeight: "600" }], // footer-titulo (24 -> 20)
        "card-titulo": ["17px", { lineHeight: "1.5", fontWeight: "700" }], // Card titulo (20 -> 17)
        "card-txt": ["14px", { lineHeight: "20px", fontWeight: "400" }], // Card txt (16 -> 14)
      },
      borderRadius: {
        card: "21px",
        panel: "28px",
        hero: "52px",
        final: "46px",
        pill: "45px",
      },
      maxWidth: {
        content: "1440px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
