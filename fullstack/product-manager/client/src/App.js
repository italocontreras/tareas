import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// import Nav from 'react-bootstrap/Nav';

// import Main from './components/Main';
// import PersonDetail from './components/PersonDetail';
// import Update from './components/Update';


import Main from './components/main/Main';
import Product from './components/product/Product';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="">
          <Routes>
            <Route path='/' element={<Main />}></Route>
            {/* <Route path='/product/:id' element={<Product />}></Route> */}
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;