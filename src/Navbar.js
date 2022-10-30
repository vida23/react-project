import React from "react";
import Bookings from "./Bookings";

const Navbar = () => {
    return (
        <nav className="navbar" id="navBarBackground" role={"navigation"} aria-label="main navigation">



            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">

                        <a class="button is-rounded" href="./Bookings.js">
                            Option 1
                            <img src="./favicon-16x16.png" height="28">
                            </img>
                        </a>

                        <a class="button is-rounded">
                            Option 2
                            <img src="./favicon-16x16.png" height="28">
                            </img>
                        </a>

                        <a class="button is-rounded">
                            Option 3
                            <img src="./favicon-16x16.png" height="28">
                            </img>
                        </a>


                    </div>
                </div>
            </div>
            <div className="navbar-brand">

                <div className="navbar-end">
                    <a class="navbar-item">

                        <img src="./favicon-16x16.png" height="28">
                        </img>
                    </a>
                </div>

            </div>

        </nav>
    )


};
export default Navbar;
