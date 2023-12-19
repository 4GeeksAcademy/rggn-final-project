import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

const initialState = {
    img_post: "",
    title: "",
    comment: "",
    // date: new Date(),
    country: "",
    post_category: 0,
    city: ""
}

const CreatePost = () => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)

    const [post, setPost] = useState(initialState)


    const handleChange = (event) => {
        // event.preventDefault()
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
        // console.log(post)
    }

    const handlePost = async (event) => {
        event.preventDefault()


        const formData = new FormData()
        formData.append("img_post", post.img_post)
        formData.append("title", post.title)
        formData.append("comment", post.comment)
        // formData.append("date", post.date)
        formData.append("country", post.country)

        let response = await actions.addPost(formData)
        if (response) {
            navigate("/postviews")
        }
        // console.log(response)

    }

    // const handleImage = (event)=>{
    //     console.log(typeof event.target.files[0].type)
    //     if(event.target.files[0].type === "image/png"){
    //         let aux = post
    //         aux.img = event.target.files[0]
    //         setPost(aux)
    //         console.log(event.target.files[0])
    //     }else{
    //         console.log("No compatible")
    //     }
    // }

    const countries = ["Venezuela", "Argentina", "Ecuador"]
    const cities = ["Maracaibo", "Buenos Aires", "Quito"]

    // useEffect(() => {
    //     // console.log(post)
    // },[post])
    return (
        <>
            {
                store.token == null ?
                    <Navigate to={"/login"} /> :
                    <>
                        <div className="post-container d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                            <div className="container mt-5 pt-3">
                                <div className="row justify-content-center">
                                    <div className="col-md-5 col-lg-4 left-container">
                                        <div className="card p-2 bg-dark text-white">
                                            <h1 className="h4 text-center">Crear publicacion</h1>
                                            <form className="container" style={{ width: "100%" }} onSubmit={handlePost}>
                                                <div className="mb-1">
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

                                                <div className="mb-1">
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

                                                <div className="mb-1">
                                                    <label htmlFor="country" className="form-label">Pais:</label>
                                                    <select
                                                        className="form-select"
                                                        name="country"
                                                        onChange={handleChange}
                                                        value={post.country}
                                                    >
                                                        <option value="">Select country</option>
                                                        {countries.map((countries, index) => (
                                                            <option key={index} value={index + 1}>{countries}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="mb-1">
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

                                                <div className="mb-1">
                                                    <label className="form-label">Categoria</label>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="categories"
                                                            id="flexRadioDefault1"
                                                            value="destino"
                                                            onChange={handleChange}
                                                        />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">Destino</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="categories"
                                                            id="flexRadioDefault2"
                                                            value="gastronomia"
                                                            onChange={handleChange}
                                                        />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">Gastronomía</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="categories"
                                                            id="flexRadioDefault3"
                                                            value="actividad"
                                                            onChange={handleChange}

                                                        />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault3">Actividad</label>
                                                    </div>
                                                </div>

                                                <div className="mb-1">
                                                    <label htmlFor="fileImg" className="form-label">Cargar Imagen</label>
                                                    <input
                                                        className="form-control"
                                                        type="file"
                                                        id="fileImg"
                                                        name="img_post"
                                                        // value={post.img}
                                                        onChange={(event) => {
                                                            setPost({ ...post, img_post: event.target.files[0] })
                                                        }}
                                                    />
                                                </div>

                                                <div className="mb-1">
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
            }
        </>
    )

}

export default CreatePost

