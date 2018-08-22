import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class MyError extends Error{
//   toString(){
//     return "A REALLY NAUGHTY THING HAPPENED: " + this.message
//   }
// }

class App extends Component {
  state = {
    jsonString: `{"name": "Danielle"}`,
    fieldToGrab: 'name',
    message: '',
  }

  doNaughtyThing = () => {
    throw new MyError('something naughty happened')
  }

  getFieldValueFromJSON = () => {
    try{
      const jsonObject = JSON.parse(this.state.jsonString)
      // this.doNaughtyThing()
      // this.setState({ message: "The value is: " + jsonObject[this.state.fieldToGrab] })
    } catch(err){
      console.log('------', err);
      this.setState({message: "Error" + err.message })

    } finally {
      console.log('finally')
    }
  }
  
  render() {
    const { message, jsonString, fieldToGrab } = this.state
    
    return (
      <div>
        <h1>Advanced JavaScript</h1>
        <div>
          <div>JSON: <textarea value={jsonString} cols="50" rows="5" onChange={e => this.setState({ jsonString: e.target.value })} /></div>
          <div>
            Field to grab: <input value={fieldToGrab} onChange={e => this.setState({ fieldToGrab: e.target.value })} />
            <button onClick={this.getFieldValueFromJSON}>Get field value</button>
          </div>
        </div>
        <div>{message}</div>
      </div>
    );
  }
}

export default App;
