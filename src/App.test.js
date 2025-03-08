import React from "react";
import ReactDOM from "react-dom/client";

const TasteOfTamils = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Taste of Tamils 🍛</h1>
      <p style={styles.description}>
        Experience the rich and ancient Tamil cuisine with a modern touch.
      </p>
      <button style={styles.button} onClick={() => alert("Welcome to Taste of Tamils!")}>
        Explore Menu
      </button>
    </div>
  );
};

// Simple CSS styles as an object
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "50px",
    backgroundColor: "#f8f1e4",
    height: "100vh",
  },
  title: {
    color: "#8B0000",
    fontSize: "2.5rem",
  },
  description: {
    fontSize: "1.2rem",
    color: "#333",
    margin: "20px 0",
  },
  button: {
    backgroundColor: "#8B0000",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: "5px",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(<TasteOfTamils />);
