import './App.css';
import Item from './Components/ItemList/Item';
import Main from './Components/Main/Main';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Item />
    </div>
  );
}

export default App;
