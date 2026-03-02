import React, { useState } from "react";
import CategorySelector from "./components/CategorySelector";
import Flashcard from "./components/Flashcard";
import { getWords } from "./api";

function App() {
  const [words, setWords] = useState([]);

  const loadWords = (category) => {
    if (!category) return;

    getWords(category).then(res => {
      setWords(res.data);
    });
  };

  return (
  <div style={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "60px",
    fontFamily: "Arial, sans-serif"
  }}>
    <h1 style={{ marginBottom: "20px" }}>
      Arabic Vocabulary Flashcards
    </h1>

    <CategorySelector onSelect={loadWords} />
    <Flashcard words={words} />
  </div>
);
}

export default App;
