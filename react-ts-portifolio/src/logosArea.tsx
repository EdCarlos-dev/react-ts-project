import './App.css'
import './index.css'

import reactLogo from './assets/react.svg'
import htmlLogo from './assets/htmllogo.png'
import cssLogo from './assets/csslogo.png'
import javascriptLogo from './assets/javascriptlogo.png'
import viteLogo from '/vite.svg'

function TechLogos () {
    

    return (


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

}

export default TechLogos