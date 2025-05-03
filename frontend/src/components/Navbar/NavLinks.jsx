import React from "react";
import { NavLink } from "react-router-dom";

const links = ["About Us", "Blogs", "Pricing", "FAQs"];

export default function NavLinks() {
    return (
        <div className="flex space-x-6 font-medium">
            {links.map(link => (
                <NavLink
                    key={link}
                    to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                    className={({ isActive }) =>
                        isActive ? "underline text-black" : "text-black"
                    }
                >
                    {link}
                </NavLink>
            ))}
        </div>
    );
}
