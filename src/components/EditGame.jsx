import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button, Card } from 'react-bootstrap'
import { updateGame } from '../Redux/gamesSlice'

function EditGame(props) {
  const dispatch = useDispatch()

  // on charge les infos du jeu selectionne dans le formulaire
  const [title, setTitle] = useState(props.game.title)
  const [genre, setGenre] = useState(props.game.genre)
  const [platform, setPlatform] = useState(props.game.platform)
  const [price, setPrice] = useState(props.game.price)
  const [image, setImage] = useState(props.game.image)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      updateGame({
        id: props.game.id,
        title: title,
        genre: genre,
        platform: platform,
        price: Number(price),
        image: image,
      })
    )

    props.closeEdit()
  }

  return (
    <Card border="warning">
      <Card.Body>
        <h4>Edit Game</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Genre</Form.Label>
            <Form.Control value={genre} onChange={(e) => setGenre(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Platform</Form.Label>
            <Form.Select value={platform} onChange={(e) => setPlatform(e.target.value)}>
              <option>PC</option>
              <option>PS5</option>
              <option>Xbox</option>
              <option>Nintendo Switch</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Price (DT)</Form.Label>
            <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control value={image} onChange={(e) => setImage(e.target.value)} />
          </Form.Group>
          <div className="d-flex gap-2">
            <Button type="submit" variant="warning" className="w-100">Save</Button>
            <Button variant="secondary" className="w-100" onClick={props.closeEdit}>Cancel</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default EditGame
