
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import CustomRoutes from './routes/CustomRoutes'

function App() {

  return (
    <div className='pokeapp-wrapper'>
      <Link style={{textDecoration: 'none'}} to={"/"}>
        <h1 id="pokedex-heading">Pokedex</h1>
     </Link>
     <CustomRoutes />
    </div>
  )
}

export default App
