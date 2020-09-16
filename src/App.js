import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import LogsAddModal from './components/logs/LogsAddModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechsModal from './components/techs/AddTechsModal';
import ListTechModal from './components/techs/ListTechModal';
import { Provider } from 'react-redux';
import store from './components/store';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <Logs />
          <AddBtn />
          <LogsAddModal />
          <EditLogModal />
          <AddTechsModal />
          <ListTechModal />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
