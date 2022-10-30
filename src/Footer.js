import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div class="columns">
        <div class="column">
          Social Media: <br />
          <a href="https://www.facebook.com/vida.rashidi/">Facebook</a> <br />
          <a href="https://www.instagram.com/vidarashidi">Instagram</a> <br />
          <a href="https://www.linkedin.com/in/vida-rashidi-9045b2198/">LinkedIn</a> <br />

        </div>
        <div class="column">
          My projects <br />
          coming soon...
        </div>
       
        <div class="column">
         About Me <br />
        </div>

        <div class="column">
          Contact Me <br />
        </div>
      </div>

      <div class="content has-text-centered">
        {`Copyright © Vida Rashidi ${year}`} 
        <img src="./favicon-16x16.png" height="28"></img>
      </div>

    </footer>


  )
};
export default Footer;