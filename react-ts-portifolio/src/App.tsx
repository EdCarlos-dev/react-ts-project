import Header from './header.tsx'
import UserCard from './cardUser.tsx'
import SkillformatedList from './skills.tsx'
import TechLogos from './logosArea.tsx'
import TechDivs from './TechDivs.tsx'
import TenHighestPopulationChart from './TenHighestPopulationChart.tsx'
import ButtonsArea from './buttonArea.tsx'
import FormInput from './forms.tsx'
import CountryDivList from './countriesApi.tsx'
import Footer from './footer.tsx'

function App() {
// implementar menu
  return (
    <>    
        <Header/>

        <UserCard/>
        <SkillformatedList/>     
        <TechLogos/>
        <ButtonsArea /> 
        <TechDivs/>
        <TenHighestPopulationChart/>
        <FormInput/>
        <CountryDivList/>

        <Footer/>
    </>
  )
}

export default App
