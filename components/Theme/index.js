import React from 'react';

export const ThemeContext = React.createContext();

export function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value={{ theme: props.theme }}>{props.children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
