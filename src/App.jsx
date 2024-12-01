import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = window.VANTA.BIRDS({
      el: vantaRef.current,
      THREE: window.THREE, // Access THREE.js globally
      mouseControls: true,
  scale: 1.00,
  scaleMobile: 1.00,
  colorMode: "lerp",
  birdSize: 1.80,
  separation: 40.00,
  alignment: 45.00,
  quantity: 2.00
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="vanta-bg">
      <div className="content">
        <h1>Vite + React + Vanta</h1>
        <p>Enjoy the birds effect!</p>
      </div>
    </div>
  );
}

export default App;
