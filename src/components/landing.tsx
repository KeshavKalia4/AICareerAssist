"use client";
import NavBar from "./NavBar"; // adjust path as needed
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
    useClerk,
    useUser,
} from '@clerk/nextjs'

export default function Landing() {
    const { isSignedIn } = useUser()
    const { openSignIn, signOut } = useClerk() // You can combine these
    const router = useRouter();
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        if (isSignedIn) {
            router.push("/dashboard");
        } else {
            openSignIn({
                afterSignInUrl: "/dashboard",
                afterSignUpUrl: "/dashboard"
            });
        }
    };

    // Temporary sign out button
    const handleSignOut = () => {
        console.log("Signing out");
        signOut();
    };

    return (
        <div style={styles.page}>
            <NavBar />
            <div style={styles.container}>
                {/* ADD THE SIGN OUT BUTTON HERE */}
                {isSignedIn && (
                    <button
                        onClick={handleSignOut}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'red',
                            color: 'white',
                            padding: '10px 15px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        🚨 Sign Out (Debug)
                    </button>
                )}

                <h1 style={styles.title}>Your AI Career Roadmap</h1>
                <p style={styles.paragraph}>
                    Upload your resume, share your career goals, and get a personalized roadmap to success with AI-powered insights.
                </p>
                <button
                    onClick={handleClick}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{
                        ...styles.button,
                        borderColor: hover ? "#aaa" : "#ddd",
                        backgroundColor: hover ? "#e0f0ff" : "white",
                    }}
                >
                    Get Started
                </button>

                {/* Debug info */}
                <div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
                    <p>🐛 Debug: Signed In = {isSignedIn ? 'YES' : 'NO'}</p>
                </div>
            </div>
        </div>
    );
}

// Your styles stay the same...
const styles = {
    page: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column" as const,
    },
    container: {
        background: "linear-gradient(135deg,rgb(115, 100, 230) 0%, #FFFFFF 100%)",
        color: "black",
        flex: 1,
        padding: "2rem",
        position: "relative" as const, // Add this so the absolute positioned button works
    },
    title: {
        color: "white",
        fontSize: "120px",
        fontWeight: "bold",
        textAlign: "center" as const,
        fontFamily: "Arial, sans-serif",
    },
    paragraph: {
        color: "white",
        fontSize: "30px",
        lineHeight: 1.5,
        textAlign: "center" as const,
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
    },
    button: {
        backgroundColor: "white",
        color: "#734CE2",
        border: "2px solid #ddd",
        padding: "25px 50px",
        borderRadius: "28px",
        fontSize: "24px",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        outline: "none",
        marginTop: "70px",
        marginLeft: "550px",
        fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    },
};