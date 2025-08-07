import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import store from './redux/store/index.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  // circondo App con il componente Provider di react-redux
  <Provider store={store}>
    <App />
  </Provider>
)
