import { useState } from "react";

export default function Projects({
  projectURL,
  title,
  description,
  githubURL,
  warn,
}) {
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
    techGraphic: {
      filter: "saturate(50)",
    },
  };

  const [show, setShow] = useState(false);

  const showGif = () => {
    setShow(true);
  };

  const hideGif = () => {
    setShow(false);
  };

  const imageSrc = show ? "/V1Zc.gif" : "/Screenshot 2023-12-02 181324.png";

  function checkForWarn(warn, projectURL, event) {
    if (warn === true) {
      let confirm = window.confirm(
        "This project uses a free deployment service and may take up to a minute to load. Are you sure you want to continue?"
      );
      if (confirm) {
        event.preventDefault();
        window.open(projectURL);
      } else if (!confirm) {
        // do nothing
        event.preventDefault();
        return;
      }
    } else {
      event.preventDefault();
      window.open(projectURL);
    }
  }

  function configureGithubLink(githubURL, e) {
    if (githubURL === "") {
        e.preventDefault();
        e.stopPropagation();
      alert("This project does not have a public repository!");
    } else {
        e.preventDefault();
        e.stopPropagation();
      window.open(githubURL);
    }
  }

  return (
    <div onMouseEnter={showGif} onMouseLeave={hideGif}>
      <a href={projectURL} onClick={(e) => checkForWarn(warn, projectURL, e)}>
        <img src={imageSrc} alt="tech graphic" style={styles.techGraphic} />
        <figcaption className="worktitle" style={styles.FigTitle}>
          {title}
          <a
            href={githubURL}
            onClick={(e) => configureGithubLink(githubURL, e)} // Pass `githubURL` and `e`
            style={styles.githubLink}
          >
            <i
              className="fa fa-github"
              id="githubLink"
              style={styles.githubIcon}
            ></i>
          </a>
        </figcaption>
        <figcaption className="hidden-stuff">{description}</figcaption>
      </a>
    </div>
  );
}
