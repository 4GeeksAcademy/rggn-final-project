import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";



export const PostViews = () => {

    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await actions.getMyPosts()
            // setPosts(data.data)
        }
        getData()
    }, [])

    // const handleEditClick = () => {

    //     navigate("/editPost");
    // };

    const handleDeleteClick = (id) => {

        Swal.fire({
            title: "Estas seguro?",
            text: "Importante! No podrás revertir esta acción.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Borrar Publicacion"
        }).then(async (result) => {
            if (result.isConfirmed) {
                actions.deletePost(id)
                Swal.fire({
                    title: "Borrada",
                    text: "Tu publicacion ha sido borrada.",
                    icon: "success"
                });
                navigate("/postviews");
            }
        });
    };




    return (
        <>
            <div className="post-views-container">
                <div className="post-card d-flex justify-content-center my-posts">
                    <div className="d-flex flex-column bd-highlight mb-3 text-center mt-4 pt-4">
                        <h1 className="text-white my-5 ms-2 text-center">Tus Publicaciones</h1>

                        {/* {store.myPost ==  && <p>hubo un error al cargar posts</p>}
                        {
                            store.myPosts.length <= 0 ?
                                <h1>No has cargado tu primer post todavía</h1> :
                                store.myPosts.map((item) => {
                                    return (
                                        <p>{item.id}</p>
                                    )
                                })
                        } */}

                        {store.myPosts && store.myPosts.length > 0 && store.myPosts.map((post, index) => {
                            return (<div key={post.id} className="card my-card bg-dark text-white" >
                                <div className="card-header">{post.country}

                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        style={{ color: "#ffffff", float: "left", marginTop: "3px", marginRight: "10px" }} />
                                    <FontAwesomeIcon
                                        icon={faTrashCan}
                                        onClick={() => handleDeleteClick(post.id)} style={{ color: "#ffffff", float: "right", marginTop: "3px", cursor: "pointer" }} />
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        onClick={() => navigate(`/editpost/${post.id}`)} style={{ color: "#ffffff", float: "right", marginTop: "3px", marginRight: "20px", cursor: "pointer" }} />

                                </div>
                                <img src={post.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.comment}</p>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default PostViews