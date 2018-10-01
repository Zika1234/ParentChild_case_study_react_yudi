import React, { Component } from 'react';


class Child extends Component {


    constructor(){
        super();
        this.state = {
            ename:"",
            arr:[]
        }

        this.arr2 = []
    }

editChange(){
    let var1 = this.refs.ename.value;
    this.arr2.push(var1);
    this.setState({ename:this.refs.ename.value,
        arr:this.arr2},function(){
            this.props.nameOnChange(this.state.ename);
        });
 //   console.log(this.state.ename)
        console.log(this.state.arr);
   
    alert(this.state.ename);
}




  render() {
    return (
      <div className="App">

        <form>
            <br/>
            Name:<input type = "text" value = {this.props.nameToPass} /><br/><br/>
            eName:<input type = "text" ref = "ename" /><br/><br/>
            <button type = "button" onClick = {this.editChange.bind(this)}>Edit</button>
          </form>

      </div>
    );
  }
}

export default Child;
