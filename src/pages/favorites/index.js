import React, {useState, useEffect} from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import MoviesList from "../../components/movies_list";
import RemoveFavourites from "../../components/RemoveFavourites";

const Favourites = ()=> {
    // const [favourites, setFavourites] = useState([]);

    // useEffect(() => {
    //     let movieFavourites = JSON.parse(localStorage.getItem('react-movie-app-favourites'));

    //     if(movieFavourites) {
    //         setFavourites(movieFavourites);
    //     }
    // }, []);

    // const saveToLocalStorage = (items) => {
	// 	localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	// };

    // const removeFavouriteMovie = (movie) => {
    //     const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
    //     saveToLocalStorage(newFavouriteList);
    //     toast.success('Filme Excluído com Sucesso!')
    // }




    // return (
    //     <div className='container-fluid movie-app'>
    //         <div className='row'>
	// 			<MoviesList
	// 				movies={favourites}
	// 				handleFavouritesClick={removeFavouriteMovie}
	// 				favouriteComponent={RemoveFavourites}
	// 			/>
	// 		</div>
    //     </div>
    // );

    // useEffect(() => {
    //     let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
    //     setFavourites(filmes);
    // }, []);

    // function excluirFilmes(id) {
    //     let filmes = favourites.filter((item) => {
    //         return item.id !== id;
    //     });
    //     setFavourites(filmes);
    //     localStorage.setItem("filmes", JSON.stringify(filmes));
    //     toast.success('Filme Excluído com Sucesso!')
    // }

    // return (
    //     <div className="meus-filmes">
    //         <h1>Meus Filmes</h1>
    //         {favourites.length === 0 && <span> Você não possui filmes salvos :(</span>}
    //         <ul>
    //         {favourites.map((item) => {
    //                 return (
    //                     <li key={item.id}>
    //                         <span> {item.nome} </span>
    //                         <div>
    //                             <Link to={`/movie/${item.id}`}>Ver Detalhes</Link>
    //                             <button onClick={() => excluirFilmes(item.id)}>Excluir</button>
    //                         </div>
    //                     </li>
    //                 );
    //             })}
    //         </ul>
    //     </div>
    // );
    
    return (<h1>Page 2</h1>);


}

export default Favourites;