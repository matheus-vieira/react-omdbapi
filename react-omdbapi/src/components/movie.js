import React from "react";

const Movie = (movie) => {
  return (
    <div>
      <center>
        <h1>Resultados</h1>
      </center>
      <div className="card">
        {<img src={movie.Poster} className="card-img-top" alt={movie.Title} />}
        <div className="card-body">
          {<h5 className="card-title">{movie.Title}</h5>}
          {<p className="card-text">{movie.Plot}</p>}
        </div>
      </div>
    </div>
  );
};

export default Movie;
