"use client";
import NavBar from "./NavBar"; // adjust path as needed
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    useClerk,
    useUser,
} from '@clerk/nextjs'

export default function Landing() {
    const { isSignedIn } = useUser()
    const { openSignIn, signOut } = useClerk()
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

    const handleSignOut = async () => {
        await signOut();      // clear Clerk session
        router.push("/");     // back to landing
    };

    return (
        <div style={styles.page}>
            <NavBar onSignOut={handleSignOut} />
            <div style={styles.container}>
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
            </div>
        </div>
    );
}

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
        position: "relative" as const,
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
