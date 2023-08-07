import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileTopAppBar from './components/ProfileNavBar';
import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    primary: { main: '#ffffff', contrastText: '#212121' }
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 50,
          minHeight: 48
        }
      }
    }
  }
});

function App() {
  return (
    <div className="App">
      <ProfileTopAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
      </header>
    </div>
  );
}

export default App;
