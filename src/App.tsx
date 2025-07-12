// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { useAppSelector } from "./store/hooks.ts";
import { useState } from "react";

function App() {
  const title = useAppSelector((state) => state.starter.title);
  const [number, setNumber] = useState(0);

  return (
    <>
      Hello world | {title} | {number}
      <div>
        <button
          onClick={() => {
            setNumber((n) => n + 2);
            setNumber(number + 2);
          }}
        >
          update
        </button>
      </div>
    </>
  );
}

export default App;
