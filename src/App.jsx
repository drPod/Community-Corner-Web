import { useState } from 'react';
import './App.css';
import '../tailwind.config'; 
import Navbar from './Navbar';
import Homepage from './Homepage';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div class="body">
        <Navbar />
        <Homepage />
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
      <div id="footer">
        <Footer />
      </div>
    </div>
    
  )
}

export default App
