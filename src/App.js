import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Pokemons from './pages/Pokemons';
import UserPage from './pages/UserPage';
import PokemonPage from './pages/PokemonPage';
/* import RandomCatFact from './Components/RandomCatFact'; */


function App() {
  return (
    <div className='App'>

     {/*  <RandomCatFact />  */}

    <Navbar />

{/* defining routes */}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/pokemons" element={<Pokemons />} />

  {/* new dynamic route */}
  <Route path="/user/:id" element={<UserPage />} /> {/* Ama bo profile ii user a kaya  haryakayan id yaki pe ayat */}
  <Route path="/pokemon/:id" element={<PokemonPage />} /> {/* Ama bo profile i pokimon page akaya haryakayan id yaki pe ayat */}
  <Route path="*" element={<p> 404, page not found</p>} /> {/* har shteki ka bo aw paragrapha pshan bdata */}
</Routes>
    </div>

  );
}

export default App;
