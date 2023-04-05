import React from "react";

function Footer({ items, length }) {
  let total = 0;

  items.forEach((element) => {
    total += element.price;
  });

  return (
    <footer className="footer">
      <p>{length === 1 ? `${length} item` : `${length} items`}</p>

      <p>{`Total: $ ${total.toFixed(2)}`}</p>
    </footer>
  );
}

export default Footer;
