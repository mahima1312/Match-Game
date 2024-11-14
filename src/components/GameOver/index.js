import './index.css'

const GameOver = props => {
  const {score, playAgain} = props
  return (
    <div className="game-over">
      <div className="game-over-container">
        <img
          className="trophy-img"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
        />
        <p className="your-score">YOUR SCORE</p>
        <p className="score">{score}</p>

        <button type="button" onClick={playAgain} className="play-btn">
          <img
            className="reset-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default GameOver
