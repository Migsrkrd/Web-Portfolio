import { useState } from "react";

export default function Projects({projectURL, title, description, githubURL}){

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
    }

    const hideGif = () => {
        setShow(false);
    }

    const imageSrc = show ? "/V1Zc.gif" : "/Screenshot 2023-12-02 181324.png";



    return (
    <div
    onMouseEnter={showGif}
                onMouseLeave={hideGif}>
          <a href={projectURL}>
            <img
              src={imageSrc}
              alt="tech graphic"
              style={styles.techGraphic}
            />
            <figcaption className="worktitle" style={styles.FigTitle}>{title} <a href={githubURL} style={styles.githubLink}><i className="fa fa-github" id="githubLink" style={styles.githubIcon}></i></a></figcaption>
            <figcaption className="hidden-stuff">
              {description}
            </figcaption>
          </a>
        </div>
    )
}