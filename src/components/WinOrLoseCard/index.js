// Write your code here.
import './index.css'

const WON_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imgUrl = isWon ? WON_IMG : LOSE_IMG
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="won-or-lose-container">
      <div className="details-card">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score-value">{score}/12</p>
        <button type="button" className="play-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="img-section">
        <img className="win-or-lose-img" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
