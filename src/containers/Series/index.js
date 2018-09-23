import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
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
        // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
        //   .then((response) => response.json())
        //   .then(json => this.setState({ series: json}))
      }

      onSeriesInputChange = e => {  
          this.setState({seriesName: e.target.value, isFetching: true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then((response) => response.json())
        .then(json => this.setState({ series: json, isFetching: false}))
        // console.log(e);
        // console.log(e.target.value);
      }

    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <Intro message="Here you can find all of the series" />
                <h2>Series container: total series: {this.state.series.length}</h2>
                <div>
                    <input value={seriesName}
                        type="text" 
                        onChange={this.onSeriesInputChange} >
                    </input>
                </div>
                { 
                    !isFetching && series.length === 0 && seriesName.trim() === '' 
                    &&
                    <p>Please enter a series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No series found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                { 
                    !isFetching && <SeriesList list={this.state.series}></SeriesList>
                }
               
            </div>
        )
    }
}

export default Series;