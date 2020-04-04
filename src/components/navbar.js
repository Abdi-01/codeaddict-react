import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class NavbarPage extends Component {

    render() {
        return (
            <div className="size-navbar" style={{ textAlign: "right", paddingRight: '4.5vw' }}>
                <NavLink to="/" style={{ fontSize: '1.4vw' }} >
                    <button style={{ backgroundColor: '#00CCFF', border: 0, height: '4.6vw', padding: "12px 15px 0px 15px", textAlign: 'center', color: 'white' }}>
                        Home
                    </button>
                </NavLink>
                <NavLink to="/profile" style={{ fontSize: '1.4vw' }} activeClassName="activeClass">
                    <button style={{ backgroundColor: 'transparent', border: 0, height: '4.6vw', padding: "12px 15px 0px 15px", textAlign: 'center', color: 'white' }}>
                        Profile
                    </button>
                </NavLink>
                <NavLink to="/portfolio" style={{ fontSize: '1.4vw' }} activeClassName="activeClass">
                    <button style={{ fontSize: '1.4vw', backgroundColor: 'transparent', border: 0, height: '4.6vw', padding: "12px 15px 0px 15px", textAlign: 'center', color: 'white' }}>
                        Portfolio
                </button>
                </NavLink>
            </div>
        );
    }
}

export default NavbarPage;