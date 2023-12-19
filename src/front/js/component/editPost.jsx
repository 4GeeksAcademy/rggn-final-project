import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";


const initialState = {
  title: "",
  comment: ""
}

export const EditPost = () => {
  const { id } = useParams()
  const { store, actions } = useContext(Context)
  const [detailPost, setDetailPost] = useState({})
  const [post, setPost] = useState(initialState)
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await actions.getOnePost(id)
    }
    getData()
  }, [])


  const handleSaveChanges = (event) => {
    setPost({
      ...post, [event.target.name]: event.target.value
    })

  }

  const handleEditPost = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("title", post.title)
    formData.append("comment", post.comment)

    let response = await actions.editPost(id, formData)
    console.log(response)
    navigate("/postviews");

  }

  return (
    <>
      {store.token === null ?
        <Navigate to={"/login"} /> :
        <>
          <div className="donations-area d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div className="card bg-dark text-white" style={{ width: "400px" }}>
              <div className="card-body">
                <form className="container">
                  <h1 className="text-center">Editar Publicacion</h1>
                  <div className="mb-2">
                    <label htmlFor="txtTitle" className="form-label">
                      Título:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="txtTitle"
                      placeholder={store.onePost.title}
                      maxLength="20"
                      name="title"
                      value={post.title}
                      onChange={handleSaveChanges}
                    />
                    <small className="text-muted">Máximo 20 caracteres</small>
                  </div>

                  <div className="mb-2">
                    <label htmlFor="txtComment" className="form-label">
                      Comentario:
                    </label>
                    <textarea
                      className="form-control"
                      id="txtComment"
                      rows="3"
                      placeholder={store.onePost.comment}
                      maxLength="120"
                      name="comment"
                      value={post.comment}
                      onChange={handleSaveChanges}
                    >
                    </textarea>
                    <small className="text-muted">Máximo 120 caracteres</small>
                  </div>

                  <div className="mb-2">
                    <button onClick={handleEditPost} className="btn btn-primary btn-sm w-100">Guardar Cambios</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      }
    </>

  );
};

export default EditPost;