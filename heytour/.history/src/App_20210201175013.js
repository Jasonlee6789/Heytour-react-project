import AppMenu from "./common/AppMenu";
import JobList from "./job-list/JobList";
import JobAdmin from "./job-list/JobAdmin";
import { Container } from "semantic-ui-react";
import About from "./common/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <Router>
      <div className="App">
        <AppMenu />
        <Switch>
          <Route path="/admin/" exact component={JobAdmin} />;
          {/* render={(routeProps)=>{return<JobAdmin {...routeProps}/>}} */}
          <Route path={("/", "/home/")} exact component={JobList} />;
        </Switch>
        <Container style={{ margin: "1em" }}>
          <JobList />
        </Container>
        <About />
      </div>
    </Router>
  );
}

export default App;
