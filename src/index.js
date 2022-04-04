import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App';
import { store } from './redux/configureStore';
import CafeProfile from './components/CafeProfile/CafeProfile';

ReactDOM.render(
    <React.StrictMode>  
        <Provider store={store}>
           <App />
           <CafeProfile />
        </Provider>
      </React.StrictMode>,  
  document.getElementById('root')
);