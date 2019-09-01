import React, { Component } from 'react';
import TopSpot from './topspot';
const axios = require('axios');
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        topspots: []
    }
}

componentWillMount() {
  axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
    console.log(this.state.topspots); //prints out the JSON file that is being grabbed in the GET request
}

  render() {
    
    return (
      <div className='App container'>
          <div className="jumbotron jumbotron-fluid">
            <h4 className="display-4">San Diego Top Spots</h4>
            <hr className="my-4"></hr>
            <p>A list of the top 30 places to visit in San Diego, California.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" onClick={() => this.componentWillMount()} href="#" role="button">Sample Button</a>
            </p>
            </div>
            { 
      this.state.topspots.map(topspot => (
          <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location} />
          ))
      }
      </div>
    );
   
  }
}

export default App;
