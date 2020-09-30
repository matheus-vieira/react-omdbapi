import React, { useEffect, useState } from "react";
import Movie from "./components/movie";

let searchTerm = "star wars";
let type = "series";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}&type=${type}&apikey=17cb3543`)
      .then((r) => r.json())
      .then((m) => {
        console.log(m);
        setItems(m.Search);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="container">
      <Movie items={items} />
    </div>
  );
};

export default App;
