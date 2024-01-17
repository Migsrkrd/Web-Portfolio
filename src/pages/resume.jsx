export default function ResumePage() {
  const styles = {
    myName: {
      fontSize: "30px",
      fontWeight: "bold",
      borderBottom: "1px solid white",
    },
    address: {
      fontSize: "20px",
      color: "#F0F0F0",
      borderBottom: "1px solid white",
      borderTop: "1px solid white",
      padding: "10px",
      width: "100%",
    },
    links: {
      color: "rgb(236, 20, 153)",
    },
    addressSection: {
      margin: "10px",
      width: "90%",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
    },
    objective: {
      color: "rgb(255, 196, 0)",
    },
    skills: {
      color: "rgb(255, 196, 0)",
      borderBottom: "1px solid white",
      borderTop: "1px solid white",
      padding: "10px",
    },
    skillsSection: {
      margin: "10px",
      width: "90%",
      textAlign: "center",
    },
    skillsList: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    experienceSection: {
      width: "88.5%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "-20px",
      marginBottom: "10px",
    },
    experienceTitle: {
      color: "rgb(255, 196, 0)",
      borderBottom: "1px solid white",
      borderTop: "1px solid white",
      padding: "10px",
      textAlign: "Center",
      width: "100%",
    },
    workDiv: {
      display: "flex",
      flexDirection: "column",
    },
    work1: {
      width: "100%",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    work2: {
      width: "100%",
      paddingLeft: "30px",
    },
    educationSection: {
      margin: "10px",
      width: "90%",
    },
    edAndComp: {
      borderTop: "1px solid white",
      display: "flex",
      justifyContent: "center",
      width: "90%",
    },
    edSection: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    edItem: {
      padding: "0px",
      margin: "50px",
      marginTop: "-10px",
      marginBottom: "10px",
    },
    compSection: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    edTitle: {
      color: "rgb(255, 196, 0)",
      padding: "10px",
      textAlign: "left",
      width: "100%",
    },
    compTitle: {
      color: "rgb(255, 196, 0)",
      borderBottom: "1px solid white",
      padding: "10px",
      textAlign: "center",
    },
    objectiveSection: {
      margin: "10px",
      width: "90%",
    },
    edus: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    bottom: {
      display: "flex",
      justifyContent: "space-around",
      width: "90%",
      borderTop: "1px solid white",
    },
    dates: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "-20px",
      marginBottom: "-20px",
    },
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Michael Reickerd Resume.pdf";
    link.download = "Michael_Reickerd_Resume.pdf";
    link.click();
  };

  return (
    <div className="container">
      <h1 className="pagetitle">Resume</h1>
      <a href="/resume.png" className="resumeDownload" onClick={handleDownload}>
        <i className="fa fa-download"></i>
      </a>
      <header>
        <h1 style={styles.myName}>Michael D. Reickerd</h1>
      </header>

      <section style={styles.addressSection}>
        <address style={styles.address}>
          (Cell) 408-903-3570 |{" "}
          <a href="mailto:mreickcastillero@gmail.com" style={styles.links}>
            mreickcastillero@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/mikey-reickerd-1716a71a3/"
            style={styles.links}
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/Migsrkrd" style={styles.links}>
            GitHub
          </a>
        </address>
      </section>

      <section style={styles.objectiveSection}>
        <h2 style={styles.objective}>Objective</h2>
        <p>
          As a Full Stack Web Developer with a marketing background, I combine
          creative strategies with technical expertise to craft user-centric
          applications, aiming to enhance digital user experiences.
        </p>
      </section>
      <div style={styles.edAndComp}>
        <section style={styles.edSection}>
          <h2 style={styles.edTitle}>Education</h2>
          <section style={styles.edus}>
            <div style={styles.edItem}>
              <h3>Certificate of Completion in Full Stack Web Development</h3>
              <p>University of California-Berkeley Bootcamp Spot - Remote</p>
              <p>September 2023 to December 2023</p>
              <li>Graduated in the top 1%</li>
            </div>
            <div style={styles.edItem}>
              <h3>Bachelor's degree in Business Marketing</h3>
              <p>San Jose State University - San Jose, CA</p>
              <p>August 2016 to December 2020</p>
              <li>Educational scholarship</li>
            </div>
          </section>
        </section>
      </div>

      <section style={styles.skillsSection}>
        <h2 style={styles.skills}>Core Strengths and Skills</h2>
        <ul style={styles.skillsList}>
          <li>HTML5</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>MySQL</li>
          <li>MERN</li>
          <li>RESTful Apps</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>OOP</li>
          <li>Git</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>ORM</li>
          <li>React</li>
        </ul>
      </section>

      <section style={styles.experienceSection}>
        <h2 style={styles.experienceTitle}>Experience</h2>
        <div style={styles.workDiv}>
          <div style={styles.work1}>
            <h3>ReadZen</h3>
            <div style={styles.dates}>
              <p>Full Stack Web Developer</p>
              <p>December 2023</p>
            </div>
            <ul>
              <li>
                fullstack app for user friendly creating and sharing of
                ReadMes/Projects
              </li>
              <li>
                React, Express.js, Node.js, Apollo Server, Graphql, javascript,
                CSS, HTML, and MongoDB/Mongoose (MERN stack)
              </li>
              <li>
                Github:{" "}
                <a href="https://github.com/Migsrkrd/ReadZen">click here</a> ,
                Deployment:{" "}
                <a href="https://read-zen.onrender.com/">click here</a>
              </li>
            </ul>
          </div>
          <div style={styles.work1}>
            <h3>Gym Flow</h3>
            <div style={styles.dates}>
              <p>Full Stack Web Developer</p>
              <p>November 2023</p>
            </div>
            <ul>
              <li>
                RESTful application for tracking, creating, and sharing workout
                routines
              </li>
              <li>
                HTML, CSS, Javascript, Session, Node.js, Express, Cookies,
                MySQL, Handlebars
              </li>
              <li>
                Github:{" "}
                <a href="https://github.com/d-a-v-i-d-w-r-i-g-h-t/gym-flow">
                  click here
                </a>{" "}
                , Deployment:{" "}
                <a href="https://sheltered-inlet-69891-1c93b8a30eb8.herokuapp.com/">
                  click here
                </a>
              </li>
            </ul>
          </div>
          <div style={styles.work1}>
            <h3>Grocease</h3>
            <div style={styles.dates}>
              <p>Full Stack Web Developer</p>
              <p>January 2024</p>
            </div>
            <ul>
              <li>
                Mern Application for creating, and sending grocery lists online{" "}
              </li>
              <li>
              React, Express.js, Node.js, Apollo Server, Graphql, javascript, CSS, HTML, and MongoDB/Mongoose
              </li>
              <li>
                Github:{" "}
                <a href="https://github.com/Migsrkrd/Grocery-List">
                  click here
                </a>{" "}
                , Deployment:{" "}
                <a href="https://grocease-graphql.onrender.com">
                  click here
                </a>
              </li>
            </ul>
          </div>
          <div style={styles.work1}>
            <h3>The Old Spaghetti Factory</h3>
            <p>National Restaurant Chain</p>
            <div style={styles.dates}>
              <p>Marketing Assistant | Bartender | Server</p>
              <p>San Jose, CA August 2018 to March 2022</p>
            </div>
            <ul>
              <li>
                Managed social media marketing programs/campaigns for a 22%
                increase in customer visits.
              </li>
            </ul>
          </div>
          <div style={styles.work1}>
            <h3>Berliner Cohen LLP</h3>
            <p>Law Firm Specializing in Business Law</p>
            <div style={styles.dates}>
              <p>Administrative Assistant</p>
              <p>San Jose, CA March 2018 to August 2018</p>
            </div>
            <ul>
              <li>Pivotal role in transitioning from paper to digital.</li>
            </ul>
          </div>
        </div>
      </section>
      <div style={styles.bottom}>
        <section style={styles.edSection}>
          <h2 style={styles.compTitle}>Miscellaneous</h2>

          <ul>
            <li>Brother of the Sigma Chi Fraternity</li>
            <li>Managed Events and Fundraisers</li>
            <li>Helped raise over $20,000 for the Huntsman Cancer Institute</li>
          </ul>
        </section>

        <section style={styles.edSection}>
          <h2 style={styles.compTitle}>Interests</h2>

          <ul>
            <li>Enjoys MERN programming, building projects in personal time</li>
            <li>Enjoys building computers</li>
            <li>
              Ambitious about learning new and modern web development
              technologies
            </li>
            <li>Enjoys Snowboarding, Football, Fitness, and Socializing</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
