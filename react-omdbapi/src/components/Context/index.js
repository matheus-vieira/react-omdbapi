import React from "react";

const Context = React.createContext({
  items: [],
  setItems: () => {},
  selectedItem: null,
  setSelectedItem: () => {},
});

export const Provider = ({ children }) => {
  const [items, setItems] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState(null);
  return (
    <Context.Provider
      value={{ items, setItems, selectedItem, setSelectedItem }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
