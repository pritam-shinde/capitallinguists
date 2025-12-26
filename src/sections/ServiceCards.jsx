import React from "react";

export default function ServiceCards() {
  const cardStyle = {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "24px 20px",
    width: "320px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    border: "2px solid #3f51b5",
    textAlign: "center",
  };

  const iconStyle = {
    fontSize: "32px",
    color: "#3f51b5",
    marginBottom: "12px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "8px",
    color: "#1f2937",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "20px",
  };

  const buttonStyle = {
    background: "#3f51b5",
    color: "#fff",
    border: "none",
    padding: "10px 22px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Card 1 */}
      <div style={cardStyle}>
        <div style={iconStyle}>👤</div>
        <div style={titleStyle}>Live Interpreters</div>
        <div style={textStyle}>
          Available by phone, video, or in person
        </div>
        <button style={buttonStyle}>INSTANT QUOTE</button>
      </div>

      {/* Card 2 */}
      <div style={cardStyle}>
        <div style={iconStyle}>✍️</div>
        <div style={titleStyle}>Document Translation</div>
        <div style={textStyle}>
          Translate documents, books, or websites
        </div>
        <button style={buttonStyle}>INSTANT QUOTE</button>
      </div>
    </div>
  );
}
