"use client"; // Ensures client-side rendering in Next.js
import { useState } from "react"; // Import useState hook for managing form state
import styles from "../styles/contactForm.module.css"; // Import CSS module for styling

//Define the ContactForm component
export default function ContactForm() {
  //Define state variables for form inputs and submission status
  const [name, setName] = useState(""); //Stores the entered name
  const [email, setEmail] = useState(""); //Stores the entered email
  const [message, setMessage] = useState(""); //Stores the entered message
  const [status, setStatus] = useState("Submit"); //Tracks form submission status

  //Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents default page reload behavior when form is submitted

    //Validation checks: Ensures all fields are filled before submitting
    if (!name) return setStatus("Missing Name content");
    if (!email) return setStatus("Missing Email content");
    if (!message) return setStatus("Missing Message content");

    setStatus("Submitted Successfully!"); //Updates button text on successful submission

    //Reset form fields after 3 seconds (optional)
    setTimeout(() => {
      setName(""); //Clears name input
      setEmail(""); //Clears email input
      setMessage(""); //Clears message input
      setStatus("Submit"); //Resets button text
    }, 3000);
  };

  return (
    //Form with submission handler
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Name input field */}
      <div className={styles.formGroup}>
        <label>Name:</label> {/* Label for name input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} //Updates name state when input changes
          required
          className={styles.input}
        />
      </div>

      {/* Email input field */}
      <div className={styles.formGroup}>
        <label>Email:</label> {/* Label for email input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} //Updates email state when input changes
          required
          className={styles.input}
        />
      </div>

      {/* Message input field */}
      <div className={styles.formGroup}>
        <label>Message:</label> {/* Label for message textarea */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)} //Updates message state when input changes
          required
          className={styles.textarea}
        />
      </div>

      {/* Submit button that changes text upon submission */}
      <button type="submit" className={styles.submitButton}>{status}</button>
    </form>
  );
}