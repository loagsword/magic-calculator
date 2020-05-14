import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
    <section class="container">

        {/* <div class="block">
            <Link to="/" class="button">
                Home
            </Link>
        </div> */}
        
        <div class="block">
            <Link to="/clock" class="button">
                Analog Clock
            </Link>
        </div>
        
        <div class="block">
            <Link to="/calculator" class="button">
                Calculator
            </Link>
        </div>



        {/* <div class="block">
            <Link to="/" class="button">
                Little Piano
            </Link>
        </div> */}

    </section>
    )}