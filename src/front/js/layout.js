import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Landing } from "./component/landing";
import { Donations } from "./component/donations.jsx";
import { Services } from "./component/services.jsx";
import { About } from "./component/about.jsx";
import { Login } from "./component/login.jsx";
import { Signup } from "./component/signup.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    // if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") //return <BackendURL/ >; 

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar /> 

                    <Routes>
                        <Route element={<Login />} path="/login" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Services />} path="/services" />
                        <Route element={<About />} path="/about" />
                        <Route element={<Donations />} path="/donations" />
                        <Route element={<Home />} path="/" />
                    </Routes>

                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
}

export default injectContext(Layout);
