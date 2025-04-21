//CPAN 144 - FINAL EXAM - Daniel Aguilar
//Page.js

import Link from 'next/link';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import DogBreeds from './components/DogBreeds';

/* Home page displaying all components */

export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>CPAN 144: Final Exam - Daniel Aguilar</h1>
      
      {/* Section 4: Routing */}
      <nav style={{ marginBottom: '30px', padding: '10px', background: '#f0f0f0' }}>
        <Link href="/about">Go to About Page</Link>
      </nav>

      {/* Section 1: Component Design and JSX */}
      <section style={sectionStyles}>
        <h2>Section 1: User Profile</h2>
        <UserProfile 
          name="John Doe" 
          bio="Software developer with 5 years of experience in React and Node.js"
        />
      </section>
      
      {/* Section 2: State Management */}
      <section style={sectionStyles}>
        <h2>Section 2: Counter</h2>
        <Counter />
      </section>
      
      {/* Section 3: Event Handling */}
      <section style={sectionStyles}>
        <h2>Section 3: Todo List</h2>
        <TodoList />
      </section>
      
      {/* Section 5: API and Data Fetching */}
      <section style={sectionStyles}>
        <h2>Section 5: Dog Breeds API</h2>
        <DogBreeds />
      </section>
    </main>
  );
}

// Reusable section styles
const sectionStyles = {
  margin: '30px 0', 
  padding: '20px', 
  border: '1px solid #ddd',
  borderRadius: '8px'
};