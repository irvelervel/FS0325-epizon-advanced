// qui creo il "robottino" che sta alla base del funzionamento di Redux
// un reducer è una FUNZIONE PURA: una funzione che a partire dallo stesso
// input (parametri) restituisce SEMPRE lo stesso output

import { ADD_TO_CART, REMOVE_FROM_CART, SET_USERNAME } from '../actions'

// il reducer riceverà da Redux 2 parametri ad ogni invocazione:
// 1) lo stato attuale dell'applicazione
// 2) la action che ha "svegliato" il reducer, ovvero la modifica che vogliamo
// apportare allo store

const initialState = {
  // qui definisco il valore iniziale di state, ovvero lo stato iniziale
  // di Redux. La sua forma (shape) rimarrà sempre invariata durante la vita
  // dell'applicazione
  cart: {
    // questa "sotto-sezione" dello stato di Redux in gergo si chiama "slice"
    // conterrà tutte le informazioni relative alla funzionalità "carrello"
    content: [],
    // qui dentro potrei anche aggiungerci altre informazioni da memorizzare
    // in Redux relative al carrello (quantità, errori, caricamenti)
  },
  user: {
    name: '',
  },
}

const mainReducer = (state = initialState, action) => {
  // con state = initialState mettiamo la prima "biglia" sul piedistallo
  // cioè alla prima invocazione del mainReducer, quando l'app si sta ancora
  // caricando, state è undefined! lo riempiamo con il nostro stato iniziale
  // lo scopo del reducer è generare il nuovo stato di Redux a seguito di una action

  switch (action.type) {
    // sulla base dei tipi di action che il reducer intercetta
    // noi decidiamo in che modo generare la nuova "biglia"

    case ADD_TO_CART:
      // questo case ha lo stesso valore del type della action che vuole intercettare
      return {
        // in ogni case io devo SEMPRE ritornare la nuova biglia
        // ovvero il nuovo valore per lo stato dell'applicativo
        ...state,
        cart: {
          ...state.cart,
          // action.payload è il libro nuovo in questo caso
          // content: [...state.cart.content, action.payload],
          content: state.cart.content.concat(action.payload),
        },
      }

    case REMOVE_FROM_CART:
      // creare il nuovo stato per l'app
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.filter((libro) => {
            if (libro.id === action.payload) {
              return false
            } else {
              return true
            }
          }),
          // versione PRO
          // content: state.cart.content.filter(libro => libro.id !== action.payload)
          // versione con l'INDICE invece dell'ID
          // content: state.cart.content.filter((_, i) => {
          //   return i !== action.payload
          // }),
        },
      }

    case SET_USERNAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      }

    default:
      // con il caso di default cattureremo tutte le action
      // il cui type non è stato riconosciuto
      return state
    // in caso di action non riconosciuta, genero SEMPRE e comunque
    // un nuovo stato per l'app ma in questo caso uno stato identico
    // a quello attuale
  }
}

export default mainReducer
