import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Post from './Post';
import { Routes , Route ,Link} from 'react-router-dom';

function Routing_app() {
  return (
    <div>
       <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Post">Post</Link></li>
        </ul>
        </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Post' element={<Post/>}/>
      {/* <Header />
      <Nav/>
      <Home/>
      <Post/>
      <About/>
      <Footer/> */}
      </Routes>
    </div>
  );
}

export default Routing_app;
