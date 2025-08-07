import { Col, Row, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartUntil5 } from '../redux/actions'

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch()
  // dispatch è la funzione in grado di "dispatchare" (spedire)
  // una ACTION al REDUCER
  // è il primo passo per innescare la generazione di un nuovo stato
  // da parte del REDUCER

  // recupero dallo store l'informazione sullo username
  const name = useSelector((state) => {
    return state.user.name
  })

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={bookSelected.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="fw-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="fw-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              {name ? (
                <Button
                  className="d-flex align-items-center"
                  onClick={() => {
                    // al click del bottone invoco la funzione dispatch
                    dispatch(addToCartUntil5(bookSelected))
                  }}
                >
                  <span className="me-2">AGGIUNGI AL</span>
                  <FaShoppingCart />
                </Button>
              ) : (
                <p className="fst-italic">
                  Fai il login per comprare questo libro
                </p>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Clicca su un libro per i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail
