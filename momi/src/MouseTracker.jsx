import { useState, useEffect } from "react";

function MouseTracker() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => {
      console.log("Component removed");
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div>
      <h2>X: {pos.x}</h2>
      <h2>Y: {pos.y}</h2>
    </div>
  );
}

export default MouseTracker;