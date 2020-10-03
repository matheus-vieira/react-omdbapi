import React from "react";

const Context = React.createContext({
  items: [],
  setItems: () => {},
  selectedItem: null,
  setSelectedItem: () => {},
  showMore: true,
  setShowMore: () => {},
  index: 1,
  setIndex: () => {},
});

export const Provider = ({ children }) => {
  const [items, setItems] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [showMore, setShowMore] = React.useState(true);
  const [index, setIndex] = React.useState(1);
  return (
    <Context.Provider
      value={{
        items,
        setItems,
        selectedItem,
        setSelectedItem,
        showMore,
        setShowMore,
        index,
        setIndex,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
