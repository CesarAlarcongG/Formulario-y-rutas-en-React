import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Principal} from './Pages/Principal/Principal';
import {Secundario} from './Pages/Secundario/Secundario';
import {Terciario} from './Pages/Terciario/Terciario';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/secundario" element={<Secundario />} />
        <Route path="/terciario" element={<Terciario />} />
      </Routes>
    </div>
  );
}

export default App;


