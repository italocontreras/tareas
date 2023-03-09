import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard/PersonCard';

function App() {
  return (
    <div className="App">
      <div className = "container">
        <div className = "row">
          {/* <PersonCard firstName={'Doe'} lastName={'Jane'} age={45} hairColor={'Black'}/> */}
          <PersonCard firstName='Doe' lastName='Jane' age={45} hairColor='Black'/> 
        </div>
        <div className = "row">
          <PersonCard firstName='Smith' lastName='John' age={88} hairColor='Brown'/> 
        </div>
        <div className = "row">
          <PersonCard firstName='Fillmore' lastName='Millard' age={50} hairColor='Brown'/> 
        </div>
        <div className = "row">
          <PersonCard firstName='Smith' lastName='María' age={62} hairColor='Brown'/> 
        </div>
      </div>
    </div>
  );
}

export default App;
