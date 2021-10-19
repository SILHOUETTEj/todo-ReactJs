import React,{useState} from 'react'
import './Header.scss'
import logo from "./logo192.png";
import{Link,Route,BrowserRouter, Switch} from "react-router-dom"
import Todo from '../Todo/Todo';
import NewPage from '../NewPage/NewPage';
let Header = () => {
    let [time,setTime] = useState(new Date())
    setInterval(() => setTime(new Date()),1000);
    return (
     <BrowserRouter>
        <div className="header">
          <Link className="home" to="/"><img src={logo} alt="logo" width="60" /> </Link>
           
           <i>Now {time.toLocaleTimeString()}</i>
          <Link to="/todo" className="todolist">Todo</Link>
           <div className="nav">Navigation</div>
         
        
        </div>
       
        </BrowserRouter>
     
        
    )
}


export default Header