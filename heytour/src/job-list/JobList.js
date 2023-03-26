import React, { useState, useReducer } from 'react'
import { Grid, Breadcrumb, List } from 'semantic-ui-react'
import { useJobDelete } from './JobListAPI'

import JobListContent from './JobListContent'
import JobDetail from './JobDetail'
import jobListReducer from './JobListReducer'

export default function JobList() {
	const [jobDeleteResponse, setJobId] = useJobDelete()
	const [repositories, setRepositories] = useState([])
	//const [jobs, setJobs] = useState(null);
	//Reducer take the state so far and the action, and return the next state. In this way, they accumulate actions over time into state.
	//dispatch function (to “dispatch” user actions to the reducer)
	const [state, dispatch] = useReducer(jobListReducer, {
		jobs: [],
		jobSelected: {},
		isError: false,
		isLoading: false,
		isCreate: false,
	})
	const search = async (event) => {
		event.preventDefault()
		const form = event.target
		const input = form.querySelector('#searchText')
		const searchQuery = input.value.trim()
		if (searchQuery === '') {
			return
		}
		const repos = await fetch(
			'https://api.github.com/search/repositories' +
				(searchQuery ? `?q=${searchQuery}` : "?q=''")
		)
		const data = await repos.json()
		console.log(data)
		setRepositories(data)
		input.value = ''
	}
	// useEffect(() => {
	// 	console.log(jobListResponse)
	// 	if (jobListResponse.data && !jobListResponse.isError) {
	// 		// setJobs(jobListResponse.data);
	// 		dispatch({ type: 'JOBLIST_SUCCESS', payload: jobListResponse.data })
	// 		//The object you pass to dispatch is called an “action:”
	// 		// dispatch actions to update that state.
	// 	}

	// 	if (jobDeleteResponse.data && !jobDeleteResponse.isError) {
	// 		//setJobs(jobs.filter((job) => job.id !== jobDeleteResponse.data));
	// 		dispatch({
	// 			type: 'JOBLIST_SUCCESS',
	// 			payload: state.jobs.filter(
	// 				(job) => job.id !== jobDeleteResponse.data
	// 			),
	// 		})
	// 	}
	// }, [jobListResponse, jobDeleteResponse])

	function handleDelete(id) {
		setJobId(id)
	}

	function handleJobDetailEDIT(job) {
		dispatch({ type: 'JOBDETAIL_EDIT', payload: job })
	}

	function handleJobDetailClose() {
		dispatch({ type: 'JOBDETAIL_CLOSE' })
	}

	function handleSave(job) {
		var jobs = state.jobs.filter((j) => j.id !== job.id)
		jobs.unshift(job)
		dispatch({ type: 'JOBDETAIL_SAVE', payload: jobs })
	}

	return (
		<div>
			<Breadcrumb>
				<Breadcrumb.Section link>Home</Breadcrumb.Section>
				<Breadcrumb.Divider />
				<Breadcrumb.Section active>Jobs</Breadcrumb.Section>
			</Breadcrumb>
			<form onSubmit={(event) => search(event)}>
				<input
					id="searchText"
					type="text"
					placeholder="Input repos keywords"
				/>
				<button>Search</button>
			</form>
			{repositories.items && repositories.items.length && (
				<List divided relaxed>
					{repositories.items.map((repo) => (
						<List.Item key={repo.id}>
							<List.Icon
								name="github"
								size="large"
								verticalAlign="middle"
							/>
							<List.Content>
								<List.Header as="a" href={repo.html_url}>
									{repo.full_name}
								</List.Header>
								<List.Description>
									{repo.description}
								</List.Description>
							</List.Content>
						</List.Item>
					))}
				</List>
			)}

			<Grid>
				{/* {jobListResponse.data &&
     jobListResponse.data.map((job, index) => { */}
				{/* {jobs && */}
				{state.jobs.map((job) => {
					return (
						<JobListContent
							key={job.id}
							//isLoading={jobListResponse.isLoading}
							job={job}
							deleteJob={handleDelete}
							onEdit={handleJobDetailEDIT}
						/>
					)
				})}
			</Grid>
			{/* )} */}
			{state.jobDetailOpen && (
				<JobDetail
					isCreate={state.isCreate}
					open={state.jobDetailOpen}
					onClose={handleJobDetailClose}
					onSave={handleSave}
					jobSelected={state.jobSelected}
				/>
			)}
		</div>
	)
}
