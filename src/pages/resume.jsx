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
      margin: "10px",
      width: "90%",
    },
    experienceTitle: {
      color: "rgb(255, 196, 0)",
      borderBottom: "1px solid white",
      borderTop: "1px solid white",
      padding: "10px",
      textAlign: "center",
    },
    workDiv: {
      display: "flex",
    },
    work1: {
      width: "50%",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    work2: {
      width: "50%",
      paddingLeft: "30px",
      borderLeft: "1px solid white",
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
      width: "100%",
      padding: "0px",
      width: "100%",
      margin: "50px",
    },
    compSection: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    edTitle: {
      color: "rgb(255, 196, 0)",
      borderBottom: "1px solid white",
      padding: "10px",
      textAlign: "center",
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
      width: "100%",
    },
    bottom: {
      display: "flex",
      justifyContent: "space-around",
      width: "90%",
      borderTop: "1px solid white",
    },
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Michael_Reickerd_Resume.png";
    link.download = "Michael_Reickerd_Resume.png";
    link.click();
  };

  return (
    <div className="container">
      <h1 className="pagetitle">Resume</h1>
      <a href="/resume.png" className="resumeDownload" onClick={handleDownload}>
        <i class="fa fa-download"></i>
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
          As a Full Stack Web Developer with a foundation in marketing, I am
          dedicated to crafting innovative and user-centric applications. My
          experience in marketing brings a unique perspective to web
          development, allowing me to seamlessly blend creative strategies with
          technical expertise. Passionate about creating dynamic solutions, I
          strive to enhance user experiences and contribute to the ever-evolving
          landscape of the digital world.
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
              <p>Graduated in the top 1%</p>
            </div>
            <div style={styles.edItem}>
              <h3>Bachelor's degree in Business Marketing</h3>
              <p>San Jose State University - San Jose, CA</p>
              <p>August 2016 to December 2020</p>
              <p>Educational scholarship</p>
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
        <h2 style={styles.experienceTitle}>Professional Experience</h2>
        <div style={styles.workDiv}>
          <div style={styles.work1}>
            <h3>The Old Spaghetti Factory</h3>
            <p>National Restaurant Chain</p>
            <p>Marketing Assistant | Bartender | Server</p>
            <p>San Jose, CA August 2018 to March 2022</p>

            <ul>
              <li>
                Executed successful campaigns, managing social media for a 22%
                customer engagement boost.
              </li>
              <li>
                Elevated guest experiences through unparalleled customer
                service.
              </li>
              <li>
                Demonstrated expertise in mixology, streamlined inventory
                management, and played a pivotal role in fostering repeat
                business through exceptional customer relationships.
              </li>
              <li>
                Honed multitasking, adaptability, and collaboration in a dynamic
                environment.
              </li>
            </ul>
          </div>
          <div style={styles.work2}>
            <h3>Berliner Cohen LLP</h3>
            <p>Law Firm Specializing in Business Law</p>
            <p>Administrative Assistant</p>
            <p>San Jose, CA March 2018 to August 2018</p>

            <ul>
              <li>Pivotal role in transitioning from paper to digital.</li>
              <li>Meticulously transmitted documents, ensuring accuracy.</li>
              <li>Prepared files with a strong organizational focus.</li>
              <li>Enhanced proficiency in document management.</li>
              <li>Contributed to overall operational efficiency.</li>
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
