import React from 'react';
import header_css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () =>{
    return (
        <div className={header_css.header}>
            <div className={header_css.logo}>
                P1K0 - Онлайн
            </div>
            <div className={header_css.nav_header}>
                <NavLink exact to='/news' activeClassName={header_css.activeLink}>News</NavLink>
                <NavLink to="/messeges" activeClassName={header_css.activeLink}>Messeges</NavLink>
                <NavLink to="/profile" activeClassName={header_css.activeLink}>Profile</NavLink>
            </div>
        </div>
    )
}

export default Header;