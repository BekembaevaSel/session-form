import React from 'react'
import styled from 'styled-components'

import Container from '../UI/Container/Container'
import Button from '../UI/Button/Button'
import Input from '../UI/input/Input'

import { useState, useEffect } from 'react'

const StyledForm = styled.form`
	width: 500px;
	background-color: pink;
	height: 500px;
	margin: 0 auto;
	margin-top: 100px;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const FromContainer = styled.div`
	padding-top: 60px;
`

const Forms = () => {
	const [userInput, setUserInput] = useState({
		name: '',
		email: '',
		number: '',
	})

	const UserInputChangeHandler = (event) => {
		const key = event.target.name
		setUserInput((prevState) => {
			return {
				...prevState,
				[key]: event.target.value,
			}
		})
	}

	const [data, setData] = useState(
		JSON.parse(localStorage.getItem('users')) || [],
	)

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(data))
	}, [data])

	const GetDataHandler = () => {
		const localData = JSON.parse(localStorage.getItem('users'))
		console.log(localData)
	}

	const SubmitHandler = (event) => {
		event.preventDefault()
		setData([...data, userInput])
	}

	return (
		<StyledForm onSubmit={SubmitHandler}>
			<FromContainer>
				<h1>user story</h1>
				<Container>
					<Input
						name='name'
						type='text'
						onChange={UserInputChangeHandler}
					/>
				</Container>
				<Container>
					<Input name='email' onChange={UserInputChangeHandler} />
				</Container>
				<Container>
					<Input
						name='number'
						type='number'
						onChange={UserInputChangeHandler}
					/>
				</Container>
				<Button title='SEND' type='submit' />
			</FromContainer>
			<Button
				title='receive'
				type='button'
				primary={true}
				onClick={GetDataHandler}
			/>
		</StyledForm>
	)
}
export default Forms
