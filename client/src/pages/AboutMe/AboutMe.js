import React from "react";
import MyImg from "../../images/MyPicture.jpg";

const AboutMe = () => {
  return (
    <div className="container">
      <h1 className="about-me">About</h1>
      <hr />
      <img className="my-picture" src={MyImg} alt="my-img" />
      <p>
        I am a software engineering student in Georgia Tech’s coding bootcamp.
        The goal is to work for a meaningful company that does good for the
        community. The dream is to work for Amazon on there prime air project. I
        currently work as an AEMT for Grady EMS. I enjoy serving the community
        of Atlanta and am looking forward to a rewarding job in a field that can
        impact lives in a positive way. I am proficient in: HTML, CSS,
        JavaScript, Node, Mongo DB, MySQL, Bootstrap, and React. In my free time
        I like to go backpacking and kayaking.
      </p>
    </div>
  );
};

export default AboutMe;
