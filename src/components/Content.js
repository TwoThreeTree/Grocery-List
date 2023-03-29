import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete, handleChange }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          // handleChange={handleChange}
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
