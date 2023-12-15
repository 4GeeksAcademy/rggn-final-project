const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			token: localStorage.getItem("token") || null,
			user: sessionStorage.getItem("user_id") || null

		},
		actions: {
			// Use getActions to call a function within a fuction

			apiFetch: async (route, method = "GET", body = null) => {

				let parametros = { method }
				if (body) {
					parametros.body = JSON.stringify(body)
					let headers = { "Content-Type": "application/json", 'Access-Control-Allow-Origin': "*" }
					parametros.headers = headers
				}

				const respuesta = await fetch(process.env.BACKEND_URL + route, parametros)
				if (!respuesta.ok) return { "msg": "error: " + respuesta.statusText }
				const data = await respuesta.json()
				return { data, "msg": "ok" }
			},

			login: async (data) => {
				let store = getStore()
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/login`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					})

					if (response.ok) {
						let result = await response.json()
						console.log(result)
						setStore({
							token: result.token,
							user_id: result.user_id
						})
						localStorage.setItem("token", result.token)

					}
					return response.status

				} catch (error) {
					console.log(error)
				}
			},



			signup: async (name, email, password, countries) => {

				const { apiFetch } = getActions()
				const respuesta = await apiFetch("/signup", "POST", { name, email, password, countries })
				console.log(respuesta)

				// try {
				// 	const response = await fetch('/signup', {
				// 		method: 'POST',
				// 		headers: {
				// 			'Content-Type': 'application/json',
				// 		},
				// 		body: JSON.stringify({
				// 			email: formData.get('email'),
				// 			name: formData.get('name'),
				// 			password: formData.get('password'),
				// 			countries: formData.get('countries'),
				// 		}),
				// 	});

				// 	if (!response.ok) {
				// 		throw new Error('Error al crear el usuario');
				// 	}

				// 	const data = await response.json();
				// 	console.log('Usuario creado exitosamente:', data.msg);
				// } catch (error) {
				// 	console.error('Error:', error.message);
				// }
			},

			logOut: () => {
				sessionStorage.removeItem("token")
				setStore({
					token: null
				})
			},



			addPost: async (post) => {
				let store = getStore();
				console.log(post)
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/posts`, {
						headers: {
							"Authorization": `Bearer ${store.token}`
						},
						method: "POST",
						headers: {
							"Authorization": "Bearer "+store.token
						},
						body: post
					}
					)
					const data = await response.json()
					console.log(data)
					if (response.ok) {
						return true
					} else {
						return false
					}

				} catch (error) {
					console.log(error)
				}
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getAllPosts: async () => {
				// const { apiFetch } = getActions()
				// const response = await apiFetch("/posts")
				// if (response.msg == "ok") {
				// 	return response
				// }
				// return false
				let store = getStore()
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/posts`, {
						headers: {
							"Authorization": `Bearer ${store.token}`
						}
					})

					if (response.ok) {
						let result = await response.json()
						setStore({
							posts: result
						})
					}
					if (response.status == 401 || response.status == 422) {
						getActions().logout()
					}
					console.log(response.status)
				} catch (error) {
					conasole.log(error)
				}
			}


		}
	};
};





export default getState;
