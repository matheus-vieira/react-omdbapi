import React, { memo } from "react";

const styleCard ={
    width: "375px"
}

const Movie = ({ items }) => {
  return (
    <div>
      <center>
        <h1>Resultados</h1>
      </center>
      {items.map((item, idx) => (
        <div className="card" key={item.imdbID} style={styleCard}>
          <img src={item.Poster} className="card-img-top" alt={item.Title} />
          <div className="card-body">
            <h5 className="card-title">{item.Title}</h5>
            <p className="card-text">{item.Plot}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(Movie);
