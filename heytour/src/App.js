import AppMenu from './common/AppMenu'
import JobList from './job-list/JobList'

import { Container } from 'semantic-ui-react'
import Footer from './common/Footer'
import About from './common/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
	//  const [isAdmin, setIsAdmin] = useState(false);
	return (
		<Router>
			<div className="App">
				<AppMenu />
				<Container style={{ margin: '1em' }}>
					<Route
						path="/"
						exact
						// render={(props) => (
						//   <>
						//     <JobList />
						//   </>
						// )}
						component={JobList}
					/>
					<Route path="/about" component={About} />;
					<Footer />
				</Container>
			</div>
		</Router>
	)
}

export default App
