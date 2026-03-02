import React, { useState, useEffect } from "react";

function Flashcard({ words }) {
  const [index, setIndex] = useState(0);
  const [showArabic, setShowArabic] = useState(false);

  // Reset card when category changes
  useEffect(() => {
    setIndex(0);
    setShowArabic(false);
  }, [words]);

  if (!words.length) return <p>No words available</p>;

  const word = words[index];

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "16px",
        width: "350px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "all 0.3s ease"
      }}
    >
      <h2>{word.english}</h2>

      {showArabic && (
        <h2
          style={{
            marginTop: "20px",
            fontSize: "28px",
            direction: "rtl",
            color: "#1976d2"
          }}
        >
          {word.arabic}
        </h2>
      )}

      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "10px" }}>
        {/* Flip Button */}
        <button
          onClick={() => setShowArabic(!showArabic)}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#1976d2",
            color: "white",
            cursor: "pointer"
          }}
        >
          Flip
        </button>

        {/* Next Button */}
        <button
          onClick={() => {
            setIndex((index + 1) % words.length);
            setShowArabic(false);
          }}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#555",
            color: "white",
            cursor: "pointer"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Flashcard;