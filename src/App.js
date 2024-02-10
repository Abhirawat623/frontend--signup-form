import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {LandingPage, SignInPage, SignUpPage,  ForgetPasswordPage, HomePage,} from './components/pages/index' 

import './App.css'

export default function App() {
    return (
       
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <SignInPage/> } />
                    <Route path="/register" element={ <SignUpPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                </Routes>
                <Footer />
            </div>
      
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by<a className='author-text' href="https://my-portfolio-gi7r.vercel.app/" target="_blank" rel="noopener noreferrer">
               Abhishek Rawat</a></p>
    )
}
const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}