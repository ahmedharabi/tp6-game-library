import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button, Card } from 'react-bootstrap'
import { addGame } from '../Redux/gamesSlice'

function AddGame() {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [platform, setPlatform] = useState('PC')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title === '' || genre === '' || price === '') {
      alert('Please fill all the fields')
      return
    }

    dispatch(
      addGame({
        id: Date.now(),
        title: title,
        genre: genre,
        platform: platform,
        price: Number(price),
        image: image,
      })
    )

    setTitle('')
    setGenre('')
    setPlatform('PC')
    setPrice('')
    setImage('')
  }

  return (
    <Card>
      <Card.Body>
        <h4>Add a Game</h4>
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
          <Button type="submit" variant="success" className="w-100">Add Game</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddGame
