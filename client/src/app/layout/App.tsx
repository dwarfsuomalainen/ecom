import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import { dark } from "@mui/material/styles/createPalette";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline> {/* baseline for toolbar */}
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
