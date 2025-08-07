import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

// CartIndicator al momento è un componente con un bottone la cui etichetta
// mostra uno "0" fisso
// quello che vogliamo fare è invece sostituire quel valore con la reale
// lunghezza dell'array "content" dentro la slice "cart" del Redux Store

// per LEGGERE dal Redux Store utilizziamo un hook chiamato "useSelector"
// useSelector può venire utilizzato SOLO all'interno di un Provider

const CartIndicator = () => {
  const navigate = useNavigate()
  const cartLength = useSelector((state) => {
    // useSelector riceve TUTTO lo stato da Redux, e dobbiamo ritornare
    // il valore che vogliamo utilizzare
    return state.cart.content.length
  })

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{cartLength}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
