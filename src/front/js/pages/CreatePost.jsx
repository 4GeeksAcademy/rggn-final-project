import React, { useState, useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { Navigate, useNavigate } from "react-router-dom"

const CreatePost = () => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)

    const [post, setPost] = useState(
        {
            img: "",
            title: "",
            comment: "",
            date: new Date(),
            country: "",
            post_category: "",
            city: ""
        }
    )


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
        let response = await actions.registerPost(post)
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
            <div className="container">
                <hr></hr>
                <hr></hr>
                <hr></hr>
                <h1>Post</h1>
                <form className="container" onSubmit={handlePost}>
                    <label for="formFile" class="form-label">Título</label>
                    <input
                        class="form-control"
                        type="text"
                        id="txtTitle"
                        name="title"
                        value={post.title}
                        onChange={handleChange} />

                    <label for="formFile" className="form-label">Comentario</label>
                    <textarea
                        className="form-control"
                        type="textarea"
                        id="txtComment"
                        rows="3"
                        name="comment"
                        value={post.comment}
                        onChange={handleChange} />
                    {/* date buscar funcion de date */}

                    <br></br>

                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Pais:</label>
                        <select
                            className="form-select"
                            name="country"
                            onChange={handleChange}
                            value={post.country}
                        >
                            <option value="">Select country</option>
                            {countries.map((countries, index) => {
                                return (<option key={index} value={countries}>{countries}</option>)
                            })}
                        </select>
                    </div>

                    <br></br>

                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Ciudad:</label>
                        <select
                            className="form-select"
                            name="city"
                            onChange={handleChange}
                        >
                            <option value="">Select city</option>
                            {cities.map((cities, index) => {
                                return (<option key={index} value={cities}>{cities}</option>)
                            })}
                        </select>
                    </div>

                    <br></br>

                    <label for="formFile" class="form-label">Categoria</label>
                    <div class="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="post_category"
                            id="flexRadioDefault1"
                            value="destino" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Destino
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="post_category"
                            id="flexRadioDefault2"
                            value="gastronomia" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Gastronomía
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="post_category"
                            id="flexRadioDefault2"
                            value="actividad" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Actividad
                        </label>
                    </div>
                    <br></br>
                    <label for="formFile" class="form-label">Cargar Imagen</label>
                    <input
                        className="form-control"
                        type="file"
                        id="fileImg"
                        name="img"
                        value={post.img}
                        onChange={handleChange} />
                    <br></br>
                    <button className="btn btn-primary w-100"> Create Post </button>
                </form>
            </div>
        </>
    )

}

export default CreatePost