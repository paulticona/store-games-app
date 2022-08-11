import './App.css';
import { ThemeProvider } from '@mui/system';
import theme from './theme';
import Router from './router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
