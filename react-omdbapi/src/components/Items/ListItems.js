import React, { memo } from "react";
import Context from "../Context";

const ListItems = () => {
  const { items, setSelectedItem } = React.useContext(Context);

  if (items.length === 0)
    return (
      <div>
        <center>Nenhum resultado encontrado</center>
      </div>
    );

  return (
    <div>
      <center>
        <h1>Resultados</h1>
      </center>
      {items.map((item) => (
        <div className="card" key={item.imdbID} style={{ width: "375px" }}>
          <div className="card-body">
            <h5 className="card-title">{item.Title}</h5>
            <p className="card-text">{item.Plot}</p>
            <button
              type="button"
              onClick={() => {
                setSelectedItem(item);
              }}
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#itemModal"
            >
              Detalhes
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(ListItems);
