import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
    state = {
        series: []
      }
    
      componentDidMount() {
        // const mySeries = ["Vikings", "Game of Thrones"];
        // setTimeout(() => {
        //   this.setState({ series: mySeries})
        // }, 2000);
        // const series = ["Vikings", "Game of Thrones"];
        // setTimeout(() => {
        //   this.setState({ series })
        // }, 2000);
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
          .then((response) => response.json())
          .then(json => this.setState({ series: json}))
      }

    render() {
        return (
            <div>
                <h2>Series container: total series: {this.state.series.length}</h2>
                <SeriesList list={this.state.series}></SeriesList>
            </div>
        )
    }
}

export default Series;