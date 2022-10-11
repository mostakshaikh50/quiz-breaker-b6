import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom';
import './Components/Header.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/about' element={<About></About>}></Route>
         <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
