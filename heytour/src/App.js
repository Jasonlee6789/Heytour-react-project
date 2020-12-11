import AppMenu from "./common/AppMenu";
import JobList from "./job-list/JobList";
import { Container } from "semantic-ui-react";
function App() {
  return (
    <div className="App">
      <AppMenu />
      <Container style={{ margin: "1em" }}>
        <JobList />
      </Container>
    </div>
  );
}

export default App;
