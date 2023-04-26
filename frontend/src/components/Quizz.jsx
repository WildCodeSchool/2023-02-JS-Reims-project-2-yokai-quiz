import { useState } from "react";
import PropTypes from "prop-types";

function Quizz({ setYokaiLife, yokaiLife, setPlayerLife, playerLife, quizz }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const passToNextQuestion = (answer) => {
    if (answer === quizz.questions[questionIndex].correct_answer) {
      setYokaiLife(yokaiLife - 1);
    } else {
      setPlayerLife(playerLife - 1);
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
  quizz: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      templeName: PropTypes.string.isRequired,
      yokaiName: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      yokaiImage: PropTypes.string.isRequired,
      yokaiLife: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  setYokaiLife: PropTypes.func.isRequired,
  setPlayerLife: PropTypes.func.isRequired,
  yokaiLife: PropTypes.number.isRequired,
  playerLife: PropTypes.number.isRequired,
};
export default Quizz;
