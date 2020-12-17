import React from 'react'
import './style.css'

function App() {
    return (
        <React.Fragment>
            <nav>
                <ul id="menu">
                    <li><a href="#top">Home</a></li>
                    <li><a href="#top">About Us</a></li>
                    <li><a href="#top">Our Menu</a></li>
                    <li><a href="#top">Contact Us</a></li>
                </ul>
            </nav>
            <section id="hero">
                <div id="cta">
                    <a href="#top">
                        Make a Booking
        </a>
                </div>
            </section>
            <section id="about-us">
                <div className="content">
                    <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
                </div>
            </section>
        </React.Fragment>
    );
}

export default App;
