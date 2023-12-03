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
      <img
        src="public/IMG_1359 (1).jpg"
        alt="Photo of Michael Reickerd"
        style={styles.img}
      />
      <p style={styles.text}>
        At 25 years old, I've embarked on a path that resonates deeply with my
        passion and purpose. Life has been a series of discoveries and choices,
        and my pursuit of a fulfilling career has been no exception. As the youngest of four in a close-knit family of six, I've always been
        certain about my love for sports, video games, and connecting with new
        people. However, the road to finding the perfect career has been a
        winding one.
      </p>

      <p style={styles.text}>
        Born into a family of accountants, it seemed natural for me to follow
        suit. With a knack for math, I enrolled in the Department of Accountancy
        at the University of San Jose State. Two years into challenging courses
        and countless late nights fueled by a newfound caffeine addiction, I
        realized this wasn't the path for me. Undeterred, I explored different majors and eventually landed on
        Business Marketing. While it aligned with my love for engaging with
        others, it didn't take long to realize that there was still something
        missing. Returning home to my childhood house, I decided to take a
        break, introspect, and uncover undiscovered passions.
      </p>

      <p style={styles.text}>
        In a serendipitous turn of events, I decided to build my first PC. What
        started as a fun project turned into a revelation during the coding
        process to make a Microsoft Windows application bootable from a flash
        drive. Computer coding had captured my interest in a way I hadn't
        anticipated. This small venture into the vast world of web development became the
        turning point in my career journey. Eager to delve deeper, I completed
        the University of Berkeley Bootcamp, earning a certificate of
        completion. Now, I am enthusiastically seeking a full-time position
        where I can contribute my skills and passion for coding to make
        meaningful contributions in the field of software engineering.
      </p>

      <p style={styles.text}>
        Join me on this exciting adventure as I continue to grow, learn, and
        make a mark in the ever-evolving world of technology. Let's build
        something amazing together!
      </p>
    </div>
  );
}
