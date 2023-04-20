import { useState, useEffect } from "react";

function Quizz() {
  const [quizz, setQuizz] = useState();
  const [questionIndex, setQuestionIndex] = useState(0);

  const amount = 5 + 5;
  const difficulty = "easy";

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=31&difficulty=${difficulty}&type=multiple`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setQuizz({ questions: data.results });
      });
  }, []);

  const passToNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
  };
  const answers = [];
  if (quizz) {
    answers.push(quizz.questions[questionIndex].correct_answer);
    answers.push(...quizz.questions[questionIndex].incorrect_answers);

    answers.sort(() => Math.random() - 0.5);
  }
  return (
    quizz && (
      <>
        <div className="infoQuizz">
          <p>{quizz.questions[questionIndex].category}</p>
          <p>difficulty: {quizz.questions[questionIndex].difficulty}</p>
          <p>type: {quizz.questions[questionIndex].type}</p>
        </div>
        <h2 className="question quizz">
          {quizz.questions[questionIndex].question
            .replace(/&quot;/g, `"`)
            .replace(/&#039;/g, `'`)
            .replace(/&amp;/g, `&`)
            .replace(/&eacute;/g, `é`)}
        </h2>
        <div className="answers quizz">
          {answers.map((answer) => (
            <button key={answer} type="button" onClick={passToNextQuestion}>
              {answer
                .replace(/&quot;/g, `"`)
                .replace(/&#039;/g, `'`)
                .replace(/&amp;/g, `&`)
                .replace(/&eacute;/g, `é`)}
            </button>
          ))}
        </div>
      </>
    )
  );
}

export default Quizz;
