import './App.css';
import { Col } from 'antd';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <SearchBar />
      </Col>
      <PokemonList/>
    </div>
  );
}

export default App;
