import { useState } from "react";

function Quizz() {
  const [quizz, setQuizz] = useState([]);
  const [numQuizz, setNumQuiz] = useState(0);
  const getQuizz = () => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setQuizz(data);
      });
  };
  const addNumQuizz = () => {
    setNumQuiz(numQuizz + 1);
  };
  return (
    <div>
      <button type="button" onClick={getQuizz}>
        getQuizz
      </button>
      <button type="button" onClick={addNumQuizz}>
        getNumQuizz
      </button>
      <p>
        Who was given the title &quot;Full Metal&quot; in the anime series
        &quot;Full Metal Alchemist&quot;?
      </p>
      {quizz.results ? <p>{quizz.results[numQuizz].question}</p> : <p>ici</p>}
    </div>
  );
}

export default Quizz;
