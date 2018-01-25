import React from 'react';
import {
    BrowserRouter,
    Link
} from 'react-browser-router';
import './Navigation.css';

export default function Navigation () {
    return (
        <div className = "Navigation">
            <BrowserRouter>
                <div className = "Navigation--links">
                    <div className = "Navigation--links_item">Abby Tiffany</div>
                    <div className = "Navigation--links_item"><Link to="/projects">Projects</Link></div>                        
                    <div className = "Navigation--links_item"><Link to="/about">About Me</Link></div>
                    <div className = "Navigation--links_item"><Link to="/connect">Connect</Link></div>
                </div>
            </BrowserRouter>
      </div>
    );
}