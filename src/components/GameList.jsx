import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import GameCard from './GameCard'

function GameList(props) {
  const games = useSelector((state) => state.games)

  return (
    <div>
      <h3 className="mb-3">My Games ({games.length})</h3>
      <Row>
        {games.map((game) => (
          <Col key={game.id} sm={6} md={4} className="mb-4">
            <GameCard game={game} setGameToEdit={props.setGameToEdit} />
          </Col>
        ))}
      </Row>
      {games.length === 0 && <p>No games in the library.</p>}
    </div>
  )
}

export default GameList
