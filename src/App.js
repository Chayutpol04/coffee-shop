import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Error from './pages/Error'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Merchendise from './pages/Merchendise';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="Menu" element={<Menu/>}/>
            <Route path="Merchendise" element={<Merchendise/>}/>
            <Route path="AboutUs" element={<AboutUs/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
