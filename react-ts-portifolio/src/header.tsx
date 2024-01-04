import React from 'react';
import './index.css';

const welcome: string = 'Profile App';
const titlePage: string = '30 days react';
const title: string = 'Getting Started React';

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
const yyyy = today.getFullYear();
const date: string = dd + '/' + mm + '/' + yyyy;

class Header extends React.Component {
  render() {
    return (
      <header>
        <title>{titlePage}</title>
        <div className='header-wrapper'>
          <h3>{welcome}</h3>
          <h2>{title}</h2>
          <small>Today: {date}</small>
        </div>
      </header>
    );
  }
}

export default Header;
