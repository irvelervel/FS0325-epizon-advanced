// qui creo il "robottino" che sta alla base del funzionamento di Redux
// un reducer è una FUNZIONE PURA: una funzione che a partire dallo stesso
// input (parametri) restituisce SEMPRE lo stesso output

import { SET_USERNAME } from '../actions'

// il reducer riceverà da Redux 2 parametri ad ogni invocazione:
// 1) lo stato attuale dell'applicazione
// 2) la action che ha "svegliato" il reducer, ovvero la modifica che vogliamo
// apportare allo store

const initialState = {
  name: '',
}

const userReducer = (state = initialState, action) => {
  // con state = initialState mettiamo la prima "biglia" sul piedistallo
  // cioè alla prima invocazione del userReducer, quando l'app si sta ancora
  // caricando, state è undefined! lo riempiamo con il nostro stato iniziale
  // lo scopo del reducer è generare il nuovo stato di Redux a seguito di una action

  switch (action.type) {
    // sulla base dei tipi di action che il reducer intercetta
    // noi decidiamo in che modo generare la nuova "biglia"
    case SET_USERNAME:
      return {
        ...state,
        name: action.payload,
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

export default userReducer
