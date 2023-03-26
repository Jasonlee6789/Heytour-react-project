import React, { useState, useEffect } from 'react'
import '../static/css/AddJob.css'
import {
	Modal,
	Form,
	Input,
	TextArea,
	Button,
	Icon,
	Message,
} from 'semantic-ui-react'
import axios from 'axios'

function AddJob() {
	const [open, setOpen] = React.useState(false)

	const [id, setId] = useState(0) //文章的ID，如果是0说明是新增加工作，如果不是0，说明是修改
	const [isActive, setIsActive] = useState(true)
	const [title, setTitle] = useState('')
	const [location, setLocation] = useState('')
	const [industry, setIndustry] = useState('')
	const [picture, setPicture] = useState('')
	const [company, setCompany] = useState('')
	const [email, setEmail] = useState('')
	const [jobDesc, setJobDesc] = useState('')

	useEffect(() => {
		console.log('执行了进入Admin权限的页面')
	}, [])

	const changeId = (e) => {
		setId(e.target.value)
	}

	const changePicture = (e) => {
		setPicture(e.target.value)
	}

	const changeTitle = (e) => {
		setTitle(e.target.value)
	}

	const changeIndustry = (e) => {
		setIndustry(e.target.value)
	}

	const changeCompany = (e) => {
		setCompany(e.target.value)
	}

	const changeLocation = (e) => {
		setLocation(e.target.value)
	}

	const changeJobDesc = (e) => {
		setJobDesc(e.target.value)
	}

	const changeEmail = (e) => {
		setEmail(e.target.value)
	}

	const changeIsActive = (e) => {
		setIsActive(e.target.value)
	}

	const saveJob = () => {
		let dataProps = {}
		//id是数字,id是由数据库自动生成的,不能带着id插入
		dataProps.id = parseInt(id)
		dataProps.title = title
		dataProps.location = location
		dataProps.industry = industry
		dataProps.company = company
		dataProps.email = email
		dataProps.jobDesc = jobDesc
		// let dateText = postedOn.replace("-", "/");
		// dataProps.addTime = new Date(dateText).getTime() / 1000;
		//确保数据模型正确
		dataProps.postedOn = new Date()
		dataProps.picture = picture
		console.log(dataProps)
		let data = new FormData()
		data.set('job', dataProps)

		axios
			.post('https://localhost:5001/api/jobs', dataProps, {
				processData: false,
				contentType: false,
			})
			.then((res) => {
				if (res.code === 200) {
					;<Message
						success
						header="Form Completed"
						content="发布成功"
					/>
				}
				console.log(res.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}

	return (
		<Modal
			onOpen={() => setOpen(true)}
			open={open}
			closeIcon
			onClose={() => setOpen(false)}
			trigger={<Button primary>Post</Button>}
		>
			<Modal.Header>Post新工作</Modal.Header>
			<Modal.Content>
				<Form>
					<Form.Checkbox
						required
						toggle
						name="IsActive"
						label="Active"
						checked={isActive}
						placeholder="IsActive"
						onChange={changeIsActive}
					/>

					<Form.Group widths="equal">
						<Form.Field
							control={Input}
							label="id"
							placeholder="id"
							onChange={changeId}
						/>
						<Form.Field
							required
							control={Input}
							label="Title"
							placeholder="Title"
							onChange={changeTitle}
						/>
						<Form.Field
							control={Input}
							label="Industry"
							placeholder="Industry"
							onChange={changeIndustry}
						/>
					</Form.Group>

					<Form.Field
						control={Input}
						label="Picture"
						placeholder="Picture Url"
						onChange={changePicture}
					/>

					<Form.Group widths="equal">
						<Form.Field
							id="form-input-control-Company"
							control={Input}
							label="Company"
							placeholder="Company"
							onChange={changeCompany}
						/>
						<Form.Field
							id="form-input-control-Location"
							control={Input}
							label="Location"
							placeholder="Location"
							onChange={changeLocation}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Field
							required
							control={Input}
							label="Email"
							placeholder="Email"
							onChange={changeEmail}
							width={7}
						/>
						<Form.Field
							required
							control={Input}
							label="PostedOn"
							placeholder="PostedOn"
							width={9}
						/>
					</Form.Group>

					<Form.Field
						id="form-textarea-control-opinion"
						control={TextArea}
						label="JobDesc"
						placeholder="工作描述"
						onChange={changeJobDesc}
					/>

					<Button
						type="submit"
						onClick={() => {
							saveJob()
							console.log('点击了发布工作')
						}}
					>
						<Icon name="save" />
						Post
					</Button>
				</Form>
			</Modal.Content>
		</Modal>
	)
}
export default AddJob
