import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';

function App() {

  const [darkMode,setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  let theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  const themeToggle = () => {
    setDarkMode(prev => (
      !prev
    ))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onThemeToggle={themeToggle}/>
      <Container>
        <Catalog/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
