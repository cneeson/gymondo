import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Workouts } from './pages/Workouts';
import { theme } from './utils/style/theme';
import './utils/style/reset.css';
import { WorkoutDetail } from './pages/WorkoutDetail';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path='/workouts/:id'>
            <WorkoutDetail />
          </Route>
          <Route path='/'>
            <Workouts />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
