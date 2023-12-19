const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: sessionStorage.getItem("token") || null,
			user: sessionStorage.getItem("user_id") || null,
			posts: [],
			onePost: [],
			myPosts: []
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
						getActions().getMyPosts()
						setStore({
							token: result.token,
							user_id: result.user_id
						})
						sessionStorage.setItem("token", result.token)

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
				return respuesta

			},

			logOut: () => {
				sessionStorage.removeItem("token")
				// localStorage.removeItem("token")
				setStore({
					token: null
				})
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});


				//reset the global store
				setStore({ demo: demo });
			},

			addPost: async (post) => {
				let store = getStore();
				let actions = getActions()
				console.log(post)
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/posts`, {
						method: "POST",
						headers: {
							"Authorization": `Bearer ${store.token}`
						},
						body: post
					}
					)
					// const data = await response.json()
					console.log(response)
					if (response.ok) {
						actions.getAllPosts()
						actions.getMyPosts()
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
				const { apiFetch } = getActions()
				const response = await apiFetch("/posts")
				if (response.msg == "ok") {
					console.log(response)
					setStore({ posts: response.data })
					return response
				}
				return false
			},

			getMyPosts: async () => {
				let store = getStore();
				// console.log(post)
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/getPostUser`, {
						method: "GET",
						headers: {
							"Authorization": `Bearer ${store.token}`
						},
					})
					let data = await response.json()

					if (response.ok) {
						console.log(data, "myPost")
						setStore({ myPosts: data })
						return response
					} else {
						return false
					}

				} catch (error) {
					console.log(error)
				}
			},

			getOnePost: async (id) => {
				let store = getStore()
				const { apiFetch } = getActions()
				try {

					let response = await fetch(`${process.env.BACKEND_URL}/getOnePost/${id}`, {
						method: "GET",
						headers: {
							"Authorization": `Bearer ${store.token}`
						},
					})
					let data = await response.json()
					if (response.ok) {
						console.log(response)
						console.log(response.data)
						setStore({ onePost: data })
						return response
					}
				} catch (error) {
					console.log(error)
					return false
				}

				return response
			},


			editPost: async (id, post) => {
				let store = getStore();
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/editPost/${id}`, {
						method: "PUT",
						headers: {
							"Authorization": `Bearer ${store.token}`
						},
						body: post
					})
				} catch (error) {
					console.log(error)
				}
			},

			deletePost: async (id) => {
				let store = getStore();
				try {
					let response = await fetch(`${process.env.BACKEND_URL}/deletePost/${id}`, {
						method: "DELETE",
						headers: {
							"Authorization": `Bearer ${store.token}`
						},
					})
					let newPosts = store.posts.filter((onePost) => onePost.id != id)
					setStore({
						posts: newPosts
					})
				} catch (error) {
					console.log(error)
				}
			}

		}
	};
};

export default getState;
