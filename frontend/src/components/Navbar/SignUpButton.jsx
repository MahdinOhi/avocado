import React, { useState } from "react";

export default function SignUpButton() {
    const [hovered, setHovered] = useState(false);

    const style = {
        backgroundColor: "#e4f1b9",
        padding: "0.5rem 1.5rem",
        borderRadius: "9999px",
        fontWeight: "bold",
        color: "#f06a2c",
        transition: "transform 0.3s ease",
        transform: hovered ? "scale(1.1)" : "none",
    };

    return (
        <button
            style={style}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            Sign up
        </button>
    );
}
