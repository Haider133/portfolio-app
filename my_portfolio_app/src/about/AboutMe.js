import React, { useState } from 'react';
import "../styles/aboutMe.css";
import subheadingsData from "./subheadingsData";


const AboutMe = () => {
  const [showFullContent, setShowFullContent] = useState(false);
  const initialContent = subheadingsData[2][0].content;

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="about-me">
      <p className={showFullContent ? "full-content" : "short-content"}>
        {initialContent}
      </p>
      {initialContent.length > 5 * 75 && (
        <button onClick={toggleContent} className="read-more-button">
          {showFullContent ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default AboutMe;
