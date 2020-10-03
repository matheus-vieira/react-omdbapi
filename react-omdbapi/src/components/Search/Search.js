import React from "react";
import { search } from "../../service/media";
import Context from "../Context";

const OPTIONS = [
  { value: "movie", id: "radTypeFilmes", text: "Filmes" },
  { value: "series", id: "radTypeSeries", text: "Séries" },
];

const Search = () => {
  const [type, setType] = React.useState("movie");
  const { setItems, setShowMore, setIndex } = React.useContext(Context);
  const inputSearch = React.useRef();

  const handleType = React.useCallback(
    (e) => {
      setType(e.target.value);
    },
    [setType]
  );

  const handleSearch = React.useCallback(async () => {
    const term = inputSearch.current.value || "";
    const results = await search(term, type);
    const newShowMore = results.Search.length < results.totalResults;

    setItems(results.Search || []);
    setShowMore(newShowMore);
    setIndex(1);
  }, [inputSearch, type, setItems, setShowMore, setIndex]);

  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div
        className="btn-group btn-group-toggle btn-block"
        data-toggle="buttons"
      >
        {OPTIONS.map((option) => (
          <label
            className={
              option.value === type
                ? "btn btn-primary active font-weight-bolder"
                : "btn btn-primary"
            }
            key={option.id}
          >
            <input
              type="radio"
              name="radType"
              id={option.id}
              onClick={handleType}
              value={option.value}
            />
            {option.text}
          </label>
        ))}
      </div>
      <div className="form-group">
        <label htmlFor="txtSearch">Filme ou série</label>
        <input
          id="txtSearch"
          type="search"
          className="form-control"
          ref={inputSearch}
          aria-describedby="searchHelp"
        />
        <small id="searchHelp" className="form-text text-muted">
          O nome da série ou filme que deseja consultar
        </small>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default Search;
