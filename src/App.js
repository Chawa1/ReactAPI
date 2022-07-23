import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Pokemons from './pages/Pokemons';
import UserPage from './pages/UserPage';
import PokemonPage from './pages/PokemonPage';


function App() {
  return (
    <div className='App'>

      {/* <RandomCatFact /> */}

    <Navbar />

{/* defining routes */}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/pokemons" element={<Pokemons />} />

  {/* new dynamic route */}
  <Route path="/user/:id" element={<UserPage />} />
  <Route path="/pokemon/:id" element={<PokemonPage />} />
  <Route path="*" element={<p> 404, page not found</p>} />
</Routes>
    </div>

  );
}

export default App;
