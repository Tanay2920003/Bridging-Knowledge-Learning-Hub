import React, { useState } from "react";
import "./LearnPage.css";

// SubjectItem Component
const SubjectItem = ({ subject, toggleMarked, markedSubjects }) => {
  return (
    <li className="subject-item">
      <div className="subject-info">
        <img
          src={subject.image}
          alt={`Course on ${subject.name}`}
          className="subject-image"
        />
        <div className="subject-details">
          <span>{subject.name}</span>
          <button
            className="mark-button"
            onClick={() => toggleMarked(subject.name)}
            aria-label={`Mark ${subject.name} as completed`}
          >
            {markedSubjects[subject.name] ? "Completed" : "Mark"}
          </button>
        </div>
      </div>
      <a
        href={subject.url}
        target="_blank"
        rel="noopener noreferrer"
        className="course-link"
        aria-label={`Go to ${subject.name} course`}
      >
        Go to Course
      </a>
    </li>
  );
};

const LearnPage = () => {
  const [markedSubjects, setMarkedSubjects] = useState({});

  const toggleMarked = (subjectName) => {
    setMarkedSubjects((prev) => ({
      ...prev,
      [subjectName]: !prev[subjectName],
    }));
  };

  const courses = [
    {
      name: "ARTIFICIAL INTELLIGENCE",
      subjects: [
        {
          name: "Artificial Intelligence (AI) for Investments",
          url: "https://onlinecourses.nptel.ac.in/update_profile_and_register?user_email=&raw_slug=/noc25_mg08",
          image: "https://storage.googleapis.com/swayam2-node/Jan2023_coursecard_images/noc23-mg63.jpg",
        },
        {
          name: "Artificial Intelligence using Prolog Programming",
          url: "https://onlinecourses.swayam2.ac.in/update_profile_and_register?user_email=&raw_slug=/nou25_cs07",
          image: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nou23_cs14/AI-CoursePic.jpg",
        },
      ],
    },
    {
      name: "Machine Learning",
      subjects: [
        {
          name: "A Basic Course in Machine Learning for All",
          url: "https://onlinecourses.swayam2.ac.in/update_profile_and_register?user_email=&raw_slug=/imb25_mg56",
          image: "https://storage.googleapis.com/swayam2-node/July2022_CourseCardimages/noc22-cs84.png",
        },
        {
          name: "Machine Learning Using Python Programming",
          url: "https://onlinecourses.swayam2.ac.in/update_profile_and_register?user_email=&raw_slug=/ini25_cs02",
          image: "https://storage.googleapis.com/swayam2-node/INI_coursecards_jan%202025/ini25_cs02.jpg",
        },
      ],
    },
    {
      name: "Internet Of Things",
      subjects: [
        {
          name: "Internet of Things and AI Cloud Specialization",
          url: "https://www.coursera.org/specializations/internet-of-things",
          image: "https://images-ext-1.discordapp.net/external/Rs94ztL6qL3JPOvYK85Uk0IZtIV0PJ2qoXOznKgYdRk/https/s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~SPECIALIZATION%21~internet-of-things/XDP~SPECIALIZATION%21~internet-of-things.jpeg",
        },
        {
          name: "Introduction to IoT and Digital Transformation",
          url: "https://www.netacad.com/courses/introduction-iot?courseLang=en-US",
          image: "https://images-ext-1.discordapp.net/external/NS5uZ-sQHajA5ayCztCOMgs0wcxbAe_wqyFrwDGNXZk/%3Fut%3D1619654083258/https/www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/26173437-6058-48a2-b0fb-aa312eda0570/image.png",
        },
      ],
    },
  ];

  return (
    <div className="learn-page">
      <h1>Learn & Experience</h1>
      <p>Learn more Technology and Projects</p>

      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <h3>{course.name}</h3>
            <ul className="subject-list">
              {course.subjects.map((subject, idx) => (
                <SubjectItem
                  key={idx}
                  subject={subject}
                  toggleMarked={toggleMarked}
                  markedSubjects={markedSubjects}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
