import React from 'react';
import './index.css';

const copyRight: string = 'Copyright 2020';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>

        <div className='footer-wrapper'>
          <p>{copyRight}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
