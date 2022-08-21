import './App.css';
import { Col, Spin } from 'antd';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import { useEffect } from 'react';
import { getPokemon } from './utils/getPokemon';
import { getPokemonWithDetails, setLoading } from './store/actions/PokemonActions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemon);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonResult = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonResult.results));
      dispatch(setLoading(false));
    }

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Col span={6} offset={9}>
      <img src={logo} alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <SearchBar />
      </Col>
      {loading ? (
      <Col offset={12}>
        <Spin spinning size="large" style={{ marginTop: 20 }} />
      </ Col>
      ) : (
        <PokemonList pokemon={pokemon} />
      )}
    </div>
  );
}

export default App;
