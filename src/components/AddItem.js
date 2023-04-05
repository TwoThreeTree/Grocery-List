import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, handleChange, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form
      id="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="addForm"
    >
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => {
          //   console.log("newItem is from additemjs:" + newItem);

          handleChange(e);
        }} // this trigger the update for newItem in the app.js
      />
      <button
        type="submit"
        aria-label="add item"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
