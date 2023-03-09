import './App.css';
import Advertisement from './components/advertisement/Advertisement';
import Main from './components/main/Main'
import SubContents from './components/subcontents/SubContents';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Main>
        <SubContents></SubContents>
        <SubContents></SubContents>
        <SubContents></SubContents>
        <Advertisement></Advertisement>
      </Main>
    </div>
  );
}

export default App;
