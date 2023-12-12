import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const PostViews = () => {

    const { store, actions } = useContext(Context)
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await actions.getAllPosts()
            setPosts(data)
        }
        getData()
    }, [])
    return (
        <>
            {/* NAVBAR */}
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <a className="navbar-brand" href="#">Hidden brand</a>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* POSTS */}
                <div className="d-flex justify-content-center my-posts">
                    <div className="d-flex flex-column bd-highlight mb-3">

                        <br />
                        POSTS
                        <hr></hr>
                        <div className="card my-card border border-danger" >
                        <div className="card-header">ARGENTINA</div>
                        <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>


                    {/* {store.posts == false && <p>hubo un error al cargar posts</p> }
                    {store.posts && store.posts.length > 0 && store.posts.map((post, index) => {
                        return ()
                    })} */}
                        
                    </div>
                    <br />


                </div>
            </div>
        </>
    )
}

export default PostViews
