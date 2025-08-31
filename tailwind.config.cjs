const { defineConfig } = require("tailwindcss");

const designTokenColors = {
  primary: {
    100: "#0f0f0f",
    80: "#2c5282",
    70: "#76b6ff",
    60: "#1a365d",
    50: "#2a5286",
    40: "#9dcbff",
    30: "#ebf5ff",
    20: "#faf9f8",
    10: "#f5f7fa",
  },
  danger: {
    100: "#742a2a",
    80: "#c53030",
    60: "#e53e3e",
    40: "#fc8181",
    20: "#fed7d7",
    10: "#fef5f5",
  },
  success: {
    100: "#22543d",
    80: "#38a169",
    60: "#48bb78",
    40: "#68d391",
    20: "#c6f6d5",
    10: "#f0fff4",
  },
  warning: {
    100: "#744210",
    80: "#d69e2e",
    60: "#ed8936",
    40: "#f6ad55",
    20: "#fbd38d",
    10: "#fffaf0",
  },
  info: {
    100: "#2a4365",
    80: "#3182ce",
    60: "#4299e1",
    40: "#63b3ed",
    20: "#bee3f8",
    10: "#ebf8ff",
  },
  search: {
    100: "#553c9a",
    80: "#6b46c1",
    60: "#805ad5",
    40: "#b794f6",
    20: "#e9d8fd",
    10: "#faf5ff",
  },
  font: {
    100: "#1a202c",
    80: "#2d3748",
    60: "#4a5568",
    40: "#718096",
  },
  line: {
    100: "#2d3748",
    60: "#4a5568",
    50: "#e2e8f0",
    30: "#edf2f7",
    10: "#f7fafc",
  },
  background: {
    primary: "#ffffff",
    secondary: "#f7fafc",
    tertiary: "#edf2f7",
  },
  gray: {
    100: "#1a202c",
    80: "#2d3748",
    60: "#4a5568",
    40: "#718096",
    20: "#a0aec0",
    10: "#e2e8f0",
    5: "#f7fafc",
  },
};

module.exports = defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.stories.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: designTokenColors,

      // Typography
      fontFamily: {
        sans: ["Pretendard", "Noto Sans KR", "sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
        pretendard: ["Pretendard", "Noto Sans KR", "sans-serif"],
        mono: ["Hack", "Monaco", "Consolas", "monospace"],
        hack: ["Hack", "Monaco", "Consolas", "monospace"],
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },

      // Spacing (8px 기반)
      spacing: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },

      // Border Radius
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      // Box Shadow
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
});
