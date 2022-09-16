import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App w-screen">
      <div className="flex w-full justify-evenly">
        <a
          href="https://vitejs.dev"
          className="acpect-square h-[25vh]"
          target="_blank"
        >
          <img
            src="/vite.svg"
            className="logo acpect-square h-[25vh] animate-bounce"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://reactjs.org"
          className="animate-bounce acpect-square h-[25vh]"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react acpect-square h-[25vh] animate-bounce"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React + Tailwind + React Router Dom + React Hot Toast</h1>
      <div className="card ">
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
  );
}

export default App;
