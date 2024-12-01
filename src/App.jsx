import { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = window.VANTA.BIRDS({
      el: vantaRef.current,
      THREE: window.THREE,
      mouseControls: true,
      scale: 1.0,
      scaleMobile: 1.0,
      colorMode: "lerp",
      birdSize: 1.8,
      separation: 40.0,
      alignment: 45.0,
      quantity: 2.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
      <div ref={vantaRef} className="vanta-bg">
        <div className="content-container">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
