import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div class="content has-text-centered">
        {`Copyright © Vida Rashidi ${year}`}
      </div>

    </footer>


  )
};
export default Footer;
