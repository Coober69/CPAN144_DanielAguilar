//CPAN 144 - FINAL EXAM - Daniel Aguilar
//About > Page.jsx

import Link from 'next/link';

/* Simple About page for routing demonstration */

export default function About() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>About Page</h1>
      <p>Poof! You Are On The About Page Now!</p>
      <nav style={{ marginTop: '20px' }}>
        <Link href="/">← Return to Home</Link>
      </nav>
    </main>
  );
}