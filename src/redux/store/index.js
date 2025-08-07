// qui impostiamo il Redux Store
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'
import bookReducer from '../reducers/bookReducer'

const combinedReducer = combineReducers({
  cart: cartReducer, // assegno alla slice cart il reducer di riferimento
  user: userReducer, // assegno alla slice user il reducer di riferimento
  book: bookReducer,
})
// la slice "book" si occuperà di contenere informazioni relative
// ai libri disponibili nel negozio

const store = configureStore({
  reducer: combinedReducer, // riassegno alla proprietà "reducer"
  // la mia funzione "ricombinata"
})

export default store
// ora che abbiamo generato un valido Redux Store dentro la nostra applicazione JS,
// dobbiamo connetterlo alla nostra app React!
// ora andiamo ad innestarlo nel nostro albero dei componenti
// --> main.jsx
