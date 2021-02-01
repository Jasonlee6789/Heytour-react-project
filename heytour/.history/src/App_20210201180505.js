import AppMenu from "./common/AppMenu";
import JobList from "./job-list/JobList";
import JobAdmin from "./job-list/JobAdmin";
import { Container } from "semantic-ui-react";
import Footer from "./common/Footer";
import About from "./common/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  //  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <Router>
      <div className="App">
        <AppMenu />
        <Route
          path="/"
          exact
          render={(props) => (
            <div>
              <JobList />
            </div>
          )}
        />

        <Container style={{ margin: "1em" }}>
          <Route path="/about" component={About} />;
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default App;
