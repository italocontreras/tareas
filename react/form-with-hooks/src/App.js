import React,{useState} from "react";
import Form from './components/form/Form';
import Results from "./components/results/Results";

import './App.css';


function App() {

  const [state,setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">

      <div className="form-component"> 
        <Form inputs={state} setInputs={setState}></Form>
      </div>
      <div className="results-component">
        <Results data={state}></Results>
      </div>    
      
    </div>
  );
}

export default App;
