import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import Rest_API from './component/Rest_API'
//import Insert_Record from './component/Insert_Record'
//import Delete_Record from './component/Delete_Record'
//import Update_Record from './component/Update_Record'
//import Home from './component/Home'
import Master from './component/Master'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   {/* <Home /> */}
   {/* <Rest_API/>  */}
   {/* <Delete_Record/>  */}
   {/* <Insert_Record/> */}
   {/* <Update_Record/> */}
   <Master />
  </BrowserRouter>
  

)
