import React from "react";
import { useClerk } from "@clerk/nextjs";  // Clerk hook
import { useRouter } from "next/navigation";

interface MainNavBarProps {
    onChangeForm?: (form: string) => void;  // optional now
    onSignOut?: () => void;                 // new prop for landing
}

export default function MainNavBar({ onChangeForm, onSignOut }: MainNavBarProps) {
    const { signOut } = useClerk();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        if (onSignOut) {
            onSignOut();     // let Landing handle redirect
        } else {
            router.push("/"); // fallback hard redirect
        }
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.brand}>
                <h1 style={styles.brandText}>CareerAI</h1>
            </div>

            <div style={styles.navItems}>
                {onChangeForm && (
                    <>
                        <button style={styles.navButton} onClick={() => onChangeForm("dashboard")}>Dashboard</button>
                        <button style={styles.navButton} onClick={() => onChangeForm("roadmap")}>My Roadmap</button>
                        <button style={styles.navButton} onClick={() => onChangeForm("resume-review")}>Resume Review</button>
                        <button style={styles.navButton} onClick={() => onChangeForm("progress")}>Progress</button>
                        <button style={styles.navButton} onClick={() => onChangeForm("settings")}>Settings</button>
                    </>
                )}

                {/* 🔥 Global Sign Out */}
                <button style={styles.navButton} onClick={handleSignOut}>
                    Sign Out
                </button>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: "black",
        color: "white",
        padding: "0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "100vw",
        position: "fixed" as const,
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    brand: {
        display: "flex",
        alignItems: "center",
        marginLeft: "20px",
    },
    brandText: {
        fontSize: "24px",
        fontWeight: "bold",
        margin: 0,
        color: "white",
    },
    navItems: {
        display: "flex",
        gap: "20px",
        marginRight: "20px",
    },
    navButton: {
        backgroundColor: "transparent",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        transition: "background-color 0.2s ease",
    },
};
