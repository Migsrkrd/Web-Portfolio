import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const styles = {
    nameInput: {
      width: "40%",
      height: "30px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      paddingLeft: "10px",
      backgroundColor: "#F0F0F0",
      fontSize: "20px",
      marginBottom: "20px",
    },
    emailInput: {
      width: "70%",
      height: "30px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      paddingLeft: "10px",
      backgroundColor: "#F0F0F0",
      fontSize: "20px",
      marginBottom: "20px",
    },
    messageinput: {
      width: "100%",
      height: "100px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      paddingLeft: "10px",
      backgroundColor: "#F0F0F0",
      fontSize: "20px",
      fontWeight: "bold",
    },
    contactList: {
      color: "white",
      fontSize: "20px",
      textAlign: "center",
      marginBottom: "50px",
      marginTop: "50px",
    },
    button: {
      width: "100px",
      height: "40px",
      background: "rgb(255, 238, 0)",
      border: "none",
      borderRadius: "15px",
      cursor: "pointer",
      marginTop: "20px",
      fontSize: "20px",
      fontWeight: "bold",
    },
  };

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target.closest('form'); // Get the closest form element

    if(!formData.from_name || !formData.from_email || !formData.message) {
        alert('Please fill in all the fields');
        return;
    }
    
    emailjs.sendForm('service_0gkv9kq', 'template_8krs7y9', form, 'Z-wQdA1YRbCgUcKn5')
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Email sent successfully');
            setFormData({
                from_name: '',
                from_email: '',
                message: ''
            });
        }, (error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send email, please make sure you have filled in all the fields correctly.');
        });
  };

  return (
    <div className="container">
      <h1 className="pagetitle">Contact</h1>
      <form style={styles.contactList} onSubmit={handleSubmit}>
        <input
        style={styles.nameInput}
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
        <input
        style={styles.emailInput}
          type="email"
          name="from_email"
          placeholder="Your Email"
          value={formData.from_email}
          onChange={handleChange}
          required
        />
        <textarea
        style={styles.messageinput}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" style={styles.button} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
