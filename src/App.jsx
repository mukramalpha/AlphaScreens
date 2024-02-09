import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Carousal from './components/Carousal'
import Card from './components/Card'



function App() {

  
  return (
    <>
     <BrowserRouter>
       <HeaderComponent/>

       <Carousal/>
       <Card/>

       
     </BrowserRouter>
    </>
  )
}

export default App
