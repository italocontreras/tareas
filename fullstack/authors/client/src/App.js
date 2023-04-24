import './App.css';

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import AuthorsList from './components/AuthorsList/AuthorsList';
import UpdateAuthor from './components/UpdateAuthor/UpdateAuthor';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <header className="">
          <Routes>
            {/* <Route default path='/' element={<Main />}></Route> */}
            <Route path='/' element={<AuthorsList />}></Route>
            <Route path='/new' element={<CreateAuthor />}></Route>
            <Route path='/edit/:id' element={<UpdateAuthor />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
