"use client";
import React from "react";

export default function Dashboard() {
    return (
        <div style={styles.page}>
            <h1 style={styles.title}>Create Your Career Roadmap</h1>
            <p style={styles.description}>Upload your resume and set your career goals to get started</p>

            <div style={styles.container}>
                <h2 style={styles.containerTitle}>Get started</h2>
                <div style={styles.contentArea}>
                    <div style={styles.inputRow}>
                        <div style={styles.uploadSection}>
                            <label style={styles.uploadLabel}>Resume Upload</label>
                            <div style={styles.uploadArea}>
                                <p style={styles.uploadText}>Click to upload resume</p>
                            </div>
                        </div>

                        <div style={styles.goalSection}>
                            <label style={styles.goalLabel}>Career Goal</label>
                            <input
                                type="text"
                                placeholder="e.g., Software Engineer at Google"
                                style={styles.goalInput}
                            />
                        </div>
                    </div>

                    <button style={styles.generateButton}>
                        Generate my personalized roadmap
                    </button>
                </div>
            </div>
        </div>
    )
}

const styles = {
    page: {
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "50px",
    },
    title: {
        fontSize: "48px",
        fontWeight: "bold",
        marginBottom: "16px",
        color: "#333",
    },
    description: {
        fontSize: "18px",
        color: "#666",
    },
    container: {
        width: "80%",
        maxWidth: "800px",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        padding: "20px",
        marginTop: "30px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    containerTitle: {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "15px",
        color: "#333",
    },
    contentArea: {
        minHeight: "300px", // Example height, adjust as needed
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05)",
    },
    inputRow: {
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
    },
    uploadSection: {
        flex: 1,
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        padding: "10px",
        border: "1px dashed #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
    },
    uploadLabel: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#333",
    },

    uploadArea: {
        width: "100%",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        border: "2px dashed #007bff",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        marginTop: "10px",
    },
    uploadText: {
        fontSize: "16px",
        color: "#007bff",
        fontWeight: "500",
        textAlign: "center" as const,
        margin: 0,
    },
    fileTypes: {
        fontSize: "12px",
        color: "#666",
        marginTop: "8px",
        textAlign: "center" as const,
        margin: 0,
    },
    goalSection: {
        flex: 1,
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        padding: "10px",
        border: "1px dashed #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
    },
    goalLabel: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#333",
    },
    goalInput: {
        width: "100%",
        height: "100px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "14px",
        color: "black",
        boxSizing: "border-box" as const,
        resize: "none" as const,
    },
    generateButton: {
        width: "100%",
        padding: "15px",
        backgroundColor: "#6f42c1",
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        marginTop: "20px",
    },
};
