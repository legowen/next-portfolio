import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function profile() {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = (-1 / 5) * x + 20;
      const rotateX = (4 / 30) * y - 20;
      overlay.style.backgroundPosition = `${x / 5 + y / 5}%`;
      container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseOut = () => {
      overlay.style.filter = "opacity(0)";
      container.style.transform =
        "perspective(350px) rotateY(0deg) rotateX(0deg)";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseout", handleMouseOut);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="container relative overflow-hidden" ref={containerRef}>
      <style jsx>{`
        .container {
          width: 220px;
          height: 310px;
          transition: all 0.1s;
        }
        .overlay {
          position: absolute;
          width: 220px;
          height: 310px;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255, 219, 112, 0.8) 20%,
            rgba(132, 50, 255, 0.6) 20%,
            transparent 54%
          );
          filter: brightness(1.2) opacity(0.8);
          mix-blend-mode: color-dodge;
          background-size: 150% 150%;
          background-position: 100%;
          transition: all 0.1s;
        }
        .card {
          width: 220px;
          height: 310px;
          background-image: url("/Profile.png"); // Adjust the path accordingly
          background-size: cover;
        }
      `}</style>
      <div className="overlay" ref={overlayRef}></div>
      <Image
        className="card"
        src="/Profile.png"
        width={500}
        height={500}
        alt="Profile"
      />
    </div>
  );
}
