import React,{useState,useEffect, createRef} from "react"
import "./Todo.scss"

let todos= [];
let Todo = () => {
  
    let text;
    let newRef = React.createRef();
    let [inp,setInp] = useState("");
    let [arr,setArr] =useState([]);
    useEffect(()=>{
        console.log("render");
       
    },[todos])
    let AddTd = () => {
        text = newRef.current.value;
        todos.push(text);
        setArr( [...arr,text]);
       
        setInp("");
    }
    let onChangeHandler = () => {
            text = newRef.current.value;
            setInp(text);
    }
    let clearTodos = () => {
        setArr([]);
    }
    function deleteCase (index) {
       todos.splice(index,1);
       console.log(index,todos);
        setArr([...todos]);

    }

    return(
      
        <div className="container">
            <h1 className="title">Todo</h1>
            <div className="row">
            <input ref={newRef} type="text" onChange={onChangeHandler} className="form" value={inp}/>
            <a href="#" onClick={AddTd} className="leftbtn"><span className="btnt">Add</span></a>
            <a href="#" onClick={clearTodos} ><span className="btnt">Clear</span></a>
            </div>
            {arr.map((item,index) => {return <div className="case-container" key={index}> 
            <div className="case">{item}</div>
            <a href="#" className="done" onClick={() => deleteCase(index)} >Done ✔</a>
            </div>
            }
            )}
            
            
        </div>
    )
}
export default Todo;