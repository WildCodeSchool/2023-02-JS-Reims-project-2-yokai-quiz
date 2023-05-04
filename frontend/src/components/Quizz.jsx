import { useState } from "react";
import PropTypes from "prop-types";

function Quizz({ setYokaiLife, yokaiLife, setPlayerLife, playerLife, quizz }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const passToNextQuestion = (answer) => {
    if (answer === quizz.questions[questionIndex].correct_answer) {
      setYokaiLife(yokaiLife - 1);
      localStorage.setItem(
        "score",
        parseInt(localStorage.getItem("score"), 10) ?? 0 + 10
      );
    } else {
      setPlayerLife(playerLife - 1);
      localStorage.setItem(
        "score",
        parseInt(localStorage.getItem("score") ?? 0, 10) - 10
      );
    }
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
        <h2 className="question quizz">
          {quizz.questions[questionIndex].question
            .replace(/&quot;/g, `"`)
            .replace(/&#039;/g, `'`)
            .replace(/&amp;/g, `&`)
            .replace(/&eacute;/g, `é`)}
        </h2>
        <div className="answers quizz">
          {answers.map((answer) => (
            <button
              key={answer}
              type="button"
              onClick={() => {
                passToNextQuestion(answer);
              }}
            >
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

Quizz.propTypes = {
  quizz: PropTypes.shape({
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        category: PropTypes.string.isRequired,
        correct_answer: PropTypes.string.isRequired,
        difficulty: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        incorrect_answers: PropTypes.arrayOf,
      }).isRequired
    ).isRequired,
  }).isRequired,
  setYokaiLife: PropTypes.func.isRequired,
  setPlayerLife: PropTypes.func.isRequired,
  yokaiLife: PropTypes.number.isRequired,
  playerLife: PropTypes.number.isRequired,
};
export default Quizz;
