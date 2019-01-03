// Imports default
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

//HashRouter gerenciador de rotas por '#' 
import { HashRouter } from 'react-router-dom'

//Componentes da dom e controller (Routes)
import Routes from './Routes'
import Logo from '../components/template/logo'
import Nav from '../components/template/nav'
import Footer from '../components/template/footer'

//renderização controlada por Hash dos elementos da página
export default props =>
    <HashRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>

