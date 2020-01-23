import * as React from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { hasDarkMode } from '../Services/helper';

import Home from '~/ui/Routes/Home';
import Camera from '~/ui/Routes/Camera';
import Scoreboard from '~/ui/Routes/Scoreboard';
import Tool from '~/ui/Routes/Tool';
import Playground from '~ui/Routes/Playground';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(hasDarkMode());

  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: darkMode ? 'dark' : 'light',
      },
    }),
    [darkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home setDarkMode={setDarkMode} />
        </Route>
        <Route exact path="/tool">
          <Tool setDarkMode={setDarkMode} />
        </Route>
        <Route exact path="/camera">
          <Camera />
        </Route>
        <Route exact path="/scoreboard">
          <Scoreboard />
        </Route>
        <Route exact path="/playground">
          <Playground />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default withRouter(App);
