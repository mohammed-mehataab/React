import './App.css';
import About from './components/About';
import React  from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App(){
  return(
    /*<div className='App'>
      <About/>
    </div>*/
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
