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

function App() {

  
  return (
    <>
     <BrowserRouter>
       <HeaderComponent/>

       <Carousal/>
       <Section/>
       <Card/>

      
     </BrowserRouter>
    </>
  )
}

export default App
