import React from 'react';

import Navbar from './Navbar'

export default function Header() {
    return (
        <section class="header">
            <div>Mini-Projects with Javascript</div>
            <div class="sub-header">
                <a href="https://github.com/loagsword/miniprojects-with-javascript" target="_blank" rel="noopener noreferrer">View Project on Github </a>
            </div>
            <Navbar />
        </section>
    );
}