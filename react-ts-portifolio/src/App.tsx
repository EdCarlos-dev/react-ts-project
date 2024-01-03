import { useState } from 'react'

import reactLogo from './assets/react.svg'
import userIcon from './assets/usericon.png'
import htmlLogo from './assets/htmllogo.png'
import cssLogo from './assets/csslogo.png'
import javascriptLogo from './assets/javascriptlogo.png'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './header.tsx'
import Footer from './footer.tsx'

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
    
    <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
    <h1>Vite + React</h1>
    
  </div>
)

const skilsFormatted = contact.skills.map((itemSkil) => <div className='skill-item'>{itemSkil}</div>)

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

function Button () {
  return (

    <button className='Buttton-modal' >Click to Modal</button>

  )

}



function App() {

  const [count, setCount] = useState(0)
 
  return (
    <>
   <div>
    <Header/>
    <UserCard/>

      <div className='skils-div'>
      {skilsFormatted}
      </div>
      
      {techLogos}
 
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <Button/>
        </div>

       </div>
      <Footer/>
    </>
  )
}

export default App
