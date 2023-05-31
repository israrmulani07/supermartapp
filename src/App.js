import logo from './logo.svg';
import './App.css';
import { Nav } from "./Components/Nav"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Components/Home"
import { Services } from "./Components/Services"
import { Contact } from "./Components/Contact"
import { Aboutus } from "./Components/Aboutus"
import { Help } from "./Components/Help"
import { Shopping } from './Components/Shopping';
import { About } from "./Components/About"

import { Card, CardContent } from "@mui/material"


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Card>
          <CardContent>
            <Nav />
          </CardContent>
        </Card>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />

          <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
