import Link from 'next/link';

const posts = {
  '1': { title: 'First Post', content: 'You Opened The First Post!' },
  '2': { title: 'Second Post', content: 'You Opened The Second Post!' },
  '3': { title: 'Third Post', content: 'You Opened The Third Post!' },
};

export default function Post({ params }) {
  const post = posts[params.id];

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <nav>
        <Link href="/">Back to Home</Link>
      </nav>
      <p>{post.content}</p>
    </>
  );
}