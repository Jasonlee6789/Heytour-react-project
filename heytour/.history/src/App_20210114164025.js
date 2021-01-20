import AppMenu from "./common/AppMenu";
import JobList from "./job-list/JobList";
import { Container } from "semantic-ui-react";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppMenu />
        <Route path="/admin/" exact component={JobAdmin} />;
        <Container style={{ margin: "1em" }}>
          <JobList />
        </Container>
      </Router>
    </div>
  );
}

export default App;
