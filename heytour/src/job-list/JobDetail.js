import React, { useEffect, useRef, useReducer } from 'react'
import { Button, Form, Modal, Message, Icon } from 'semantic-ui-react'
import { useJobSave } from './JobListAPI'
import jobDetailReducer from './JobDetailReducer'

export default function JobDetail(props) {
	const didMountRef = useRef(false)
	//useRef可以保存组件更新前的一些状态
	//组件更新时，ref.current中保存的值不会自动更新，需要我们手动更新

	const [jobSaveResponse, setJobRequest] = useJobSave()
	// 上面第一个就是hook:useJobSave()里面return的state 第二个是对应setJob来更新state的

	const [state, dispatch] = useReducer(jobDetailReducer, {
		jobDetail: props.jobSelected,
		isError: false,
		isLoading: false,
		isCreate: props.isCreate,
	})

	useEffect(() => {
		if (didMountRef.current) {
			if (jobSaveResponse.isError) {
				dispatch({ type: 'JOBDETAIL_ERROR' })
			} else if (jobSaveResponse.isLoading) {
				dispatch({ type: 'JOBDETAIL_LOADING' })
			} else {
				dispatch({
					type: 'JOBDETAIL_SUCCESS',
					payload: jobSaveResponse.data,
				})
				props.onSave(state.jobDetail)
			}
		} else {
			didMountRef.current = true
		}
	}, [jobSaveResponse, props, state.jobDetail])

	function handleSave(e) {
		e.preventDefault()
		//Object.assign(target, ...sources)源对象分配到目标对象。它将返回目标对象。
		const job = Object.assign({}, state.jobDetail)
		setJobRequest(job)
	}

	function handleChange(e, { name, value }) {
		const job = Object.assign({}, state.jobDetail)

		job[name] = value

		dispatch({ type: 'JOBDETAIL_TYPING', payload: job })
	}

	return (
		<Modal onClose={props.onClose} open={props.open}>
			<Modal.Header>
				{state.isCreate ? 'New Job' : 'Edit Job'}
			</Modal.Header>

			<Modal.Content>
				<Form
					onSubmit={handleSave}
					loading={state.isLoading}
					error={state.isError}
				>
					<Form.Checkbox
						required
						toggle
						name="IsActive"
						label="Active"
						checked={state.jobDetail.isActive}
						placeholder="User Name"
						onChange={handleChange}
					/>
					<Form.Input
						required
						name="title"
						label="Title"
						value={state.jobDetail.title}
						placeholder="Title"
						onChange={handleChange}
					/>
					<Form.Input
						required
						name="company"
						label="Company"
						value={state.jobDetail.company}
						placeholder="Company"
						onChange={handleChange}
					/>
					<Form.Input
						required
						name="industry"
						label="Industry"
						value={state.jobDetail.industry}
						placeholder="Industry"
						onChange={handleChange}
					/>
					<Form.Input
						required
						name="location"
						label="Location"
						value={state.jobDetail.location}
						placeholder="Location"
						onChange={handleChange}
					/>
					<Form.Input
						name="picture"
						label="Picture"
						value={state.jobDetail.picture}
						placeholder="Picture"
						onChange={handleChange}
					/>
					<Form.Input
						name="email"
						label="Email"
						value={state.jobDetail.email}
						placeholder="Email"
						onChange={handleChange}
					/>
					<Form.Input
						name="jobDesc"
						label="JobDesc"
						value={state.jobDetail.jobDesc}
						placeholder="JobDesc"
						onChange={handleChange}
					/>

					<Button
						color="google plus"
						type="button"
						onClick={props.onClose}
					>
						<Icon name="cancel" />
						Close
					</Button>

					<Button color="instagram" type="submit">
						<Icon name="save" />
						Save
					</Button>

					{state.isError && (
						<Message
							error
							header="Save Failed"
							content="Please check the inputs."
						/>
					)}
				</Form>
			</Modal.Content>
		</Modal>
	)
}
