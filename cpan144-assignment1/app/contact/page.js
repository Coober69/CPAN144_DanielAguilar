import ContactForm from "../components/ContactForm"; // Import the ContactForm component

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>You can reach Daniel via email at danielaguilar.jg@gmail.com.</p>
      
      {/* Add Contact Form */}
      <ContactForm />
    </div>
  );
}