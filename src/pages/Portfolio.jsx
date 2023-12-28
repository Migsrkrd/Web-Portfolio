import React from "react";
import Projects from "../components/project";
import {useState} from "react";

export default function Portfolio() {

  const styles = {
    githubLink: {
        color: "white",
        textDecoration: "none",
        marginLeft: "10px",
    },
    githubIcon: {
        fontSize: "50px",
    },
    FigTitle: {
        color: "white",
        textDecoration: "none",
        fontSize: "25px",
    },
}

const [hover, setHover] = useState(false);

const showGif = () => {
    setHover(true);
};

const hideGif = () => {
    setHover(false);
};

const imageSrc = hover ? "/1_X33360qSEe-urNS4o9Dd-w.gif" : "/Screenshot 2023-12-02 184816.png";

const mediaQuery760px = '(maxWidth: 760px)';

  return (
    <div className="container">
      <h1 className="pagetitle">PORTFOLIO</h1>
      <div className="firstWork" onMouseEnter={showGif} onMouseLeave={hideGif}>
          <a href="https://read-zen.onrender.com/">
          <img
            src={imageSrc}
            alt="tech graphic"
          />
          <figcaption className="firstworktitle">ReadZen<a href="https://github.com/Migsrkrd/ReadZen" style={styles.githubLink}><i className="fa fa-github" id="githubLink" style={styles.githubIcon}></i></a></figcaption>
          <figcaption className="hidden-stuff">
            A MERN web application used for creating ReadMes and sharing projects!
          </figcaption>
        </a>
      </div>
      <div className="work">
        <Projects projectURL={"https://sheltered-inlet-69891-1c93b8a30eb8.herokuapp.com/"}
        title={"Gym Flow"}
        description={"A RESTful application for users to create and share workouts!"}
        githubURL={"https://github.com/d-a-v-i-d-w-r-i-g-h-t/gym-flow"}/>
        <Projects projectURL={"https://grocease-graphql.onrender.com/"}
        title={"Grocease"}
        description={"A MERN web application used for creating, sending, and receiving grocery lists!"}
        githubURL={"https://github.com/Migsrkrd/Grocery-List"}/>
        <Projects projectURL={"https://migsrkrd.github.io/EZ-Stream/"}
        title={"EZStream"}
        description={"A web application using third party APIs to help you find your next favorite movie or show!"}
        githubURL={"https://github.com/Migsrkrd/EZ-Stream"}/>
        <Projects projectURL={"https://salty-sierra-80916-ba0b5056f1f8.herokuapp.com/"}
        title={"JATE"}
        description={"A Progressive Web Application for just another text editor!"}
        githubURL={"https://github.com/Migsrkrd/Text-Editor"}/>
        <Projects projectURL={"https://migsrkrd.github.io/Weather-Dashboard/"}
        title={"Weather Dashboard"}
        description={"A weather dashboard to help you prepare for your day!"}
        githubURL={"https://github.com/Migsrkrd/Weather-Dashboard"}/>
        <Projects projectURL={"https://github.com/Migsrkrd/ReadMeGenerator"}
        title={"ReadMe Generator"}
        description={"A Node Application to help you create a ReadMe for your projects!"}
        githubURL={"https://github.com/Migsrkrd/ReadMeGenerator"}/>
      </div>
    </div>
  );
}
