import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <section class="nav-container">
        
        <div class="nav-block">
            <Link to="/clock" class="button">
                Analog Clock
            </Link>
        </div>

        <div class="nav-block">
            <Link to="/tic-tac-toe" class="button">
                Tic Tac Toe
            </Link>
        </div>
        
        <div class="nav-block">
            <Link to="/calculator" class="button">
                Calculator
            </Link>
        </div>



        {/* <div class="nav-block">
            <Link to="/" class="button">
                Little Piano
            </Link>
        </div> */}

    </section>
    )}