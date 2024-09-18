import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";

import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Head/Header'
import Mywork from './components/Mywork/Mywork'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Service/Services'

function App() {
 
  return (
    <>
   
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
