import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Movie from "../pages/movie";
import Header from "../components/header";
import Favourites from "../pages/favorites";

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";


const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/movie/:id" element={<Movie/>} />
                <Route path="/favourites" element={<Favourites />}/>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    );
}

export default MainRoutes;



