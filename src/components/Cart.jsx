import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCartAction } from '../redux/actions'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state) => {
    return state.cart.content
    // sono andato a recuperare l'array content con i libri del carrello
  })

  const availableBooks = useSelector((state) => {
    return state.book.available
  })

  const username = useSelector((state) => {
    return state.user.name
  })

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    // controlliamo se l'utente ha uno username
    // e se non ce l'ha lo rimbalziamo in homepage
    if (!username) {
      navigate('/')
    }
  })

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cart.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  // questo bottone dovrebbe RIMUOVERE il libro selezionato
                  // dal carrello nel Redux Store
                  dispatch(removeFromCartAction(book.id))
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          TOTALE:{' '}
          {cart.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          <p>Attualmente abbiamo {availableBooks.length} libri disponibili.</p>
        </Col>
      </Row>
    </Row>
  )
}

export default Cart
