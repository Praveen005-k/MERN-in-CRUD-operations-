
import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users';
import CreateUSers from './CreateUSers';
import UpdateUsers from './UpdateUsers';

function App() {
  
  const [count , setCount] = useState(0);
  return (
    <>
    
        <Routes>
          <Route path='/' element={<Users />}/>
          <Route path='/create' element={<CreateUSers /> }/>
          <Route path='/update/:id' element={<UpdateUsers /> }/>
        </Routes>
      
    </>
  )
}

export default App
