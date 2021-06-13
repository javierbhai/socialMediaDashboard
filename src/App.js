import { useState } from 'react';
import { LightMode, DarkMode } from './pattern/Theme'
import { ThemeProvider } from "styled-components";
import Home from './pages/Home'

const themes = {
  light: LightMode,
  dark: DarkMode,
}

const App = () => {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>
      <Home theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
