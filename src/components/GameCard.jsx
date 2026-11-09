import { useDispatch } from 'react-redux'
import { Card, Button, Badge } from 'react-bootstrap'
import { deleteGame } from '../Redux/gamesSlice'

function GameCard(props) {
  const dispatch = useDispatch()
  const game = props.game

  return (
    <Card className="game-card h-100">
      <Card.Img variant="top" src={game.image} />
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <p className="mb-1">Genre : {game.genre}</p>
        <p className="mb-1">
          Platform : <Badge bg="info">{game.platform}</Badge>
        </p>
        <p className="price">{game.price} DT</p>
        <div className="d-flex gap-2">
          <Button variant="warning" size="sm" onClick={() => props.setGameToEdit(game)}>
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={() => dispatch(deleteGame(game.id))}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default GameCard
