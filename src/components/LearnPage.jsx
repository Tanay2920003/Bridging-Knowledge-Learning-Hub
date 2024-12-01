import React, { useState } from 'react';
import './LearnPage.css'; // Import the CSS file for styling

const LearnPage = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="learn-page">
      <h1>Learn</h1>
      <p>Learn more about our offerings here.</p>

      <div className="tab-container">
        <ul className="tab-list">
          <li className={`tab-item ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => handleTabClick('tab1')}>
            Tab 1
          </li>
          <li className={`tab-item ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => handleTabClick('tab2')}>
            Tab 2
          </li>
          {/* Add more tabs as needed */}
        </ul>

        <div className="tab-content">
          {activeTab === 'tab1' && (
            <div className="tab-panel">
              {/* Content for Tab 1 */}
              <p>Content for Tab 1</p>
            </div>
          )}
          {activeTab === 'tab2' && (
            <div className="tab-panel">
              {/* Content for Tab 2 */}
              <p>Content for Tab 2</p>
            </div>
          )}
          {/* Add more tab panels as needed */}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;