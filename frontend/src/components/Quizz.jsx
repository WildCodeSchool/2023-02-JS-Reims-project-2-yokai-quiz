import { useState } from "react";

let start = false;

function Quizz() {
  const [quizz, setQuizz] = useState([]);
  const [numQuizz, setNumQuiz] = useState(0);
  if (start === false) {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setQuizz(data);
        start = true;
      });
  }
  const addNumQuizz = () => {
    setNumQuiz(numQuizz + 1);
  };
  return (
    <div>
      <button type="button" onClick={addNumQuizz}>
        getNumQuizz
      </button>
      {quizz.results && (
        <p>
          {quizz.results[numQuizz].question
            .replace(/&quot;/g, `"`)
            .replace(/&#039;/g, `'`)}
        </p>
      )}
    </div>
  );
}

export default Quizz;
