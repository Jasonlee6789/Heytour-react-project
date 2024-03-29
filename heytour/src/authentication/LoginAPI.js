import { useState, useEffect, useReducer, useRef } from 'react'

function authAPIReducer(state, action) {
	switch (action.type) {
		case 'AUTH_INIT':
			return {
				...state,
				isLoading: true,
				isError: false,
			}
		case 'AUTH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			}
		case 'AUTH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		default:
			throw new Error()
	}
}

export function useLogin(initialUser) {
	const didMountRef = useRef(false)
	//修改ref的值不会重新render,在组件更新时触发
	const mockData = {
		userName: 'JL',
		password: '123456',
	}

	const mockJsonRes =
		'{"firstName": "Admin", "lastName": "Lee", "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}'

	const data = JSON.parse(mockJsonRes)

	const [user, setUser] = useState(null)

	const [state, dispatch] = useReducer(authAPIReducer, {
		isLoading: false,
		isError: false,
		data: null,
	})

	useEffect(() => {
		function sleep(ms) {
			return new Promise((resolve) => setTimeout(resolve, ms))
		}

		async function authenticate() {
			dispatch({ type: 'AUTH_INIT' })
			await sleep(600)

			if (user.password === mockData.password) {
				dispatch({ type: 'AUTH_SUCCESS', payload: data })
			} else {
				dispatch({ type: 'AUTH_FAILURE' })
			}
		}

		if (didMountRef.current) {
			authenticate()
		} else {
			didMountRef.current = true
		}
	}, [data, mockData.password, user])

	return [state, setUser]
}
