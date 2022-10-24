import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                <li className="menu_item">
                    <NavLink 
                        to={`form/`}
                        style={({ isActive }) => ({
                            'textDecoration': isActive ? "underline" : "none"
                        })}
                    >Форма</NavLink>
                </li>
                <li className="menu_item">
                    <NavLink 
                        to={`color/`}
                        style={({ isActive }) => ({
                            'textDecoration': isActive ? "underline" : "none"
                        })}
                        >Палитра</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu