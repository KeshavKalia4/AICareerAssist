import React from "react";

export default function RoadmapView() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>My Roadmap</h1>
        </div>
    );
}

const styles = {
    container: {
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
        color: "#333",
    },
};
