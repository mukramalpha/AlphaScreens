import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'


function App() {

  
  return (
    <>
     <BrowserRouter>
       <HeaderComponent/>
       
       <FooterComponent/>
     </BrowserRouter>
    </>
  )
}

export default App
