import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Table } from './components/Table';
import { store } from './store/reduxStore';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  

function App() {



  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    console.log(worker)
    worker.start(); 
  }

 
  return (
    <div className="App">
      <Provider store={store}>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
