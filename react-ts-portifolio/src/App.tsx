import { useState } from 'react'

import reactLogo from './assets/react.svg'
import userIcon from './assets/usericon.png'
import htmlLogo from './assets/htmllogo.png'
import cssLogo from './assets/csslogo.png'
import javascriptLogo from './assets/javascriptlogo.png'
import viteLogo from '/vite.svg'

import './App.css'

const copyRight: string = 'Copyright 2020'
const welcome: string = 'Profile App'
const titlePage: string = '30 days react'
const title: string = 'Getting Started React'

const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();
const date: string = mm + '/' + dd + '/' + yyyy;
const currentYear = new Date().getFullYear()

const contact: {firstName:string,
                lastName:string,
                country:string,
                email:string,
                cellphone:string,
                yearBorn:number,
                skills:string[]
              } = {
                      firstName: 'Ed Carlos',
                      lastName: 'Santos',
                      country: 'Brazil',
                      email: 'email#email.com',
                      cellphone: '+55 11 999 999 999',
                      yearBorn: 1987,
                      skills: [
                        'HTML', 
                        'CSS', 
                        'JavaScript' , 
                        'Typescript', 
                        'Python', 
                        'Artificial Interigence', 
                        'Proactivity', 
                        'Responsability']
                    }

const techLogos = (
  <div className='tecnologies'>
    <p><b>Front end Technologies</b>.</p> 
    <img className='techimage' src={htmlLogo} alt='ReactLogo' />
    <img className='techimage' src={cssLogo} alt='ReactLogo' />
    <img className='techimage' src={javascriptLogo} alt='ReactLogo' />
    
  </div>
)

function UserCard  ()  {

  return (

    <div className='card-div' >

        <img className='userimage' src={userIcon} alt='ReactLogo' />
        
        <div className='card-div-text'>
          <h2>{contact.firstName} {contact.lastName} </h2>
          <p>{currentYear - contact.yearBorn} years old</p>
          <p>{contact.country}</p>
          <p>{contact.email}</p>
          <p>{contact.cellphone}</p>
        </div>

    </div>
  )
}


function Header () {
  return (
    <header>
    <title>{titlePage}</title>
    <div className='header-wrapper'>
      <h3>{welcome}</h3>
      <h2>{title}</h2>
      
      <small>Today: {date}</small>
    </div>
</header>
  )

}

function Footer () {

  return (
    <footer>
      <div className='footer-wrapper'>
        <p>{copyRight}</p>
      </div>
    </footer>
  )
}

function App() {

  const [count, setCount] = useState(0)
 
  return (
    <>
   <div>
    <Header/>

    <UserCard/>
     
      <div>
        {techLogos}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       </div>
      <Footer/>
    </>
  )
}

export default App
