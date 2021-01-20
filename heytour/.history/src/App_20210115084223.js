import AppMenu from "./common/AppMenu";
import JobList from "./job-list/JobList";
import JobAdmin from "./job-list/JobAdmin";
import { Container } from "semantic-ui-react";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppMenu />
        <Route path="/admin/" exact component={JobAdmin} />;
        <Route path="/","home/" exact component={JobList} />;
        <Container style={{ margin: "1em" }}>
          <JobList />
        </Container>
      </Router>
    </div>
  );
}

export default App;
