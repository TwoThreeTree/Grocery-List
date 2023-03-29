import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => {
          //   console.log("newItem is from additemjs:" + newItem);

          handleChange(e);
        }}
      />
      <button type="submit" aria-label="add item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
