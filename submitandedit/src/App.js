import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from "./child/child"

class App extends Component {

  constructor(){
    super();
    this.state = {
      name:""
    };
  }

  whensubmit(e){
   // let check ;
  //  console.log(check);
    this.setState({name : this.refs.name.value});
    console.log(this.state.name);
  //  e.preventDefault();

  }

  onChange(newValue){
    alert("onchange "+newValue)
    console.log(newValue);
    this.refs.name.value = newValue;
  }



  render() {
    return (
      <div className="App">

        <form>
            Name:<input type = "text" ref = "name" /><br/>
            <button type= "button" onClick = {this.whensubmit.bind(this)}>Submit</button>
            
          </form>
          <Child nameToPass = {this.state.name}  nameOnChange = {this.onChange.bind(this)} />
      </div>
    );
  }
}

export default App;
