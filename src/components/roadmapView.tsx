import React from "react";

export default function RoadmapView() {
    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h1 style={styles.title}>My Career Roadmap</h1>

                {/* Top row with skills boxes */}
                <div style={styles.skillsRow}>
                    <div style={styles.skillsBox}>
                        <h2 style={styles.boxTitle}>Skills You Have</h2>
                        <div style={styles.skillsList}>
                            <div style={styles.skillItem}>JavaScript</div>
                            <div style={styles.skillItem}>React</div>
                            <div style={styles.skillItem}>HTML/CSS</div>
                            <div style={styles.skillItem}>Git</div>
                        </div>
                    </div>

                    <div style={styles.skillsBox}>
                        <h2 style={styles.boxTitle}>Skills You Need</h2>
                        <div style={styles.skillsList}>
                            <div style={styles.skillItem}>TypeScript</div>
                            <div style={styles.skillItem}>Node.js</div>
                            <div style={styles.skillItem}>Database Design</div>
                            <div style={styles.skillItem}>AWS</div>
                        </div>
                    </div>
                </div>

                {/* Bottom learning path box */}
                <div style={styles.learningPathBox}>
                    <h2 style={styles.boxTitle}>Your 6 Month Learning Path</h2>
                    <div style={styles.pathContent}>
                        <div style={styles.monthSection}>
                            <h3 style={styles.monthTitle}>Month 1-2</h3>
                            <p style={styles.monthDescription}>Master TypeScript fundamentals and advanced JavaScript concepts</p>
                        </div>
                        <div style={styles.monthSection}>
                            <h3 style={styles.monthTitle}>Month 3-4</h3>
                            <p style={styles.monthDescription}>Learn Node.js backend development and API design</p>
                        </div>
                        <div style={styles.monthSection}>
                            <h3 style={styles.monthTitle}>Month 3-4</h3>
                            <p style={styles.monthDescription}>Learn Node.js backend development and API design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    page: {
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "0px",
        height: "100vh",
        overflow: "hidden",
    },
    container: {
        width: "95%",
        maxWidth: "1200px",
        padding: "8px",
        height: "calc(100vh - 90px)",
        display: "flex",
        flexDirection: "column" as const,
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#333",
        textAlign: "center" as const,
    },
    skillsRow: {
        display: "flex",
        gap: "15px",
        marginBottom: "15px",
        flex: 1,
        minHeight: 0,
    },
    skillsBox: {
        flex: 1,
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        padding: "15px",
        border: "2px solid #e9ecef",
        display: "flex",
        flexDirection: "column" as const,
        minHeight: 0,
    },
    boxTitle: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "15px",
        color: "#333",
        textAlign: "center" as const,
    },
    skillsList: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "10px",
        flex: 1,
    },
    skillItem: {
        backgroundColor: "white",
        padding: "10px 14px",
        borderRadius: "8px",
        border: "1px solid #dee2e6",
        fontSize: "14px",
        color: "#495057",
        fontWeight: "500",
    },
    learningPathBox: {
        backgroundColor: "#f8f9fa",
        borderRadius: "12px",
        padding: "10px",
        border: "2px solid #e9ecef",
        flex: 1,
        minHeight: 0,
    },
    pathContent: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "10px",
        height: "100%",
    },
    monthSection: {
        backgroundColor: "white",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #dee2e6",
        flex: 1,
        minHeight: 0,
    },
    monthTitle: {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "6px",
        color: "#333",
    },
    monthDescription: {
        fontSize: "13px",
        color: "#666",
        lineHeight: 1.3,
        margin: 0,
    },
};
