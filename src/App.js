import "./App.css";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import SearchItem from "./components/SearchItem";
function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );

  const [newItem, setNewItem] = useState("");
  // newItem is just a holder variable to keep the value from "form input"
  // then whenever form is submitted then newItem will be added into items
  const [search, setSearch] = useState("");
  const [newPrice, setPrice] = useState(0);
  // const [price, setPrice] = useState(0);
  // const [itemPrice, setPrice] = useState({});
  // saving each input for differentiating purposes

  useEffect(() => {
    console.log("effect");
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  const handleCheck = (id, event) => {
    const number = priceChange();
    flipBool(id, number);
  }; // flip check attribute

  const priceChange = (message) => {
    const input = prompt(message || "enter the cost: ");

    const number = Number(input);
    return isNaN(number) ? priceChange("enter again, number only") : number;
  };

  const flipBool = (id, number) => {
    const updatedList = items.map((item) => {
      return item.id === id
        ? {
            ...item,
            checked: number === 0 ? !item.checked : true,
            price: number,
          }
        : item;
    });

    setItems(updatedList);
  };

  // const handleCheck = (id, event) => {
  //   const listItems = items.map((item) => {
  //     return item.id === id ? { ...item, checked: !item.checked } : item;
  //   });
  //   setItems(listItems);
  //   const individualItem = items.find((i) => {
  //     return i.id === id;
  //   });
  //   if (individualItem.checked === false) {
  //     const input = prompt("Please enter a number:");
  //     const number = Number(input);
  //     if (isNaN(number)) {
  //       alert("Invalid input. Please enter a number.");
  //       const listItems2 = items.map((item) => {
  //         return item.id === id ? { ...item, checked: false } : item;
  //       });
  //       setItems(listItems2);
  //     } else {
  //       const listItems3 = items.map((item) => {
  //         return item.id === id
  //           ? { ...item, checked: true, price: number }
  //           : item;
  //       });
  //       setItems(listItems3);
  //     }
  //   } else if (individualItem.checked === true) {
  //     const listItems4 = items.map((item) => {
  //       return item.id === id
  //         ? { ...item, checked: !item.checked, price: 0 }
  //         : item;
  //     });
  //     setItems(listItems4);
  //   }

  //   if (event.target.className === "priceTag") {
  //     const input2 = prompt("Please enter a number:");
  //     const number2 = Number(input2);
  //     const listItems = items.map((item) => {
  //       return item.id === id
  //         ? { ...item, checked: true, price: number2 }
  //         : item;
  //     });
  //     setItems(listItems);
  //   }
  // }; //this code is too long, TODO: shorten the logic

  const handleDelete = (id) => {
    const listItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(listItems);
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item, price: 0 };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const newItem = event.target[0].value;
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

      <Footer items={items} length={items.length} />
    </div>
  );
}

export default App;
