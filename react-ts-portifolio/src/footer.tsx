import './index.css'

const copyRight: string = 'Copyright 2020'

function Footer () {

  return (
    <footer>
      <div className='footer-wrapper'>
        <p>{copyRight}</p>
      </div>
    </footer>
  )
}

export default Footer