import React, { useState } from "react";
import "./EventPage.css";

const EventPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Current card index

  const events = [
    { id: 1, title: "Event 1", description: "Details about Event 1", link: "https://www.event1.com" },
    { id: 7, title: "Event 2", description: "Details about Event 2", link: "https://www.event2.com" },
    { id: 6, title: "Event 3", description: "Details about Event 3", link: "https://www.event3.com" },
    { id: 5, title: "Event 4", description: "Details about Event 4", link: "https://www.event4.com" },
    { id: 4, title: "Event 5", description: "Details about Event 5", link: "https://www.event5.com" },
    { id: 3, title: "Event 6", description: "Details about Event 6", link: "https://www.event6.com" },
    { id: 2, title: "Event 7", description: "Details about Event 7", link: "https://www.event7.com" },
  ];

  // Navigate to next card
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  // Navigate to previous card
  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  return (
    <div className="event-page">
      <div className="carousel-box">
        <h1>Events & Announcements</h1>
        <div className="carousel-container">
          <div
            className="carousel"
            style={{
              transform: `rotateY(${currentCardIndex * (360 / events.length)}deg)`,
            }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                className="carousel-card"
                style={{
                  transform: `rotateY(${(index * 360) / events.length}deg) translateZ(300px)`,
                  opacity: 1, // All cards have full opacity
                  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                }}
              >
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <a
                  href={event.link}
                  className="learn-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-navigation">
          <button className="prev-button" onClick={prevCard}>Previous</button>
          <button className="next-button" onClick={nextCard}>ㅤNextㅤ</button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
