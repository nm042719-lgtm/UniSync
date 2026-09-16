import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const checkBackend = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/health");

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("Could not connect to UniSync backend.");
    }
  };

  return (
    <div>
      <h1>UniSync</h1>

      <button onClick={checkBackend}>
        Check Backend
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;