import React from "react";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete, handleChange }) => {
  return (
    <ul>
      {items.map((element) => (
        <LineItem
          key={element.id}
          item={element}
          // handleChange={handleChange}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        ></LineItem>
      ))}
    </ul>
  );
};

export default ItemList;
