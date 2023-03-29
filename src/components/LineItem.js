import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete, handleChange }) => {
  return (
    <li className="item">
      <input
        onChange={() => handleCheck(item.id)}
        type="checkbox"
        checked={item.checked}
      />

      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => {
          handleCheck(item.id);
        }}
      >
        {item.item}
      </label>

      {/* <input
        id="numberInput"
        onChange={(e) => handleChange(e.target.value)}
        type="number"
      /> */}
      <FaTrashAlt
        onClick={() => {
          handleDelete(item.id);
        }}
        role="button"
        tabIndex="0"
      />
    </li>
  );
};

export default LineItem;