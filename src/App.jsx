import './style.css'
import Rotas from './routes/route'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const spinner = document.getElementById('spinner')
    setTimeout(() => {
      document.body.style.overflow = "auto";
      spinner.style.display = 'none'
    }, 2000)
  }, [])

  window.addEventListener('scroll', () => {
    const arrow = document.getElementById('arrow')
    if (window.scrollY >= 400) {
      arrow.style.opacity = 1
    } else {
      arrow.style.opacity = 0
    }
  })

  return (
    <div className="App">
      <div className='spinner' id='spinner'>
        <div className="lds-facebook" ><div></div><div></div><div></div></div>
      </div>

      <a href="#" className='topArrow' id='arrow'>
        <span className="material-symbols-outlined" translate="no">
          expand_less
        </span>
      </a>
      <Rotas />
    </div>
  )
}

export default App
