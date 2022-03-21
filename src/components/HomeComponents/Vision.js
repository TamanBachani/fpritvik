import React from 'react'
import '../../stylesheets/vision.scss'

const Vision = () => {
  return (
    <div className="vision-info padding">
      <h1 className="heading center">3-valved Vision</h1>
      <div className="vision-cards">
        <div className="vision-card">
          <i className="fas fa-video fahome fa-2x"></i>
          <p className="vision-text">intuitive learning</p>
          <p className="vision-text2">
            Learning made simple and semantic with the help of easy-to-follow tutorials, walkthroughs, and infomational videos.
          </p>
        </div>
        <div className="vision-card">
          <i className="fab fa-google-drive fahome fa-2x"></i>
          <p className="vision-text">free access</p>
          <p className="vision-text2">
            Get access to our intricately curated Google Drive Folder for FREE. The folder contains sample code, tested models, and Python .ipynb files.
          </p>
        </div>
        <div className="vision-card">
          <i className="fas fa-egg fahome fa-2x"></i>
          <p className="vision-text">smart investing</p>
          <p className="vision-text2">
            Tested approaches for investing, trendy strategies covered with the help of informational videos, and coding tutorials.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision