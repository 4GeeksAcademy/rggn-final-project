import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const PostViews = () => {

    const { store, actions } = useContext(Context)
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await actions.getAllPosts()
            // setPosts(data.data)
        }
        getData()
    }, [])
    console.log(store.posts)
    

    
    return (
        <>
            <div>          
                {/* POSTS */}
                <div className="d-flex justify-content-center my-posts">
                    <div className="d-flex flex-column bd-highlight mb-3">
                        <br />
                        POSTS
                        <hr></hr>
                        {store.posts === false && <p>hubo un error al cargar posts</p>}
                        {store.posts && store.posts.length > 0 && store.posts.map((post, index) => {
                            return (<div key={index} className="card my-card border border-danger" >
                                {/* <div className="card-header">{post.country}</div> */}
                                <h5 className="card-title">{post.title}</h5>
                                <img src={post.img} className="card-img-top" alt="..." />
                                <div className="card-body">                                    
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
