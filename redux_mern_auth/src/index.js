import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { combineReducers, createStore } from 'redux';
import authReducer from './store/reducers/authReducer';
import userReducer from './store/reducers/userReducer';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
})

const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
