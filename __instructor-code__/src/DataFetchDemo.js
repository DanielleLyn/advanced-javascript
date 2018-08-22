import React, { Component } from 'react';
import axios from 'axios';

export default class DataFetchDemo extends Component {
  state = {
    loading: false,
    data: null,
    error: null
  }

  componentDidMount() {
    this.setState({ loading: true})
    axios.get('https://ancient-gods-api.now.sh/api/gods', {
    // axios.get('https://google.com/api/gods', {
      headers: {
        apikey: 'tylercollier'
      }
    }).then(response => {
      this.setState({ data: response.data })
    }).catch(error => {
      this.setState({ error })
    }).then(() => {
      this.setState({ loading: false })
    })
  }
  
  render() {
    const { loading, error, data } = this.state;
    console.log('-------------- data', data);
    
    return (
      <div>
        {loading
          ? <div>Loading...</div>
          : error
            ? <div>There was an error!</div>
            : data
              ? <div>
                  Here are the gods:
                  {data.map(x => <div key={x.id}>{x.name}</div>)}
                </div>
              : <div>Waiting</div>
        }
      </div>
    );
  }
}