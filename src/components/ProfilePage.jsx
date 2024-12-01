import React, { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    bio: "Web Developer",
    course: "Computer Science",
    socialLinks: {
      linkedin: "",
      github: "",
    },
    profilePic: "", // Add a state for profile picture
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserInfo((prev) => ({
        ...prev,
        profilePic: file,
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set preview image after loading
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Handle saving logic here (e.g., send updated data to backend)
    alert("Profile updated!");
  };

  const handleLogout = () => {
    // Handle logout logic here
    alert("Logging out...");
  };

  return (
    <div className="profile-page">
      <h1 className="profile-title">Your Profile</h1>
      <div className="profile-container">
        <div className="profile-pic-container">
          <label htmlFor="profile-pic" className="profile-pic-label">
            Profile Picture:
          </label>
          <input
            type="file"
            id="profile-pic"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input"
          />
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="profile-pic-preview"
            />
          ) : (
            <div className="default-profile-pic">No Image</div>
          )}
        </div>
        <div className="form-container">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Bio:</label>
            <textarea
              name="bio"
              value={userInfo.bio}
              onChange={handleInputChange}
              className="textarea-field"
            />
          </div>
          <div className="form-group">
            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={userInfo.course}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>LinkedIn:</label>
            <input
              type="text"
              name="linkedin"
              value={userInfo.socialLinks.linkedin}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>GitHub:</label>
            <input
              type="text"
              name="github"
              value={userInfo.socialLinks.github}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        </div>
        <button onClick={handleSave} className="save-button">
          Save Changes
        </button>

        
      </div>
    </div>
  );
};

export default ProfilePage;
