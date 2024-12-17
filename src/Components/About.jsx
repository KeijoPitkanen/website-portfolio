import React from "react";
import "./SharedStyles.css";
import "./About.css";
import profilePicture from "/src/assets/profile-picture.jpg";

function About() {
  return (
    <div className="main-view">
      <div className="page-content">
        <div className="welcome-container">
          <h1 className="welcome">Welcome!</h1>
        </div>
        <div className="page-desc">
          <h1>Mikko "Keijo" Pitkänen</h1>
        </div>

        <div className="profile-summary">
          <div className="likes-dislikes">
            <div className="likes">
              <h2>Likes</h2>
              <ul>
                <li>🖥️Programming</li>
                <li>🐧Linux</li>
                <li>💡Open source projects</li>
                <li>🤠Interesting people</li>
                <li>🐶Dogs</li>
              </ul>
            </div>
            <div className="dislikes">
              <h2>Dislikes</h2>
              <ul>
                <li>🤡Stupid people</li>
                <li>🍝Overly complicated code</li>
                <li>💩Frontend Web Development</li>
                <li>👺Dog haters</li>
              </ul>
            </div>
          </div>
          <div className="profile-picture-container">
            <img src={profilePicture} className="profile-picture" />
          </div>
        </div>
        <div className="text-box">
          <p>
            Hello there. Welcome to my portfolio. I'm Mikko but everybody knows
            me as Keijo. I'm a computer science student at University of Eastern
            Finland and this is my website.
          </p>
          <p>
            My programming points of interests are open source software, Linux,
            CLI tools, embedded systems and UX. My other points of interests
            include all kind of creative arts like writing stories and music,
            blacksmithing, woodworking and also video games.
          </p>
          <p>
            In this website you can find a list of my projects and a link to my
            blog alongside with my other socials.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default About;
