export default function AboutMePage() {
  const styles = {
    container: {
      margin: "50px",
    },
    aboutMeTextContainer: {
      width: "80%",
      margin: "0 auto",
      padding: "0 20px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderLeft: "1px solid white",
      borderRight: "1px solid white",
      padding: "0px 100px",
    },
    title: {
      fontSize: "30px",
      fontWeight: "bold",
      textDecoration: "underline",
    },
    text: {
      fontSize: "20px",
      margin: "20px",
      lineHeight: "2",
      color: "#F0F0F0",
      textIndent: "50px",
    },
  };
  return (
    <div className="container" style={styles.container}>
      <h1 className="pagetitle">About Me</h1>
      <img
        src="/IMG_1359 (1).jpg"
        alt="Photo of Michael Reickerd"
        className="photo"
      />
      <div style={styles.aboutMeTextContainer}>
        <p style={styles.text}>
          At 25 years old, I’ve found a career path that genuinely excites me.
          Growing up as the youngest of four in a close-knit family, I always
          knew I loved sports, creativity, and connecting with people. Over
          time, I realized that software engineering brought all of those
          interests together through problem solving, collaboration, and
          building meaningful products.
        </p>

        <p style={styles.text}>
          I graduated from San Jose State University and UC Berkeley with a
          degree in Computer Science, graduating in the top 1% of the program.
          Through both my education and hands-on experience, I discovered that I
          enjoy combining technical problem solving with thoughtful,
          user-focused design.
        </p>

        <p style={styles.text}>
          Since then, I’ve worked across mobile and web development in several
          fast-paced startup environments. Most recently, I’ve been developing
          Flutter applications at Threebie, building responsive UI components,
          implementing Bloc and Cubit for state management, and collaborating
          with backend teams to integrate REST APIs. Before that, I worked at
          Breezy helping build an influencer-focused social platform using
          Angular, Firebase, and Google Cloud, and at Accountable Driving
          creating a Bluetooth-based mobile app with Flutter, Swift, and
          Supabase to encourage safer driving habits.
        </p>

        <p style={styles.text}>
          Throughout my career, I’ve enjoyed working across the full stack,
          blending my technical background with the communication and product
          thinking I gained through marketing. Whether I’m designing a user
          experience, building a frontend interface, or solving backend
          challenges, I’m driven by creating products that feel polished,
          useful, and meaningful.
        </p>

        <p style={styles.text}>
          I’m excited to continue growing as an engineer, take on new
          challenges, and keep building technology that makes a real impact.
        </p>
      </div>
    </div>
  );
}
