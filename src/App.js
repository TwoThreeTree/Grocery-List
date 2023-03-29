import "./App.css";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";
import SearchItem from "./components/SearchItem";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  // const [price, setPrice] = useState(0);

  // saving each input for differentiating purposes

  const textInput = document.querySelector("#addItem");

  const numberInput = document.querySelector("#numberInput");

  const setAndSaveItems = (item) => {
    setItems(item);

    localStorage.setItem("shoppinglist", JSON.stringify(item));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => {
      return item.id !== id;
    });
    setAndSaveItems(listItems);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item, price: 0 };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  const handleChange = (event) => {
    // console.log(event.target);
    // console.log(textInput);

    // if (event.target.id === textInput.id) {
    //   alert("clicked");
    setNewItem(event.target.value);
    // }
    // if (event.target.id === numberInput.id) {
    //   alert("number");
    // }
    // console.log(event);
  };

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem search={search} setSearch={setSearch} />

      <Content
        items={items.filter((item) => {
          // console.log(item.item.includes(search));
          return item.item.toLowerCase().includes(search.toLowerCase());
        })}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        // handleChange={handleChange}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
