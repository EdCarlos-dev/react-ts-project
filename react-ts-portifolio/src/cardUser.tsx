import { Component } from 'react';
import userIcon from './assets/usericon.png';
// import axios from 'axios';
import './index.css';
import './App.css';
import contactUser from './contactData.json';

interface ContactData {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  cellphone: string;
  yearBorn: number;
}

class UserCard extends Component<object, ContactData> {
  constructor(props:object) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      country: '',
      email: '',
      cellphone: '',
      yearBorn: 0
    };
  }

  componentDidMount() {
    console.log(contactUser);
    this.setState(contactUser);
    // axios.get('/contactData.json')
    //   .then((response) => {
    //     this.setState(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
  }

  render() {
    const { firstName, lastName, yearBorn, country, email, cellphone } = this.state;

    return (
      <div className='card-div'>
        <img className='userimage' src={userIcon} alt='ReactLogo' />
        <div className='card-div-text'>
          <h2>{firstName} {lastName}</h2>
          <p>{new Date().getFullYear() - yearBorn} years old</p>
          <p>{country}</p>
          <p>{email}</p>
          <p>{cellphone}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
