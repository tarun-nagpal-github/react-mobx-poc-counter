import React from 'react'; 
import './App.css';
import Counter from "./Counter";
import  store  from "./store";
import {observer} from 'mobx-react';
import Card from "./Card";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Counter />
      <Card heading={"APP.js"} value={store.counter} />
      </header>
    </div>
  );
}

export default observer(App);
