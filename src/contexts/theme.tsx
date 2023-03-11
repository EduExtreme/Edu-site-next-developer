/* eslint-disable react/jsx-no-constructed-context-values */
import { ReactNode, useState, createContext, useEffect } from "react";
import { dark, light } from "@/config/stitches";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  theme: string & {
    className: string;
    selector: string;
  };
  isLight: boolean;
  onChangeTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    function loadStorageData() {
      const currentTheme = localStorage.getItem("@theme");

      if (!currentTheme) {
        localStorage.setItem("@theme", "light");
        setTheme(currentTheme === "light" ? light : dark);
      }
      setTheme(currentTheme === "light" ? light : dark);
    }
    loadStorageData();
  }, []);

  const isLight = theme === light;

  const onChangeTheme = () => {
    localStorage.setItem("@theme", isLight ? "dark" : "light");
    setTheme((currentTheme) => {
      return currentTheme === light ? dark : light;
    });
  };
console.log("theme ?", theme)
  return (
    <ThemeContext.Provider
      value={{
        theme,
        isLight,
        onChangeTheme,
      }}
    >
      <main className={theme}>{children}</main>
    </ThemeContext.Provider>
  );
}
