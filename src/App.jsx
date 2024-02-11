import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Carousal from './components/Carousal'
import Section from './components/Section'
import Card from './components/Card'
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import Experience from './components/Experience'
import Client from './components/Client'

function App() {

  
  return (
    <>
     <BrowserRouter>
       <HeaderComponent/>

       <Carousal/>
       <Section/>
       <Experience/>
       <Card/>
       <Client/>
      
      
     </BrowserRouter>
    </>
  )
}

export default App
