
import React from "react";

export default function NavBar() {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>CareerAI</h1>
            <ul style={styles.navLinks}>
                <li><a href="/" style={styles.navLink}>Features</a></li>
                <li><a href="/about" style={styles.navLink}>About</a></li>
                <li><a href="/Sign in" style={styles.signInButton}>Sign in</a></li>
            </ul>
        </nav>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#4e54c8",
        borderBottom: "1px solid rgb(242, 234, 234)",
    },
    logo: {
        margin: 0,
        fontWeight: "bold",
        fontSize: "1.25rem",
        color: "white",
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "1.5rem",
        margin: 0,
        padding: 0,
    },
    navLink: {
        color: "#e0e0e0",
        padding: "0.6rem 1.5rem",
        borderRadius: "0.4rem",
        fontWeight: 500,
        textDecoration: "none",
        display: "inline-block",
        transition: "background 0.2s, color 0.2s",
        margin: 0,
        background: "none",
        border: "none",
        outline: "none",
        cursor: "pointer",
    },
    signInButton: {
        boxShadow: "0 4px 16px rgba(79, 209, 197, 0.25)",
        background: "white",
        color: "#181c24",
        borderRadius: "0.4rem",
        fontWeight: 600,
        padding: "0.6rem 1.5rem",
        transition: "box-shadow 0.2s, background 0.2s, color 0.2s",
        textDecoration: "none",
        display: "inline-block",
        border: "none",
        outline: "none",
        cursor: "pointer",
        margin: 0,
    },
};


