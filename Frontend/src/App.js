
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Home';
import Add from './Add';
import Edit from './edit';

function App() {
 
  
  return (
    <div className='App'>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/edit/:id' element={<Edit/>}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
