import React from "react";
import Projects from "../components/project";
import { useState } from "react";

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
  };

  const [hover, setHover] = useState(false);

  const showGif = () => {
    setHover(true);
  };

  const hideGif = () => {
    setHover(false);
  };

  const imageSrc = hover
    ? "/1_X33360qSEe-urNS4o9Dd-w.gif"
    : "/Screenshot 2023-12-02 184816.png";

  const mediaQuery760px = "(maxWidth: 760px)";

  function handleMainOpenWindow(e, link) {
    e.preventDefault();
    e.stopPropagation();
    window.open(link);
  }

  function handleMainGithubWindow(e, link) {
    e.preventDefault();
    e.stopPropagation();
    window.open(link);
  }

  return (
    <div className="container">
      <h1 className="pagetitle">PORTFOLIO</h1>
      <div className="firstWork" onMouseEnter={showGif} onMouseLeave={hideGif}>
        <a href="https://migsrkrd.github.io/Letter-Craft/" onClick={(e)=> handleMainOpenWindow(e, "https://migsrkrd.github.io/Letter-Craft/")}>
          <img src={imageSrc} alt="tech graphic" />
          <figcaption className="firstworktitle">
            Letter Craft
            <a
              href="https://github.com/Migsrkrd/Letter-Craft"
              style={styles.githubLink}
              onClick={(e) =>
                handleMainGithubWindow(
                  e,
                  "https://github.com/Migsrkrd/Letter-Craft")}
            >
              <i
                className="fa fa-github"
                id="githubLink"
                style={styles.githubIcon}
              ></i>
            </a>
          </figcaption>
          <figcaption className="hidden-stuff">
          A Front End Focused Web Application for creating and using personalized letter templates!
          </figcaption>
        </a>
      </div>
      <div className="work">
        <Projects
        warn={false}
        projectURL={"https://github.com/Migsrkrd/ReadZen"}
        title={"ReadZen"}
        description={
          "A full stack web application for user friendly creation of READMEs!"
        }
        githubURL={"https://github.com/Migsrkrd/ReadZen"}
        ></Projects>
        <Projects
        warn={false}
        projectURL={"https://github.com/d-a-v-i-d-w-r-i-g-h-t/gym-flow"}
        title={"Gym Flow"}
        description={
          "A full stack web application for tracking your workouts and progress!"
        }
        githubURL={"https://github.com/d-a-v-i-d-w-r-i-g-h-t/gym-flow"}
        />
        <Projects
          warn={true}
          projectURL={"https://grocease-graphql.onrender.com"}
          title={"Grocease"}
          description={
            "A MERN web application used for creating, sending, and receiving grocery lists!"
          }
          githubURL={"https://github.com/Migsrkrd/Grocery-List"}
        />
        <Projects
          projectURL={"https://github.com/Migsrkrd/ReadMeGenerator"}
          title={"ReadMe Generator"}
          description={
            "A Node Application to help you create a ReadMe for your projects!"
          }
          githubURL={"https://github.com/Migsrkrd/ReadMeGenerator"}
        />
        <Projects
          warn={false}
          projectURL={"https://www.gibber.chat/"}
          title={"Gibber"}
          description={
            "An automated chat application with built-in translation!"
          }
          githubURL={""}
        ></Projects>
        <Projects
          projectURL={"https://migsrkrd.github.io/Weather-Dashboard/"}
          title={"Weather Dashboard"}
          description={"A weather dashboard to help you prepare for your day!"}
          githubURL={"https://github.com/Migsrkrd/Weather-Dashboard"}
        />
      </div>
    </div>
  );
}
