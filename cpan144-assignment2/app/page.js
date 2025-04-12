import Link from 'next/link';

export default function Home() {
  const posts = [
    { id: '1', title: 'First Post' },
    { id: '2', title: 'Second Post' },
    { id: '3', title: 'Third Post' },
  ];

  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>
      
      <h2>Blog Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ margin: '0.5rem 0' }}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}