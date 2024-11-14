import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav className="header-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="score-timer-container">
        <li>
          <p className="score-text">
            Score:<span className="score-count"> {score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            className="timer-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="time-in-secs">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
