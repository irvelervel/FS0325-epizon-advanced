// qui impostiamo il Redux Store
import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

const store = configureStore({
  reducer: mainReducer,
})

export default store
// ora che abbiamo generato un valido Redux Store dentro la nostra applicazione JS,
// dobbiamo connetterlo alla nostra app React!
// ora andiamo ad innestarlo nel nostro albero dei componenti
// --> main.jsx
