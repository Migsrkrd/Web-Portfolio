import { useState } from 'react';

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
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        listStyle: "none",
        textIndent: "none",
    },
    mymessage: {
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "20px",
        textAlign: "center",
    },
    button: {
      width: "100px",
      height: "40px",
      background: "rgb(255, 238, 0)",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
    },
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateForm = () => {
    // Validate each form field
    const isNameValid = name.trim() !== '';
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isMessageValid = message.trim() !== '';

    // Set error states
    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    // Return true if all fields are valid, otherwise false
    return isNameValid && isEmailValid && isMessageValid;
  };

  const handleBlur = (field) => {
    // Handle blur event to trigger validation
    if (field === 'name') {
      setNameError(name.trim() === '');
    } else if (field === 'email') {
      setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    } else if (field === 'message') {
      setMessageError(message.trim() === '');
    }
  };

  const handleSubmit = () => {
    // Validate the form before submission
    const isFormValid = validateForm();

    // If the form is valid, you can proceed with submission logic
    if (isFormValid) {
      // Add your submission logic here
      alert('Form is not set up to submit yet. Please check back later.');
    } else {
      // Display an error notification or handle accordingly
      alert('Form submission failed. Please check the fields.');
    }
  };


  return (
    <div className="container">
    <h1 className="pagetitle">Contact</h1>
    <div style={styles.nameSection}>
      <label htmlFor="name" style={styles.name}>
        Name:
      </label>
      <input
        type="text"
        style={styles.nameInput}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => handleBlur('name')}
      />
      {nameError && <span style={{ color: 'red' }}>Name is required</span>}
    </div>
    <div style={styles.emailSection}>
      <label htmlFor="email" style={styles.email}>
        Email:
      </label>
      <input
        type="text"
        style={styles.emailInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => handleBlur('email')}
      />
      {emailError && <span style={{ color: 'red' }}>Valid email is required</span>}
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
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={() => handleBlur('message')}
      ></textarea>
      {messageError && <span style={{ color: 'red' }}>Message is required</span>}
    </div>
    <div>
      <h2 style={styles.mymessage}>Want to get a hold of me? Reach out at any of the provided contacts listed below!</h2>
      <ul style={styles.contactList}>
        <li>
          <a className="linkdIn" href="https://www.linkedin.com/in/kevin-choi-0a9a3b1b0/">LinkedIn</a>
        </li>
        <li>
          <p>Personal Line: (555)-555-5555</p>
        </li>
        <li>
          <p>Email: mreickcastillero@gmail.com</p>
        </li>
      </ul>
    </div>
    <button style={styles.button} onClick={handleSubmit}>Submit</button>
  </div>
  );
}
