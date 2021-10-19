import React from 'react'
import Todo from '../Todo/Todo'
import "./Main.scss"
import { Link, Route, BrowserRouter, Switch } from "react-router-dom"
import NewPage from '../NewPage/NewPage'



const Main = () => {
  return (
    <div className="main">
      <BrowserRouter>
      
          <Route exact path="/" component={NewPage}/>
           
          <Route path="/todo" component={Todo}/>
          
          
           
      
        </BrowserRouter>
        </div>
      )
}

export default Main