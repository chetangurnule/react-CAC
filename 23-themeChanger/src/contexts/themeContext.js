import { createContext, useContext } from "react";

export const themeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
  const context = useContext(themeContext);
  return context;
}
