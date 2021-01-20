import AppMenu from "./common/AppMenu";
import JobList from "./job-list/JobList";
import { Container } from "semantic-ui-react";
import Main from "./pages/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppMenu />
        <Container style={{ margin: "1em" }}>
          <JobList />
        </Container>
      </Router>
    </div>
  );
}

export default App;
