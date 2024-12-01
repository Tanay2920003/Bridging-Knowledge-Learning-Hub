import React, { useState } from "react";
import "./EventPage.css";

const EventPage = () => {
  const [currentAngle, setCurrentAngle] = useState(0); // Current rotation angle
  const [isDragging, setIsDragging] = useState(false); // Drag state
  const [startX, setStartX] = useState(0); // Starting X-coordinate of drag

  const events = [
    { id: 1, title: "Event 1", description: "Details about Event 1" },
    { id: 2, title: "Event 2", description: "Details about Event 2" },
    { id: 3, title: "Event 3", description: "Details about Event 3" },
    { id: 4, title: "Event 4", description: "Details about Event 4" },
    { id: 5, title: "Event 5", description: "Details about Event 5" },
    { id: 6, title: "Event 6", description: "Details about Event 6" },
  ];

  // Handle when the mouse drag starts
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX); // Record starting X position
  };

  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX; // Calculate horizontal drag distance
    const newAngle = currentAngle + deltaX * 0.3; // Adjust sensitivity with multiplier
    setCurrentAngle(newAngle);
    setStartX(e.clientX); // Update startX for smooth rotation
  };

  // Handle when the mouse drag ends
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="event-page"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves container
    >
      <h1>3D Revolving Carousel</h1>
      <div
        className="card-container"
        style={{
          transform: `rotateY(${currentAngle}deg)`,
        }}
      >
        {events.map((event, index) => (
          <div
            key={event.id}
            className="event-card"
            style={{
              transform: `rotateY(${index * (360 / events.length)}deg) translateZ(300px)`,
            }}
          >
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
