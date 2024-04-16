import { useState } from "react";
import "./App.css";
import ResearchList from "./components/research-list";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Scientify</h1>
      <ResearchList />
    </>
  );
}

export default App;
