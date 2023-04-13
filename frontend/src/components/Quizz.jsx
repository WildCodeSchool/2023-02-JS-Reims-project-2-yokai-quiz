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
  const answer = [];
  if (quizz.results) {
    answer[0] = quizz.results[numQuizz].correct_answer;
    answer[1] = quizz.results[numQuizz].incorrect_answers[0];
    answer[2] = quizz.results[numQuizz].incorrect_answers[1];
    answer[3] = quizz.results[numQuizz].incorrect_answers[2];
  }
  return (
    <>
      <button type="button" onClick={addNumQuizz}>
        getNumQuizz
      </button>
      {quizz.results && (
        <>
          <div>
            <p>{quizz.results[numQuizz].category}</p>
            <p>difficulty: {quizz.results[numQuizz].difficulty}</p>
            <p>type: {quizz.results[numQuizz].type}</p>
          </div>
          <p>
            {quizz.results[numQuizz].question
              .replace(/&quot;/g, `"`)
              .replace(/&#039;/g, `'`)
              .replace(/&amp;/g, `&`)}
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
      )}
    </>
  );
}

export default Quizz;
