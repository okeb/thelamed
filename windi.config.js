export default {
  darkMode: "media",
  extract: {
    include: ["index.html", "src/**/*.{md,html,svx,tsx}"],
    exclude: ["node_modules/**/*", ".git/**/*"],
  },
  theme: {
    textColor: {
      blacker: "hsl(210deg,15%,6%)",
    },
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        noto: ["Noto Sans Mono", "monospace"],
        courier: ["Courier Prime", "monospace"],
        basier: ["Basier Circle", "inter", "sans-serif"],
        basiermono: [
          "basier_square_mono",
          "JetBrains Mono",
          "Courier Prime",
          "monospace",
        ],
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      blacker: "hsl(210deg,15%,6%)",
    }),
  },
  shortcuts: {
    "nav-link": {
      fontFamily: "Basier Circle",
      "@apply":
        "text-black font-normal no-underline text-black dark:text-white leading-none mx-0 my-auto",
      "&:hover": {
        "@apply": "text-blue-600 underline",
      },
    },
  },
  extend: {},
};


