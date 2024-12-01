import React, { useState, useEffect } from 'react';
import './EventPage.css';

const THRESHOLD = 100;

const EventPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [deltaX, setDeltaX] = useState(0);

  const events = [
    { id: 1, title: "Event 1", description: "Details about Event 1" },
    { id: 2, title: "Event 2", description: "Details about Event 2" },
    { id: 3, title: "Event 3", description: "Details about Event 3" },
    { id: 4, title: "Event 4", description: "Details about Event 4" },
  ];

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    const newDeltaX = event.touches[0].clientX - startX;
    setDeltaX(newDeltaX);
  };

  const handleTouchEnd = () => {
    if (deltaX > THRESHOLD) { // Swiped left - next card
      handleNextCard();
    } else if (deltaX < -THRESHOLD) { // Swiped right - potential action (optional)
      // Implement logic for right swipe (e.g., like button)
    }
    setStartX(null);
    setDeltaX(0);
  };

  useEffect(() => {
    if (deltaX === 0) return; // No swipe, do nothing

    const resetCard = () => {
      setDeltaX(0);
    };

    const timeoutId = setTimeout(resetCard, 300);

    return () => clearTimeout(timeoutId);
  }, [deltaX]);

  const handleNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  return (
    <div className="event-page">
      <h1>Event</h1>
      <p>Here are the upcoming events.</p>

      <div className="card-container">
        {events.map((event, index) => {
          const zIndex = index === currentIndex ? 10 : index > currentIndex ? 5 : 1;
          const scale = index === currentIndex ? 1 : 0.9;
          const position = index === currentIndex ? 'center' : 'left';

          const cardStyle = {
            zIndex,
            transform: `scale(${scale}) translateX(${position === 'left' ? 50 : deltaX}%)`,
            transition: 'transform 1s ease, z-index 1s ease',
          };

          return (
            <div
              key={event.id}
              className="event-card"
              style={cardStyle}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          );
        })}
      </div>

      <div className="card-navigation">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default EventPage;