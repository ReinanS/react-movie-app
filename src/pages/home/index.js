import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

import MoviesList from "../../components/movies_list";
import AddFavourites from "../../components/AddFavourites";

import "./home.css";
import SearchBox from "../../components/SearchBox";

const Home = () => {
    const [movies, setMovies] = useState([]);
    // const [favourites, setFavourites] = useState([]);
    // const [searchValue, setSearchValue] = useState('');

    // const getMovieRequest = async (searchValue)  => {
    //     let url = "http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8";
    //     let response;

    //     try {
    //         response = await axios.get(url);

    //     } catch (error) {
    //         console.error(error);
    //     }

    //     if(response.data.Search) {
    //         setMovies(response.data.Search);
    //     }
    // };

    const getMovieRequest = async ()  => {
        let url = "https://sujeitoprogramador.com/r-api/?api=filmes";
        let response;

        try {
            response = await axios.get(url);

        } catch (error) {
            console.error(error);
        }

        if(response.data) {
            setMovies(response.data);
        }
    };

    useEffect(() => {
        getMovieRequest();
    }, []);
    


    // useEffect(() => getMovieRequest(), []);

    // useEffect(() => {
    //     const moviesFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

    //     if (moviesFavourites) {
    //         setFavourites(moviesFavourites);
    //     }
    // }, []);

    // const saveLocalStorage = (items) => {
    //     localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    // };

    // const addFavouriteMovie = (movie) => {
    //     const newFavouriteList = [...favourites, movie];
    //     setFavourites(newFavouriteList)
    //     saveLocalStorage(newFavouriteList);
    // }

    return (
        <div className="container-fluid movie-app">
            <div className="row d-flex align-itens-center mt-4 mb-4">
                <MoviesList 
                    movies={movies}
                />
            </div>
        </div>
    );

}

export default Home;