import AppMenu from "./common/AppMenu";
import JobList from "./job-list/JobList";
import JobAdmin from "./job-list/JobAdmin";
import { Container } from "semantic-ui-react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppMenu />
        <Switch>
          <Route path="/admin/" exact component={JobAdmin} />;
          {/* render={(routeProps)=>{return<JobAdmin {...routeProps}/>}} */}
          <Route path={("/index", "/home/")} exact component={JobList} />;
        </Switch>
        <Container style={{ margin: "1em" }}>
          <JobList />
        </Container>
      </Router>
    </div>
  );
}

export default App;
