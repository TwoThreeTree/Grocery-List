import React from "react";

function Footer({ length }) {
  return <footer>{length === 1 ? `${length} item` : `${length} items`}</footer>;
}

export default Footer;
