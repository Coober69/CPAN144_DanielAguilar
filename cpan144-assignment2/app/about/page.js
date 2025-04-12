import Link from 'next/link';

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <nav>
        <Link href="/">Back to Home</Link>
      </nav>
      <p>Hello - Daniel</p>
    </>
  );
}