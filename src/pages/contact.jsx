export default function ContactPage() {
  const styles = {
    nameSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "30%",
      marginTop: "20px",
    },
    name: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "white",
      marginRight: "20px",
    },
    nameInput: {
      width: "100%",
      height: "30px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      paddingLeft: "10px",
        backgroundColor: "#F0F0F0",
        fontSize: "20px",
    },
    emailSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "40%",
      marginTop: "20px",
    },
    email: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "white",
      marginRight: "20px",
    },
    emailInput: {
      width: "100%",
      height: "30px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      paddingLeft: "10px",
      backgroundColor: "#F0F0F0",
        fontSize: "20px",
    },
    messageSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "60%",
      marginTop: "20px",
    },
    message: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "white",
      marginRight: "20px",
    },
    messageinput: {
      width: "100%",
      height: "100px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      paddingLeft: "10px",
      backgroundColor: "#F0F0F0",
        fontSize: "15px",
        fontWeight: "bold",
    },
    contactList: {
        listStyle: "none",
        color: "white",
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    linkdIn: {
        color: "white",
        textDecoration: "none",
    }
  };

  return (
    <div className="container">
      <h1 className="pagetitle">Contact</h1>
      <div style={styles.nameSection}>
        <label htmlFor="name" style={styles.name}>
          Name:
        </label>
        <input type="text" style={styles.nameInput} />
      </div>
      <div style={styles.emailSection}>
        <label htmlFor="email" style={styles.email}>
          Email:
        </label>
        <input type="text" style={styles.emailInput} />
      </div>
      <div style={styles.messageSection}>
        <label htmlFor="message" style={styles.message}>
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Enter your message here..."
          style={styles.messageinput}
        ></textarea>
      </div>
      <div>
        <h2>Want to get a hold of me? Reach out at any of the provided contacts listed below!</h2>
        <ul style={styles.contactList}>
            <li>
                <a style={styles.linkdIn} className="contactLinkdIn" href="https://www.linkedin.com/in/kevin-choi-0a9a3b1b0/">LinkedIn</a>
            </li>
            <li>
            <p>Personal Line: (555)-555-5555</p>
            </li>
            <li>
                <p>Email: mreickcastillero@gmail.com</p>
            </li>
        </ul>
      </div>
    </div>
  );
}
