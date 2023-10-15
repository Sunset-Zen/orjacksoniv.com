import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/Aboutpage";
import ProjectPage from "./pages/project/Projectpage";
import ExpPage from "./pages/experience/Exppage";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // Attributes || Hook(s)
  const [count, setCount] = useState(0);
  // JSX
  return (
    <>
      <Router>
        <div>
          <div>
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/about-me" element={<AboutPage />}></Route>
              <Route exact path="/projects" element={<ProjectPage />}></Route>
              <Route exact path="/exp" element={<ExpPage />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
      </p> */
