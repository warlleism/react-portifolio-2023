import './style.css'
import Rotas from './routes/route'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    setTimeout(() => {
      spinner.style.display = 'none'
    }, 4000)
  }, [])

  return (
    <div className="App">
      <div className='spinner' id='spinner'>
        <div className="lds-facebook" ><div></div><div></div><div></div></div>
      </div>
      <Rotas />
    </div>
  )
}

export default App
