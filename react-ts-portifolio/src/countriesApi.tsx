import { Component, ReactElement } from 'react';
import axios from 'axios';

interface CountryProps {
  country: {
    name: {
      common: string;
      official: string;
    };
    flags: {
      png: string;
      svg: string;
    };
    population: number;
  };
}

const Country = ({ country: { name, flags, population } }: CountryProps): ReactElement => {
  return (
    <div className='country'>
      <div className='country_flag'>

        <img className='flag-atyle' src={flags.png} alt={name.common} />

      </div>

      <div className='country-content'>

        <h3 className='country_name'> Common : {name.common.toUpperCase()}</h3>
        <h4 className="country-name-official">Official : {name.official}</h4>
        <div className='country_text'>
          <p>
            <span>Population: </span>
            {population}
          </p>
        </div>

      </div>
    </div>
  );
};

interface CountryDivListState {
  data: {
    name: {
      common: string;
      official: string;
    };
    flags: {
      png: string;
      svg: string;
    };
    population: number;
  }[];
}

class CountryDivList extends Component<object, CountryDivListState> {
  state: CountryDivListState = {
    data: [],
  };

  componentDidMount() {
    this.fetchCountryData();
  }

  fetchCountryData = async (): Promise<void> => {
    const url = 'https://restcountries.com/v3.1/all'; // Usei este endpoint como exemplo
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className='countries-area'>
        <h2>React Component Life Cycle</h2>
        <h1>Calling API</h1>
        <div>
          <p>There are {this.state.data.length} countries in the API</p>
          <p>filter by key word</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country, index) => (
              <Country key={index} country={country} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDivList;

//  let data = ''
//  fetch('https://restcountries.com/v3.1/all')
//  .then(function(response) {
//  return response.json();
//  })
//  .then(function(myJson) {

//  data=myJson
//  console.log(data)
//  });
