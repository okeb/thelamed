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
        lato: ["Lato", "sans-serif"],
        merri: ["Merriweather", "serif"],
        noto: ["Noto Serif", "serif"],
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
      "@apply":
        "text-black font-normal font-lato no-underline leading-none mx-0 my-auto px-3 py-3 transition-all",
      "&:hover": {
        "@apply": "text-blue-600 underline",
      },
    },
    "nav-link-light": {
      "@apply":
        "font-normal font-lato no-underline leading-none mx-0 my-auto transition-all",
    },
    label: {
      fontFamily: "Basier Circle",
      "@apply": "block text-sm mb-2 pl-1",
    },
    input: {
      fontFamily: "Basier Circle",
      "@apply":
        "px-3 py-3 rounded-lg border-1  text-gray-900 dark:(bg-gray-700 border-gray-700 text-light-100) border-gray-300 shadow-transparent mb-3.5 w-full placeholder-gray-400",
    },
    card: {
      fontFamily: "Basier Circle",
      "@apply":
        "px-8 dark:bg-gray-800 py-10 w-full max-w-sm shadow-2xl bg-white rounded-2xl mx-10 my-16 font-sans",
    },
  },
  extend: {},
};


