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
    work1 : {
        width: "50%",
        paddingLeft: "20px",
    },
    work2 : {
        width: "50%",
        paddingLeft: "20px",
        borderLeft: "1px solid white",
    },
    educationSection: {
        margin: "10px",
        width: "90%",
      },
    edAndComp: {
        borderTop: "1px solid white",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        width: "100%",
    },
    edSection: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
  };

  return (
    <div className="container">
      <h1 className="pagetitle">Resume</h1>
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

      <section>
        <h2 style={styles.objective}>Objective</h2>
        <p>
          To obtain a position that will enable me to use my strong
          organizational, leadership, educational background, and ability to
          work well with people.
        </p>
      </section>

      <section style={styles.skillsSection}>
        <h2 style={styles.skills}>Core Strengths and Skills</h2>
        <ul style={styles.skillsList}>
          <li>Mathematics</li>
          <li>Leadership abilities</li>
          <li>Finance/Accounting</li>
          <li>Dedicated</li>
          <li>Reliable</li>
          <li>Exceeds expectations</li>
          <li>Organization</li>
          <li>Multi-Tasking</li>
        </ul>
      </section>

      <section style={styles.experienceSection}>
        <h2 style={styles.experienceTitle}>Professional Experience</h2>
        <div style={styles.workDiv}>
          <div style={styles.work1}>
            <h3>Customer Suite Server</h3>
            <p>
              Sept. 2018 - March 2019
              <br />
              Avaya Stadium, San Jose, CA.
            </p>
            <ul>
              <li>Provided Stadium preparations prior to events.</li>
              <li>
                Monitored and maintained facility during operating hours,
                ensuring a positive, clean environment for guests.
              </li>
              <li>
                Served and provided positive customer service to customers.
              </li>
            </ul>
          </div>
          <div style={styles.work2}>
            <h3>Host and Marketing Assistant</h3>
            <p>
              August 2019 – Present
              <br />
              The Old Spaghetti Factory, San Jose, CA.
            </p>
            <ul>
              <li>
                Supported the daily functions and operations for nationally
                sponsored tournaments, corporate fundraisers, and privately
                produced club events.
              </li>
              <li>
                Sales associate for the San Jose branch and Northern Californian
                District.
              </li>
              <li>Planned and managed daily schedules.</li>
              <li>Provided personal staff support.</li>
              <li>Provided Marketing outreach and research for Corporate.</li>
            </ul>
          </div>
        </div>
      </section>
    <div style={styles.edAndComp}>
      <section style={styles.edSection}>
        <h2 style={styles.edTitle}>Education</h2>
        <p>
          San Jose State University, San Jose, CA
          <br />
          August 2016 - Present
          <br />
          Major: Accounting
          <br />
          GPA: 3.325
        </p>
        <p>Misc.: Brother of the Sigma Chi Fraternity</p>
      </section>

      <section style={styles.compSection}>
        <h2 style={styles.compTitle}>Computer Skills</h2>
        <p>MS Word, MS Excel, MS PowerPoint, MS Project</p>
      </section>
      </div>

      <section style={styles.edSection}>
        <h2 style={styles.compTitle}>Miscellaneous</h2>
        <p>Brother of the Sigma Chi Fraternity</p>
        <p>Managed Events and Fundraisers</p>
        <p>Helped raise over $20,000 for the Huntsman Cancer Institute</p>
      </section>
    </div>
  );
}
