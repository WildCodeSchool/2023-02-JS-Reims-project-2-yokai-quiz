const { useState } = require("react");

function Quizz() {
  const [quizz, setQuizz] = useState([]);
  const [numQuizz] = useState(0);
  const getQuizz = () => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setQuizz(data);
      });
  };

  return (
    <div>
      <button type="button" onClick={getQuizz}>
        getQuizz
      </button>
      <p>{quizz[numQuizz].length}</p>
    </div>
  );
}

export default Quizz;
