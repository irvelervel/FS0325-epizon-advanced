// questo file actions/index.js servirà a OTTIMIZZARE il flusso di Redux

// creiamo delle costanti per gli ACTION TYPES
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

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

// action creator per riempire user.name
export const setUsernameAction = (value) => {
  return {
    type: SET_USERNAME,
    payload: value,
  }
}

// la funzione "dispatch" di Redux in realtà può dispatchare ALTRO oltre
// che semplici oggetti actions... può dispatchare anche FUNZIONI
// queste funzioni sono il luogo in cui è appropriato gestire eventuali
// operazioni asincrone prima di risvegliare il reducer

// come vi comportereste se voleste avere un carrello di max 5 elementi?
// un modo elegante ed integrato potrebbe essere creare un action creator "speciale"
// un action creator "speciale" non ritorna una action, ma ritorna una function!

export const addToCartUntil5 = (bookSelected) => {
  // non ritorniamo un oggetto, ora ritorniamo una funzione!
  return (dispatch, getState) => {
    // qui dentro voi potete fare quello che volete...
    // es. fetch, random, operazioni async, verifica stato redux etc. etc.
    // se Redux si accorge che non dispatchate un oggetto ma una funzione,
    // arricchirà quella funzione con 2 parametri: la funzione dispatch e la
    // funzione getState
    if (getState().cart.content.length < 5) {
      dispatch({
        type: ADD_TO_CART,
        payload: bookSelected,
      })
    } else {
      console.log('CARRELLO PIENO!')
    }
  }
}
