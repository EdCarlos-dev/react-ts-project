import { useState, useEffect } from 'react';
import userIcon from './assets/usericon.png';
// import axios from 'axios';
import './index.css';
import './App.css';
import contactUser from './contactData.json'

interface ContactData {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  cellphone: string;
  yearBorn: number;
  skills: string[];
}

function UserCard() {
  const [contact, setContact] = useState<ContactData>({
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    cellphone: '',
    yearBorn: 0,
    skills: [],
  });

  useEffect(() => {
    console.log(contactUser)
    setContact(contactUser);
    // axios.get('/contactData.json')
    //   .then((response) => {
    //     setContact(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return (
    <div className='card-div'>
      <img className='userimage' src={userIcon} alt='ReactLogo' />
      <div className='card-div-text'>
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p>{new Date().getFullYear() - contact.yearBorn} years old</p>
        <p>{contact.country}</p>
        <p>{contact.email}</p>
        <p>{contact.cellphone}</p>
      </div>
    </div>
  );
}

export default UserCard;
