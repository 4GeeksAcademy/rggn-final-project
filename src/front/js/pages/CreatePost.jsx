import React, { useState, useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { Navigate, useNavigate } from "react-router-dom"

const initialState = {
    img: "",
    title: "",
    comment: "",
    date: new Date(),
    country: "",
    post_category: 0,
    city: ""
}

const CreatePost = () => {
    const navigate = useNavigate()
    const { actions } = useContext(Context)


    const [post, setPost] = useState(initialState)


    const handleChange = (event) => {
        event.preventDefault()
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
        console.log(post)
    }

    const handlePost = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("img", post.img)
        formData.append("title", post.title)
        formData.append("comment", post.comment)
        formData.append("date", post.date)
        formData.append("country", post.country)
        formData.append("post_category", post.post_category)
        formData.append("city", post.city)


        let response = await actions.addPost(formData)
        console.log(post)
        if (response) {
            navigate("/posts")
        }
        console.log(response)

    }


    const countries = ["Venezuela", "Argentina", "Ecuador"]
    const cities = ["Maracaibo", "Buenos Aires", "Quito"]

    return (
        <>
            <div className="post-container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="container mt-5 pt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-lg-4 left-container">
                            <div className="card p-2 bg-dark text-white">
                                <h1 className="h4 text-center mb-3">Crear publicacion</h1>
                                <form className="container" style={{ width: "100%" }} onSubmit={handlePost}>
                                    <div className="mb-2">
                                        <label htmlFor="txtTitle" className="form-label">Título</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="txtTitle"
                                            name="title"
                                            value={post.title}
                                            onChange={handleChange}
                                        // {/* date buscar funcion de date */ }
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="txtComment" className="form-label">Comentario</label>
                                        <textarea
                                            className="form-control"
                                            id="txtComment"
                                            rows="3"
                                            name="comment"
                                            value={post.comment}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="country" className="form-label">Pais:</label>
                                        <select
                                            className="form-select"
                                            name="country"
                                            onChange={handleChange}
                                            value={post.country}
                                        >
                                            <option value="">Select country</option>
                                            {countries.map((countries, index) => (
                                                <option key={index} value={countries}>{countries}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="city" className="form-label">Ciudad:</label>
                                        <select
                                            className="form-select"
                                            name="city"
                                            onChange={handleChange}
                                        >
                                            <option value="">Select city</option>
                                            {cities.map((city, index) => (
                                                <option key={index} value={city}>{city}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-2">
                                        <label className="form-label">Categoria</label>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="post_category"
                                                id="flexRadioDefault1"
                                                value={1}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">Destino</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="post_category"
                                                id="flexRadioDefault2"
                                                value={2}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">Gastronomía</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="post_category"
                                                id="flexRadioDefault3"
                                                value={3}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">Actividad</label>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="fileImg" className="form-label">Cargar Imagen</label>
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="fileImg"
                                            name="img"
                                            value={post.img}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <button className="btn btn-primary btn-sm w-100"> Crear Publicacion </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center pe-5 me-5 d-flex flex-column justify-content-center text-dark txt-big">
                            <h1 className="fade-right">Comparte contenido</h1>
                            <h5 className="fade-right">Crea una publicacion sobre tu aventura!</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CreatePost

