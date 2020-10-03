import React from "react";
import Search from "../Search/Search";
import ListItems from "../Items/ListItems";
import Item from "../ItemDialog/ItemDialog";
import { Provider } from "../Context";

const App = () => (
  <Provider>
    <div className="container">
      <h1 className="text-center">
        Buscar Filmes na Open Movie Database API (OMDBAPI)
      </h1>
      <Search />
      <ListItems />
      <Item />
    </div>
  </Provider>
);

export default App;
