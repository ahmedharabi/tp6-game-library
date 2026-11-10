import { useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import GameList from './components/GameList'
import AddGame from './components/AddGame'
import EditGame from './components/EditGame'

function App() {
  // le jeu qu'on veut modifier (null = pas de modification)
  const [gameToEdit, setGameToEdit] = useState(null)

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>🎮 Game Library</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="my-4">
        <Row>
          <Col lg={4} className="mb-4">
            {gameToEdit ? (
              <EditGame
                key={gameToEdit.id}
                game={gameToEdit}
                closeEdit={() => setGameToEdit(null)}
              />
            ) : (
              <AddGame />
            )}
          </Col>
          <Col lg={8}>
            <GameList setGameToEdit={setGameToEdit} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
