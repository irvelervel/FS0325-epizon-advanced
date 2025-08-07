import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setUsernameAction } from '../redux/actions'

// CartIndicator al momento è un componente con un bottone la cui etichetta
// mostra uno "0" fisso
// quello che vogliamo fare è invece sostituire quel valore con la reale
// lunghezza dell'array "content" dentro la slice "cart" del Redux Store

// per LEGGERE dal Redux Store utilizziamo un hook chiamato "useSelector"
// useSelector può venire utilizzato SOLO all'interno di un Provider

const CartIndicator = () => {
  const navigate = useNavigate()

  // variabile locale per salvare il contenuto dell'input
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const cartLength = useSelector((state) => {
    // useSelector riceve TUTTO lo stato da Redux, e dobbiamo ritornare
    // il valore che vogliamo utilizzare
    return state.cart.content.length
  })
  // recupero il valore di user.name
  const name = useSelector((state) => {
    return state.user.name
  })

  // CartIndicator mostrerà un input field invece del bottone quanto
  // l'utente non è ancora loggato

  return (
    <div className="d-flex justify-content-end my-4">
      {name ? (
        <span className="d-flex align-items-center">
          <span className="me-2">Benvenuto, {name}!</span>
          <Button
            onClick={() => navigate('/cart')}
            className="d-flex align-items-center"
          >
            <FaShoppingCart />
            <span className="ms-2">{cartLength}</span>
          </Button>
        </span>
      ) : (
        <Form
          className="d-flex"
          onSubmit={(e) => {
            e.preventDefault()
            // ora dispatcheremo una action per cambiare il valore
            // di user.name nello store di Redux
            if (!value.trim()) {
              return
            }
            dispatch(setUsernameAction(value))
          }}
        >
          <Form.Control
            type="text"
            placeholder="Login"
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            required
          />
          <Button variant="primary" type="submit">
            VAI
          </Button>
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
