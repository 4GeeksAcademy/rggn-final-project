import React from "react";

export const PostViews = () => {

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

                        <div>
                            VENEZUELA
                            <div className="card my-card border border-danger" >
                                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            ARGENTINA
                            <div className="card my-card border border-danger" >
                                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            PERU
                            <div className="card my-card border border-danger" >
                                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostViews
