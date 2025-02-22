import Link from "next/link";

//Define the Header component
export default function Header() {
  return (
    //Creates  navigation bar
    <nav>
      {/* Link to the Home page */}
      <Link href="/">Home</Link> 
      
      {/* Separator */}
      {" | "}  
      
      {/* Link to the About page */}
      <Link href="/about">About</Link> 
      
      {/* Separator */}
      {" | "}  
      
      {/* Link to the Contact page */}
      <Link href="/contact">Contact</Link>
    </nav>
  );
}