import React, { useState } from "react";
import "./EventPage.css";

const EventPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Current card index

  const events = [
    { id: 1, title: "International Conference on Advances in Science, Engineering, and Technology (ICASET)", description: " A conference that unites professionals from science, engineering, and IT sectors for discussions and knowledge sharing. The event is organized both offline and online. On July 30-31, 2024.", link: "https://www.event1.com" },
    { id: 7, title: "InnovaUDIMA University Innovation Conference with Educational Technology", description: " The conference focuses on innovation in educational technology and offers a platform for sharing knowledge with the academic community. Dates: October 24-25, 2024", link: "https://www.event2.com" },
    { id: 6, title: "Annual National Conference of Epidemiology Foundation of India (EFICON-2024)", description: "This event focuses on public health and evidence-based interventions, offering insights into the epidemiology of India. Dates: November 29-30, 2024", link: "https://www.event3.com" },
    { id: 5, title: "FICCI International Fragrance Business Summit", description: "This summit, focusing on advancing sustainable opportunities in the fragrance industry, includes tech discussions related to business innovations. Dates: October 25, 2024", link: "https://www.event4.com" },
    { id: 4, title: "National Postgraduate Convention of the Indian Academy of Oral Medicine and Radiology", description: "This convention will focus on technological advances in medical imaging, including radiology and oral medicine. Dates: August 23-24, 2024", link: "https://www.event5.com" },
    { id: 3, title: "International Conferences of Chief Justices of the World", description: " Though mainly a legal conference, it will also discuss technological tools used in legal processes. Dates: November 20-24, 2024", link: "https://www.event6.com" },
    { id: 2, title: "Software Exhibition", description: "On 6th of December", link: "https://www.event7.com" },
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
                <div id="text-clor">
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
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-navigation">
          <button className="prev-button" onClick={prevCard}>Previous</button>
          <button className="next-button" onClick={nextCard}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
