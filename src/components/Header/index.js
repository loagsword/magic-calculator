import React from 'react';

import Navbar from './Navbar'
import './style.css'

export default function Header() {
    return (
        <section class="header">
            <div>Mini-Projects with Javascript</div>
            <div class="sub-header">
                <a href="https://github.com/loagsword/javascript-miniprojects/" target="_blank" rel="noopener noreferrer">View Project on Github </a>
            </div>
            <Navbar />
        </section>
    );
}