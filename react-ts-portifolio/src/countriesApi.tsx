// import { Component } from "react";
// import axios from 'axios';

// import databaseCountry from 'https://restcountries.com/v3.1/all'

// interface countryInfo{
//     name: string;
//     flag: string;
//     population: number;
// }
// class CountryData extends Component <Object, countryInfo>{
//     constructor(props:object) {
//         super(props);
//         this.state = {
//           name: '',
//           flag: '',
//           population: 0,
          
//         };
//     }

//     componentDidMount() {
//         console.log(databaseCountry);
//         this.setState(databaseCountry);
//         axios.get('https://restcountries.com/v3.1/all')
//           .then((response) => {
//             this.setState(response.data);
//           })
//           .catch((error) => {
//             console.error('Error fetching data:', error);
//           });
//       }
//       render() {
//         const { name, flag, population } = this.state;
    
//         return (
//           <div className='card-div'>
//             <img className='userimage' src={flag} alt='ReactLogo' />
//             <div className='card-div-text'>
//               <h2>{name}</h2>
//               <p>{population}</p>
//             </div>
//           </div>
//         );
//       }



// }
// export default CountryData



// // import axios from 'axios'

// // interface countryInfo {


// // }

// // const Country = ({ country: { name, flag, population } }) => {
// //   return (
// //     <div className='country'>
// //       <div className='country_flag'>
// //         <img src={flag} alt={name} />
// //       </div>
// //       <h3 className='country_name'>{name.toUpperCase()}</h3>
// //       <div class='country_text'>
// //         <p>
// //           <span>Population: </span>
// //           {population}
// //         </p>
// //       </div>
// //     </div>
// //   )
// // }

// // const App = (props) => {
// //   // setting initial state and method to update state
// //   const [data, setData] = useState([])

// //   useEffect(() => {
// //     fetchData()
// //   }, [])

// //   const fetchData = async () => {
// //     const url = 'https://restcountries.com/v3.1/all'
// //     try {
// //       const response = await fetch(url)
// //       const data = await response.json()
// //       setData(data)
// //     } catch (error) {
// //       console.log(error)
// //     }
// //   }

// //   return (
// //     <div className='App'>
// //       <h1>Fetching Data Using Hook</h1>
// //       <h1>Calling API</h1>
// //       <div>
// //         <p>There are {data.length} countries in the api</p>
// //         <div className='countries-wrapper'>
// //           {data.map((country) => (
// //             <Country country={country} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // const rootElement = document.getElementById('root')
// // ReactDOM.render(<App />, rootElement)