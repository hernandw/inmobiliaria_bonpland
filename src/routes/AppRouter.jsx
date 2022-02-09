import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Inicio from '../pages/Inicio';
import Inmuebles from '../pages/Inmuebles';
import Contacto from '../pages/Contacto';
import Trayectoria from '../pages/Trayectoria';
import QuienesSomos from '../pages/QuienesSomos';

import NotFound from '../pages/NotFound';


const AppRouter = () => {
    return (
        <Router>
            <Navbar/>

            <Routes>
                <Route end path="/" element={<Inicio />}/>
                <Route end path="/inmuebles" element={<Inmuebles />}/>
                <Route end path="/contacto" element={<Contacto />}/>
                <Route end path="/nuestra-trayectoria" element={<Trayectoria />}/>
                <Route end path="/quienes-somos" element={<QuienesSomos />}/>

                <Route path="/" element={<NotFound />}/>
            </Routes>

            <Footer />

        </Router>
    );
};

export default AppRouter;