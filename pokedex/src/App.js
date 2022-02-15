import Home from './views/Home'
import PokemonDetail from './views/PokemonDetail'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
