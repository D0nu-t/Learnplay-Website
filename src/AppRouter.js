import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyComponent from './MyComponent';
import Pg2 from './Pg2';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="C:\Users\donut\my-website\src\pg2.js" component={MyComponent} />
        <Route path="/pg2" component={Pg2} />
      </Switch>
    </Router>
  );
}

export default AppRouter;