import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, makeStyles } from '@material-ui/core';
import { ThemeContextConsumer } from './ThemeContext';
import GlobalStyle from './components/general/GlobalStyle';
import Theme from './components/theme';
import Home from './components/pages/Home';
import First from './components/pages/First';
import Second from './components/pages/Second';
import Navigation from './components/pages/Navigation';
import createPalette from '@material-ui/core/styles/createPalette';

const useStyle = makeStyles((theme) => ({
  darKTheme: {
    backgroundColor: 'black',
    height: '100vh',
  },
  lightTheme: {
    backgroundColor: 'white',
    height: '100vh',
  },
  lightText: {
    color: ' #000000',
  },
  darkText: {
    color: '#fff',
  },
  titleContainer: {
    position: 'relative',
  },
  MoonShape: {
    background: 'gold',
    width: '200px',
    height: '200px',
    position: 'absolute',
    borderRadius: '50%',
    top: '-20px',
    right: '10px',
  },
  niteTime:{
    background: 'black',
  },
  dayTime:{
    background: 'white',
  }
}));

function App() {
  const classes = useStyle();
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div
          className={
            context.theme === 'Day' ? classes.lightTheme : classes.darKTheme
          }
        >
          <Router>
            <ThemeProvider theme={Theme}>
              <GlobalStyle />
              <Router>
                <Navigation />
                <div className={classes.titleContainer}>
                  <h1
                    className={
                      context.theme === 'Day'
                        ? classes.lightText
                        : classes.darkText
                    }
                  >
                    React Dark mode
                  </h1>
                  <div
                    className={`${classes.MoonShape} ${
                      context.theme === 'Day'
                        ? classes.niteTime
                        : classes.dayTime
                    }`}
                  >
                    {/* Moon Shape */}
                  </div>
                </div>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/first">
                    <First />
                  </Route>
                  <Route path="/second">
                    <Second />
                  </Route>
                </Switch>
              </Router>
            </ThemeProvider>
          </Router>
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default App;
