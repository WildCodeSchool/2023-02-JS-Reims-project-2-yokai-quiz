import { useState } from "react";

let start = false;

function Quizz() {
  const [quizz, setQuizz] = useState([]);
  const [numQuizz, setNumQuiz] = useState(0);

  const amount = 5 + 5;
  const difficulty = "easy";

  if (start === false) {
    fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`
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
  const answer = [];
  if (quizz.results) {
    answer.push(quizz.results[numQuizz].correct_answer);
    answer.push(quizz.results[numQuizz].incorrect_answers[0]);
    answer.push(quizz.results[numQuizz].incorrect_answers[1]);
    answer.push(quizz.results[numQuizz].incorrect_answers[2]);
  }
  return (
    quizz.results && (
      <>
        <div>
          <p>{quizz.results[numQuizz].category}</p>
          <p>difficulty: {quizz.results[numQuizz].difficulty}</p>
          <p>type: {quizz.results[numQuizz].type}</p>
        </div>
        <p>
          <h2>
            {quizz.results[numQuizz].question
              .replace(/&quot;/g, `"`)
              .replace(/&#039;/g, `'`)
              .replace(/&amp;/g, `&`)}
          </h2>
        </p>
        <p>
          <button type="button" onClick={addNumQuizz}>
            {answer[0]
              .replace(/&quot;/g, `"`)
              .replace(/&#039;/g, `'`)
              .replace(/&amp;/g, `&`)}
          </button>
          <button type="button" onClick={addNumQuizz}>
            {answer[1]
              .replace(/&quot;/g, `"`)
              .replace(/&#039;/g, `'`)
              .replace(/&amp;/g, `&`)}
          </button>
          <button type="button" onClick={addNumQuizz}>
            {answer[2]
              .replace(/&quot;/g, `"`)
              .replace(/&#039;/g, `'`)
              .replace(/&amp;/g, `&`)}
          </button>
          <button type="button" onClick={addNumQuizz}>
            {answer[3]
              .replace(/&quot;/g, `"`)
              .replace(/&#039;/g, `'`)
              .replace(/&amp;/g, `&`)}
          </button>
        </p>
      </>
    )
  );
}

export default Quizz;
