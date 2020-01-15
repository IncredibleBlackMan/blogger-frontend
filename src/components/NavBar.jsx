import React, { Component } from 'react';
import logo from '../assets/img/logo.png';

class NavBar extends Component {
    render() {
        return (
            <div id="menu">
                <div id="top-menu" className="navigation">
                    <div className="logo">
                        <a href="/"><img src={ logo } alt="Blogger"/></a>
                    </div>
                            
                    <div className="navigation">
                        <div className="toggle-navigation">
                            <a href="/">
                            <i className="fa fa-bars fa-2x"></i></a>
                        </div>
                        <div className="nav-links" id="top-navigation">
                            <div className="dropdown">
                                <div className="dropbtn"> 
                                    <a href="/">Settings&nbsp;<i className="fa fa-caret-down"></i></a>
                                    </div>
                                <div className="dropdown-content" id="dropdwn">
                                    <a href="/">Reminders</a>
                                    <a href="logout.html">Logout</a>
                                </div>
                            </div>
                            <a href="/create">Add Entry</a>
                            <a href="/articles">Articles</a>
                            <a href="/">Home</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
