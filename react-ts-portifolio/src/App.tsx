import { useState } from 'react'

import reactLogo from './assets/react.svg'
import htmlLogo from './assets/htmllogo.png'
import cssLogo from './assets/csslogo.png'
import javascriptLogo from './assets/javascriptlogo.png'
import viteLogo from '/vite.svg'

import Header from './header.tsx'
import Footer from './footer.tsx'
import Modal from './modal'
import TechDivs from './TechDivs.tsx'
import TenHighestPopulationChart from './TenHighestPopulationChart.tsx'
import UserCard from './cardUser.tsx'

import CountryDivList from './countriesApi.tsx'

// import CountryData from './countriesApi.tsx'

import './App.css'
import './index.css'


function SkillformatedList () {
  const skills:string[] = [
    'HTML', 
    'CSS', 
    'JavaScript' , 
    'Typescript', 
    'Python', 
    'Artificial Interigence', 
    'Proactivity', 
    'Responsability'
]
const skilsFormatted = skills.map((itemSkil) => <div className='skill-item'>{itemSkil}</div>)

  return(
    <div className='skils-div'>
      {skilsFormatted}
    </div>
  )
}

const techLogos = (

  <div className='tecnologies'>
    <p><b>Front end Technologies</b>.</p> 
    <img className='techimage' src={htmlLogo} alt='ReactLogo' />
    <img className='techimage' src={cssLogo} alt='ReactLogo' />
    <img className='techimage' src={javascriptLogo} alt='ReactLogo' />
    
    <img src={viteLogo} className="logo vite" alt="Vite logo" />
    
    <img src={reactLogo} className="logo react" alt="React logo" />
    
    <h1>Vite + React</h1>
    
  </div>
)


function App() {


  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Adiciona uma classe ao body com base no estado de isDarkMode
  document.body.className = isDarkMode ? 'dark-mode' : '';

  return (
    <>
      <div>
        <Header/>
        <UserCard/>
        <SkillformatedList/>        
        {techLogos}
  
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            <button onClick={openModal}>Open Modal</button> 
            <button onClick={toggleDarkMode}>Dark Mode</button>
            {isModalOpen && <Modal onClose={closeModal} />} 
          </div>
        
        <TechDivs/>
        <TenHighestPopulationChart/>
        <CountryDivList/>
        <Footer/>
        

      </div>

    </>
  )
}

export default App
