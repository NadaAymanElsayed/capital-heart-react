"use client";
import { createContext, useReducer, useMemo } from "react";

export const ThemeContext = createContext();

const initialState = {
  theme: "dark",
};

function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const newTheme = state.theme === "light" ? "dark" : "light";
      document.body.className = newTheme;
      return { theme: newTheme };
    }
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const value = useMemo(
    () => ({
      theme: state.theme,
      toggleTheme,
    }),
    [state.theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

