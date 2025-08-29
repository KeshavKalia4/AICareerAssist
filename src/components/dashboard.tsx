"use client";
import React from "react";
import MainNavBar from "./mainNavBar";
import { useState } from "react";
import RoadmapView from "./roadmapView";
import ResumeReviewView from "./resumeReviewView";
import ProgressView from "./progressView";
import SettingsView from "./settingsView";

export default function Dashboard() {

    const [activeForm, setActiveForm] = useState("dashboard");



    return (
        <div style={styles.page}>
            <MainNavBar onChangeForm={setActiveForm} />

            {activeForm === "dashboard" && (
                <>
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
                </>
            )}

            {activeForm === "roadmap" && <RoadmapView />}
            {activeForm === "resume-review" && <ResumeReviewView />}
            {activeForm === "progress" && <ProgressView />}
            {activeForm === "settings" && <SettingsView />}
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
        paddingTop: "80px",
    },
    title: {
        fontSize: "42px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#333",
        textAlign: "center" as const,
    },
    description: {
        fontSize: "18px",
        color: "#666",
        marginBottom: "40px",
        textAlign: "center" as const,
        maxWidth: "600px",
    },
    container: {
        width: "98%",
        maxWidth: "1200px",
        backgroundColor: "#f5f5f5",
        borderRadius: "12px",
        padding: "40px",
        marginTop: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    containerTitle: {
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#333",
        textAlign: "center" as const,
    },
    contentArea: {
        minHeight: "400px",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "30px",
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
        height: "140px",
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
        height: "140px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        fontSize: "16px",
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
