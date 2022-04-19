
import './App.css';
import Navbar from './components/Navbar';
import { Routes ,Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Portfolio from './pages/Portfolio';

import Logo from './components/Logo';


import Blog1 from './Blogs/Blog1';
import Blog2 from './Blogs/Blog2';
import Blog3 from './Blogs/Blog3';
import Blog4 from './Blogs/Blog4';



import Reference from './components/Reference';
import Wireframes from './pages/Wireframes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Logo/>
      <Routes>
        <Route exact path='/RonJames-Portfolio' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/blogs' element={<Blogs/>} />
        <Route exact path='/portfolio' element={<Portfolio/>} />
        <Route exact path='/wireframes' element={<Wireframes/>} />
        <Route exact path='/blog1' element={<Blog1/>} />
        <Route exact path='/blog2' element={<Blog2/>} />
        <Route exact path='/blog3' element={<Blog3/>} />
        <Route exact path='/blog4' element={<Blog4/>} />
      </Routes> 
      <Reference/>
    </div>
  );
}

export default App;
