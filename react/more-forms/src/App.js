import './App.css';
import {useState} from 'react'
import RegisterForm from './components/registerform/RegisterForm';


function App() {
    //Definir nuestro estado
    const [state,setState] = useState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:'',

      firstNameError:'',
      lastNameError:'',
      emailError:'',
      passwordError:'',
      confirmPasswordError:''
    })


  return (
    <div className="App">
          
      <RegisterForm state={state} setState={setState}/>
      
    </div>
  );
}

export default App;
