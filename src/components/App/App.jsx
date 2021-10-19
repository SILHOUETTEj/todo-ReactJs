import React from 'react'
import './App.css';
import Header from '../Header/Header.jsx'
import Main from '../Main/Main';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Todo from "./../Todo/Todo";
import NewPage from '../NewPage/NewPage';

let App = () => {
  return (
    <div className="app">
            <Header/>
            <div className="main">
          {/* <BrowserRouter>
      
          <Route exact path="/" component={Todo}/>
           
          <Route path="/todo" component={Todo}/>
          
          
           
      
        </BrowserRouter> */}
        <Todo/>
        </div>
          
    </div>
  );
}

export default App;
