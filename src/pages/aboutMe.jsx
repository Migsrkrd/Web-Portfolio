export default function AboutMePage() {
  const styles = {
    container: {
      margin: "50px",
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
    img: {
        width: "50%",
        height: "50%",
        margin: "50px",
        },
  };
  return (
    <div className="container" style={styles.container}>
      <h1 className="pagetitle">About Me</h1>
      <img src="public/IMG_1359 (1).jpg" alt="Photo of Michael Reickerd" style={styles.img}/>
      <p style={styles.text}>
        I am currently developing my new career in software engineering. I am 25
        years of age and have struggled throughout the majority of my life when
        it comes to deciding what is right for my career. With other aspects of
        life, I have been very certain. I come from a family of six, being the
        youngest boy out of four. I have always had a passion for sports, video
        games, and socializing with new people.
      </p>
      <p style={styles.text}>
        Ever since I was very young, I have always been talented with math
        skills. So coming from a family of accountants, this seemed like the
        best fit for my future career. When I applied to the University of San
        Jose State, I applied for the department of Accountancy.
      </p>
      <p style={styles.text}>
        After two years of tough courses, many late nights and a newly developed
        caffeine addiction, I quickly realized this is not what I want to do
        with my life. I eventually changed my majors twice, landing on a major
        that better suits my passion for meeting new people and conversation:
        Business Marketing.
      </p>
      <p style={styles.text}>
        While this was a good fit for my character, it didn't take long to
        realize that this too was not fit for myself. After moving back home
        into my childhood house, I decided to take some time off of work and
        really learn about myself. Maybe there are passions I have that I
        haven't discovered yet. Maybe there is a hidden talent for something
        other than mathematics.
      </p>
      <p style={styles.text}>
        On a whim, I decided to construct my very first PC simply for the fun of
        it. While I knew the process would be new, I invested all of my
        attention, and let's not forget a large amount of cash, and ended up
        creating a computer from scratch. While I had a great time during the
        project, I would have never thought that my favorite part was the coding
        process to create the Microsoft Windows application bootable from a
        flash drive. How is this done? Computer coding!
      </p>
      <p style={styles.text}>
        While this is a small step in the large world of web development, it
        quickly made me finally find my career passion. I received my
        certificate of completion from the University of Berkeley Bootcamp and
        have been in desire of a full-time position ever since.
      </p>
    </div>
  );
}
