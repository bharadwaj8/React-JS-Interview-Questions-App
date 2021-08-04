import './index.css'

const InterviewQuestion = props => {
  const {details, showId, changeShow} = props

  const {id, questionText, answerText, language, difficultyLevel} = details

  const showAnswer = () => {
    changeShow(id)
  }

  return (
    <div className="question-card">
      <div className="tag-card">
        <span className={`question-filter ${difficultyLevel.toLowerCase()}`}>
          {difficultyLevel}
        </span>
        <span className={`question-filter ${language.toLowerCase()}`}>
          {language}
        </span>
      </div>
      <h1 className="question">{questionText}</h1>

      <button className="button" type="button" onClick={showAnswer}>
        {!showId.includes(id) ? 'Show' : 'Hide'}

        {!showId.includes(id) ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/down-arrow.png"
            alt="down arrow"
            className="arrow"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/up-arrow.png"
            alt="up arrow"
            className="arrow"
          />
        )}
      </button>
      {showId.includes(id) && <p className="answer">{answerText}</p>}
    </div>
  )
}

export default InterviewQuestion
