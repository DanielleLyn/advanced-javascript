import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncAwait from './AsyncAwait';
import DataFetchDemo from './DataFetchDemo';
import Fetcher from './Fetcher';

// class MyError extends Error {
//   constructor(message) {
//     super();
//     this.message = message;
//   }
//   // toString() {
//   //   return "A SUPER bad error occurred: " + this.message
//   // }
// }

// MyError.prototype.toString = function() {
//   return "A SUPER bad error occurred: " + this.message
// }

class App extends Component {
  state = {
    jsonString: `{"name": "tyler"}`,
    fieldToGrab: 'name',
    message: '',
  }

  doNaughtyThing = () => {
    throw new Error('something bad happened2')
  }

  getFieldValueFromJSON = () => {
    try {
      const jsonObject = JSON.parse(this.state.jsonString)
      this.setState({ message: "The value is: " + jsonObject[this.state.fieldToGrab] })
      // this.doNaughtyThing()
    } catch (err) {
      console.log('-------------- err', err);
      this.setState({ message: "Error" + err })
    } finally {
      console.log('finally')
    }
  }
  
  render() {
    const { message, jsonString, fieldToGrab } = this.state
    
    return (
      <div>
        <h1>Advanced JavaScript</h1>
        {/* <div>
          <div>JSON: <textarea value={jsonString} cols="50" rows="5" onChange={e => this.setState({ jsonString: e.target.value })} /></div>
          <div>
            Field to grab: <input value={fieldToGrab} onChange={e => this.setState({ fieldToGrab: e.target.value })} />
            <button onClick={this.getFieldValueFromJSON}>Get field value</button>
          </div>
        </div>
        <div>{message}</div> */}
        {/* <AsyncAwait /> */}
        {/* <DataFetchDemo /> */}
        {/* <Fetcher url="https://ancient-gods-api.now.sh/api/gods" headers={{ apikey: 'tylercollier' }} render={(data) => { */}
        <Fetcher url="https://google.com/api/gods">
          {(data) => {
            return <div>
              Here are the gods:
              {data.map(x => <div key={x.id}>{x.name}</div>)}
            </div>
          }}
        </Fetcher>
        <p></p>
        <Fetcher url="https://swapi.co/api/planets">
          {(data) => {
            return <div>
              Here are the planets:
              {data.results.map(x => <div key={x.id}>{x.name}</div>)}
            </div>
          }}
        </Fetcher>
      </div>
    );
  }
}

export default App;
