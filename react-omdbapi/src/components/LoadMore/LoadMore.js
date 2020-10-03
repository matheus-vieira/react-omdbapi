import React from "react";
import { loadMore } from "../../service/media";
import Context from "../Context";

const LoadMore = () => {
  const {
    items,
    setItems,
    showMore,
    setShowMore,
    index,
    setIndex,
  } = React.useContext(Context);

  const handleClick = React.useCallback(async () => {
    const newIndex = index + 1;
    const newList = await loadMore(newIndex);
    const concatItems = items.concat(newList.Search);
    const newShowMore = concatItems.length < newList.totalResults;
    setIndex(newIndex);
    setItems(concatItems);
    setShowMore(newShowMore);
  }, [index, items, setItems, setShowMore, setIndex]);

  return (
    showMore && (
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        onClick={handleClick}
      >
        Carregar mais
      </button>
    )
  );
};

export default React.memo(LoadMore);
