import React from "react";
import Context from "../Context";

const ItemDialog = () => {
  const { selectedItem } = React.useContext(Context);
  const shouldShow = React.useMemo(() => Boolean(selectedItem), [selectedItem]);
  console.log(selectedItem, shouldShow);
  return (
    shouldShow && (
      <div
        className={`modal fade ${shouldShow ? "show" : ""}`}
        id="itemModal"
        tabIndex="-1"
        aria-labelledby="itemModalLabel"
        aria-hidden={shouldShow ? "false" : "true"}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="itemModalLabel">
                {selectedItem.Title} - {selectedItem.Type === "movie" ? "Filme" : "Série"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4">
                  {Boolean(selectedItem.Poster === "N/A") && (
                    <svg
                      className="bd-placeholder-img"
                      width="260"
                      height="450"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Sem imagem"
                    >
                      <title>{selectedItem.Title} (sem imagem)</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                    </svg>
                  )}
                  {Boolean(selectedItem.Poster !== "N/A") && (
                    <img
                      src={selectedItem.Poster}
                      width="260"
                      height="450"
                      className="bd-placeholder-img"
                      focusable="false"
                      alt={selectedItem.title}
                      aria-label={selectedItem.title}
                    />
                  )}
                </div>
                <div className="col-md-8">
                  <dl>
                    <dt>Data de Lançamento</dt>
                    <dd>{selectedItem.Released}</dd>
                    <dt>Atores</dt>
                    <dd>{selectedItem.Actors}</dd>
                    <dt>Diretor</dt>
                    <dd>{selectedItem.Director}</dd>
                    <dt>Escritor</dt>
                    <dd>{selectedItem.Writer}</dd>
                    <dt>Gênero</dt>
                    <dd>{selectedItem.Genre}</dd>
                    <dt>Sinopse</dt>
                    <dd>{selectedItem.Plot}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >Fechar</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ItemDialog;
