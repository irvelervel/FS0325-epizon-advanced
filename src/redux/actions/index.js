// questo file actions/index.js servirà a OTTIMIZZARE il flusso di Redux

// creiamo delle costanti per gli ACTION TYPES
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// spesso il file actions viene utilizzato per ospitare dei veri e propri
// ACTION CREATORS
// un ACTION CREATOR è una FUNZIONE che TORNA UN'AZIONE

export const addToCartAction = (bookSelected) => {
  return {
    // il valore di type LO SCEGLIETE VOI
    type: ADD_TO_CART,
    payload: bookSelected,
    // come payload allego alla mia action
    // l'intero libro che sto visualizzando
    // altrimenti il reducer non saprebbe QUALE
    // libro aggiungere con la tua action!
  }
}

export const removeFromCartAction = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  }
}
