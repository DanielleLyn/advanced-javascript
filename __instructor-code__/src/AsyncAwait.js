import React, { Component } from 'react';
import axios from 'axios';

export default class AsyncAwait extends Component {
  state = {
    gods: [],
    error: null,
  }
  
  async componentDidMount() {
    // axios.get('https://ancient-gods-api.now.sh/api/gods', {
    //   headers: {
    //     apikey: 'tylercollier'
    //   }
    // }).then(response => {
    //   this.setState({ gods: response.data })
    // })
    try {
      const response = await axios.get('https://google.com/api/gods2', {
        headers: {
          apikey: 'tylercollier'
        }
      })
      this.setState({ gods: response.data })
    } catch (error) {
      console.log(error);
      this.setState({ error })
    }


    // window.getLocation().then(response => {
    //   const { lat, lng } = response;
    //   axios.get(`someservice.com/?lat=${lat}&lng=${lng}`).then(response => {
    //     const zipCode = response.data
    //     axios.get(`anotherservice.com/?zipCode=${zipCode}`).then(response => {
    //       const state = response.data
    //       this.setState();
    //     })
    //   })
    // })
    // const response = await window.getLocation()
    // const { lat, lng } = response;
    // const zipCode = (await axios.get(`someservice.com/?lat=${lat}&lng=${lng}`)).data
    // const state = await axios.get(`anotherservice.com/?zipCode=${zipCode}`)
    // this.setState()
  }
  
  render() {
    const { gods, error } = this.state;
    
    return (
      <div>
        {error
          ? <div>Oh noes! An error occurred!</div>
          : <div>
            Here are the gods:
            {gods.map(x => <div key={x.id}>{x.name}</div>)}
          </div>
        }
      </div>
    );
  }
}
