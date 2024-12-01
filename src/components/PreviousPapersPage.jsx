import React from 'react';
import './PreviousPapersPage.css'; // Import the styles specific to this page

const PreviousPapersPage = () => {
    return (
        <div className="previous-papers-page">
            <div className="iframe-container">
                <iframe
                    src="https://bbdcollegepapers.in/"
                    title="Previous Papers"
                    className="iframe"
                    frameBorder="0"
                    scrolling="yes"
                />
            </div>
        </div>
    );
};

export default PreviousPapersPage;
