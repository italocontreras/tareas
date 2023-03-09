import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard/PersonCard';

function App() {
  return (
    <div className="App">
      <div className = "container">
        <div className = "row">
          {/* <PersonCard firstName={'Doe'} lastName={'Jane'} age={45} hairColor={'Black'}/> */}
          <PersonCard firstName={'Jane'} lastName={'Doe'} age={45} hairColor='Black'/> 
        </div>
        <div className = "row">
          <PersonCard firstName={'Jhon'} lastName={'Smith'} age={88} hairColor='Brown'/> 
        </div>
      </div>
    </div>
  );
}

export default App;
