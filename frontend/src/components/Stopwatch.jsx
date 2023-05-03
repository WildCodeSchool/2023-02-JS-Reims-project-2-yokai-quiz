import { useState, useEffect } from "react";
import "../App.scss";

function Stopwatch({ templeName, yokaiLife }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (
      yokaiLife <= 0 &&
      time < localStorage.getItem(`${templeName} best time`)
    ) {
      localStorage.setItem(`${templeName} best time`, time);
    } else if (
      yokaiLife <= 0 &&
      localStorage.getItem(`${templeName} best time`) == null
    ) {
      localStorage.setItem(`${templeName} best time`, time);
    }
  }, [yokaiLife]);

  useEffect(() => {
    const intervalId = setInterval(() => setTime(time + 1), 10);
    return () => clearInterval(intervalId);
  });
}

export default Stopwatch;
