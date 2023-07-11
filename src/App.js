import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Lineheader from './components/Lineheader'
import Trustedsection from './components/Trustedsection'
import AboutUs from './components/AboutUs'
import Videosection from './components/Videosection';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <body>
    <Header/>
    <Lineheader/>
    <Hero/>
    <Trustedsection/>
    <AboutUs/>
    <Videosection/>
    <Services/>
    <Testimonial/>
    <CTA/>
    <Blogs/>
    <Footer/>
    </body>
  );
}

export default App;
