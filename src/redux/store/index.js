// qui impostiamo il Redux Store
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'

const combinedReducer = combineReducers({
  cart: cartReducer, // assegno alla slice cart il reducer di riferimento
  user: userReducer, // assegno alla slice user il reducer di riferimento
})

const store = configureStore({
  reducer: combinedReducer, // riassegno alla proprietà "reducer"
  // la mia funzione "ricombinata"
})

export default store
// ora che abbiamo generato un valido Redux Store dentro la nostra applicazione JS,
// dobbiamo connetterlo alla nostra app React!
// ora andiamo ad innestarlo nel nostro albero dei componenti
// --> main.jsx
