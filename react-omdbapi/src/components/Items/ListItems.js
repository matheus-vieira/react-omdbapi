import React, { memo } from "react";
import Context from "../Context";

const ListItems = () => {
  const { items, setSelectedItem } = React.useContext(Context);

  if (items.length === 0)
    return (
      <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <center>Nenhum resultado encontrado</center>
      </div>
    );

  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div className="row mb-2">
        {items.map((item) => (
          <div className="col-md-6" key={item.imdbID}>
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary"></strong>
                <div className="mb-1 text-muted">
                  Ano: {item.Year} - {item.Type === "movie" ? "Filme" : "Série"}
                </div>
                <h3 className="mb-0">{item.Title}</h3>
                <p className="card-text mb-auto">{item.Plot}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItem(item);
                  }}
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#itemModal"
                >
                  Mais informações
                </button>
              </div>
              <div className="col-auto d-none d-lg-block">
                {Boolean(item.Poster === "N/A") && (
                  <svg
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Sem imagem"
                  >
                    <title>{item.Title} (sem imagem)</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                  </svg>
                )}
                {Boolean(item.Poster !== "N/A") && (
                  <img
                    src={item.Poster}
                    className="bd-placeholder-img"
                    width="200"
                    height="250"
                    focusable="false"
                    alt={item.title}
                    aria-label={item.title}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ListItems);
