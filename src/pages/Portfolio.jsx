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
        <a href="https://sheltered-inlet-69891-1c93b8a30eb8.herokuapp.com/">
          <img
            src={imageSrc}
            alt="tech graphic"
          />
          <figcaption className="firstworktitle">Gym Flow <a href="https://github.com/d-a-v-i-d-w-r-i-g-h-t/gym-flow" style={styles.githubLink}><i class="fa fa-github" id="githubLink" style={styles.githubIcon}></i></a></figcaption>
          <figcaption className="hidden-stuff">
            A Web Application for tracking, sharing, and creating fitness
            routines!
          </figcaption>
        </a>
      </div>
      <div className="work">
        <Projects projectURL={"https://salty-sierra-80916-ba0b5056f1f8.herokuapp.com/"}
        title={"Jate"}
        description={"A Progressive Web Application for a Text Editor!"}
        githubURL={"https://github.com/Migsrkrd/Text-Editor"}/>
        <Projects projectURL={"https://github.com/Migsrkrd/logo-generator"}
        title={"SVG Generator"}
        description={"A Node Application to create an SVG Logo for your website!"}
        githubURL={"https://github.com/Migsrkrd/logo-generator"}/>
        <Projects projectURL={"https://powerful-river-93241-46494d1ecbf5.herokuapp.com/"}
        title={"Blog Site"}
        description={"Just a typical blog site for anything and everything!"}
        githubURL={"https://github.com/Migsrkrd/Blog-Site"}/>
        <Projects projectURL={"https://migsrkrd.github.io/calender/"}
        title={"Work Day Scheduler"}
        description={"A simple work day scheduler to help you stay organized!"}
        githubURL={"https://github.com/Migsrkrd/calender"}/>
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
