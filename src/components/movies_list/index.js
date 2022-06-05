import React from "react";
import { Link } from "react-router-dom";

import "./movies_list.css";

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie) => (
				<div className='image-container d-flex justify-content-start m-2'>
				<article key={movie.id}>
					<img src={movie.foto} alt={movie.nome}></img>
					<div
						className='overlay d-flex align-items-center justify-content-center'>
					<Link to={`/movie/${movie.id}`}>Acessar</Link>
					</div>
					</article>

				</div>
			))}
		</>
	);
};

export default MovieList;