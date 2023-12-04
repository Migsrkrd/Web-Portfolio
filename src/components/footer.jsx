export default function Footer() {
  const styles = {
    footer: {
      borderTop: "1px solid #E7E7E7",
      color: "white",
      width: "100%",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "20px",
      PaddingBottom: "20px",
      marginTop: "100px",
    },
    icon: {
      fontSize: "50px",
      padding: "20px",
    },
    aLink: {
      color: "rgb(255, 238, 0)",
      textDecoration: "none",
      marginLeft: "10px",
    },
  };
  return (
    <div style={styles.footer}>
      <a style={styles.aLink} href="https://github.com/Migsrkrd"><i class="fa fa-github" id="githubLink" style={styles.icon}></i></a>
      <a style={styles.aLink} href="https://www.linkedin.com/in/mikey-reickerd-1716a71a3/"><i class="fa fa-linkedin" id="githubLink" style={styles.icon}></i></a>
        <a style={styles.aLink} href="mailto:mreickcastillero@gmail.com"><i class="fa fa-envelope" id="githubLink" style={styles.icon}></i></a>
    </div>
  );
}
