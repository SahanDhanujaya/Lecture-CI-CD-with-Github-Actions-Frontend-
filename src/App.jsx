import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [data, setData] = useState({
    id: 0,
    title: "",
    completed: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://lecture-ci-cd-with-github-actions.onrender.com/api/fake")
        .then((response) => response.json())
        .then((json) => setData(json));
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Hello {data.title}</h1>
        <p>{data.id} - {data.completed}</p>
      </div>
    </>
  );
}

export default App;
