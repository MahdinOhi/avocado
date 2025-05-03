import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SignUpButton from "./SignUpButton";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex w-[45%] mt-[2%] mb-[3%] items-center justify-between px-6 py-3 rounded-full shadow-[0_6px_0_0_rgba(0,0,0,0.8)] mx-auto bg-transparent">
            <Link to="/">
                <Logo />
            </Link>
            <NavLinks />
            <SignUpButton />
        </nav>
    );
}


