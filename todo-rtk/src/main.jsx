import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{Provider} from "react-redux"
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
 //store ko stora naam ki prop ke ander store kiya taaki ham kahi pr bhi store ka use kr skte hai

createRoot(document.getElementById('root')).render(
   
  <Provider store={store}>
      <App />
  </Provider>
  
)
