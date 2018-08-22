import React, { Component } from 'react';
import axios from 'axios';


export default class DataFetchDemo extends Component {
  state = {
    loading: false,
    data: null,
    error: null
  }

  componentDidMount() {
      this.setState({loading:true})
    axios.get(this.props.url, {headers: this.props.headers}).then(response => {
        this.setState({data: response.data})
    }).catch(error => {
        this.setState({error})
    }).then(()=> {
        this.setState({loading:false})
    })
  }
  
  render() {
    const {loading, error, data} = this.state
    return (
      <div>
        {loading
        ? <div>loading...</div>
        :error  
        ? <div> There was an error: {error.message}</div>
        : data
        ? this.props.render(data)
        :<div>Waiting...</div>
    }
      </div>
    );
  }
}
