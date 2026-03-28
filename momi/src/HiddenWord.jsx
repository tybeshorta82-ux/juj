import { useState, useEffect } from "react";

function HiddenWord() {
  const hiddenWord = "secret";
  const [typed, setTyped] = useState("");
  const [found, setFound] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      setTyped((prev) => {
        const updated = prev + e.key;

        if (updated.includes(hiddenWord)) {
          setFound(true);
        }

        return updated;
      });
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h2>Type something...</h2>
      {found && <h1>{hiddenWord}</h1>}
    </div>
  );
}

export default HiddenWord;