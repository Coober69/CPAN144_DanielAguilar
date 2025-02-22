//Import the Image component from Next.js for optimized image loading
import Image from "next/image"; 

//Import CSS module for styling specific to the About page
import styles from "../styles/About.module.css"; 

//Define the AboutPage component
export default function AboutPage() {
  return (
    //Apply container styles to center the content and style the page
    <div className={styles.container}>  
      <h1>About Me</h1>
      <p>This is the about page of Daniel's website.</p> 

      {/* Content section containing a styled box */}
      <div className={styles.content}>
        {/* White box with black text */}
        <div className={styles.box}>
          <p>Hello! :D</p> 
        </div>
      </div>
    </div>
  );
}