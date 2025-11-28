import React from "react";

export default function Popup({ open, title, text, onClose }) {
  if (!open) return null;

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <h2>{title}</h2>
        <p>{text}</p>

        <button style={styles.btn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: "fixed",
    top: 0, left: 0, width: "100%", height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 999
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "350px",
    textAlign: "center",
    animation: "zoomIn 0.3s ease"
  },
  btn: {
    marginTop: "15px",
    padding: "10px 20px",
    background: "#007bff",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer"
  }
};
