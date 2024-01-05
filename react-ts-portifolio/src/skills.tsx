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
export default SkillformatedList