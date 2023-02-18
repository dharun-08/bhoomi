import React from 'react'
import './index.css';
import Header from './Components/Header/header.jsx'
import About from './Components/About/about.jsx'
import Contact from './Components/Contact/contact.jsx'
import Body from './Components/Body/body.jsx'
import Footer from './Components/Footer/footer.jsx'

const App= () => {
  return (
    <>
      <Header />
      <Body />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
