import "./App.css";
import AppMenu from "./common/AppMenu";
import JobList from "./job-list/JobList";
function App() {
  return (
    <div className="App">
      <AppMenu />
      <JobList />
    </div>
  );
}

export default App;
