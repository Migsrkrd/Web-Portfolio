export default function Footer() {
    const styles = {
        footer: {
        backgroundColor: "#282c34",
        color: "white",
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        },
    };
    return (
        <div className="footer" style={styles.footer}>
        <p>Michael Reickerd</p>
        </div>
    );
    }