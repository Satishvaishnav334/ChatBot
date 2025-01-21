import { useState } from 'react'
import './App.css'
import Chat2 from './components/Chat2'
import Service from './components/Service'
import ContactUs from './components/ContactUs'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

     <Nav/>
     <Chat2/>
     <Service/>
     <ContactUs/>
    </>
  )
}

export default App
