import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../tailwind.config'; 
import Navbar from './Navbar';
import NewsIcon from './NewsIcon';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <NewsIcon 
        picture={reactLogo}
        articleType="NEWS"
        author="Jia Lee"
        releaseDate="May 3, 2023"
        title="Roald Dahl’s Books Rewritten"
      />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
