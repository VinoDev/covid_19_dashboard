import React, {useState, useEffect} from 'react';
import {fetchData, fetchDailyGlobal, fetchCountries} from './api';
import {CardStyled, Chart, CountryPicker, InfoSection} from './components';
import styles from './App.module.css';

class App extends React.Component {

  state = {
    data:{},
    country: ''
  };
  
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render(){
    console.log(this.state)
    return (
      <div className={styles.container}>
        <InfoSection data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state}/>
      </div>
    )
  }
}

export default App;