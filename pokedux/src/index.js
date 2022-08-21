import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pokemonReducer } from './store/reducers/PokemonReducer';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancers = compose(applyMiddleware(thunk, logger))

const store = createStore(pokemonReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
  </React.StrictMode>
);
