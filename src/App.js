import './App.css';
import About from './components/About';
import React  from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
//import Categories1 from './components/Categories1';
import { Categories } from './components/Categories';
import { ArticleList} from './components/articles/ArticleList'
function App(){
  return(
    /*<div className='App'>i have bee
      <About/>
    </div>*/
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/categories' element={<Categories/>}></Route>
      <Route path='/articleList' element={< ArticleList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
