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
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      listStyleType: "none",
      padding: "0px",
    },
    skill: {
      margin: "10px",
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
      marginBottom: "30px",
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

  const workData = [
    {
      companyName: "Breezy",
      position: "Full Stack Software Engineer",
      dates: "August 2024-Present",
      bulletPoints: [
        "Angular, Firebase, Google Cloud, Typescript, Git, Figma, Trello, Xcode, CM",
        "A Social Platform for influencers and other members of the online community to share discounts and promotions.",
        "Contributed to founding, initial code base, and further advancement of the platform.",
      ],
    },
    {
      companyName: "Accountable Driving",
      position: "Full Stack Mobile Engineer",
      dates: "August 2024-Present",
      bulletPoints: [
        "Flutter, Dart, Swift, Supabase, PostgreSQL, Figma, Trello, Xcode, Android Studio",
        "Bluetooth platform that tracks driving habits and provides reports and global rankings to promote safe driving through accountability.",
        "Contributed to advancing development toward deployment readiness.",
      ],
    },
    {
      companyName: "Gibber",
      position: "Full Stack Software Engineer",
      dates: "July 2024-August 2024",
      bulletPoints: [
        "React-Native, Socket.io, Mongoose, NoSQL, React, RESTful API, Node.js, Ruby, Cookies, Redux Store",
        "An automated chat application with built-in translation.",
        "Contributed to the initial development of both the frontend and backend of the application.",
      ],
    },
    {
      companyName: "The Old Spaghetti Factory",
      position: "Marketing Assistant | Bartender | Server",
      dates: "San Jose, CA August 2018 to March 2022",
      bulletPoints: [
        "Managed social media marketing programs/campaigns for a 22% increase in customer visits.",
        "Collaborated with the marketing team to develop and implement strategies that enhanced brand visibility and customer engagement.",
      ],
    },
    {
      companyName: "Berliner Cohen LLP",
      position: "Administrative Assistant",
      dates: "March 2018 to August 2018",
      bulletPoints: [
        "Pivotal role in transitioning from paper to digital.",
        "Assisted in the transition from paper to digital, enhancing operational efficiency.",
      ],
    },
  ];

  const skills = [
    "HTML 5",
    "JavaScript",
    "CSS",
    "MySQL",
    "Communication",
    "Swift",
    "OOP",
    "Git",
    "Node.js",
    "Flutter",
    "Express.js",
    "ORM",
    "React",
    "C#",
    ".NET",
    "Spline",
    "WebFlow",
    "Java",
    "jQuery",
    "Postgres",
    "Xcode",
    "Dart",
    "React-Native",
  ];

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "/resume.pdf";
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
      {/* MARK: Skills */}
      <section style={styles.skillsSection}>
        <h2 style={styles.skills}>Core Strengths and Skills</h2>
        <ul style={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} style={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
      {/* MARK: Work Experience */}
      <section style={styles.experienceSection}>
        <h2 style={styles.experienceTitle}>Experience</h2>
        <div style={styles.workDiv}>
          {workData.map((work, index) => (
            <div key={index} style={styles.work2}>
              <h3>{work.companyName}</h3>
              <div style={styles.dates}>
                <p>{work.position}</p>
                <p>{work.dates}</p>
              </div>
              <ul>
                {work.bulletPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
              <h3>Bachelor's degree in Computer Science</h3>
              <p>San Jose State University - San Jose, CA</p>
              <p>August 2016 to December 2020</p>
              <li>Educational scholarship</li>
            </div>
          </section>
        </section>
      </div>
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
