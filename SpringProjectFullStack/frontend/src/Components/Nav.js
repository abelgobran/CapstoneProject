import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="container">
            <img id="img" alt ="inventory" src="https://www.autosinnovate.org/innovation/Automotive%20Privacy/auto%20privacy-data%20and%20connected%20consumers.jpg" />
            <nav>
                <h1 className="title">Vehicle Inventory</h1>
                <ul>
                    <li><Link to='Inventory'>Home</Link></li>

                    <li><Link to='edit'>Edit</Link></li>

                    <li><Link to='addcar'>Add Vehicle</Link></li>

                </ul>
            </nav>
        </div>
    )
}
export default Nav