import React from 'react';
import Navbar from '../components/Navbar';
import Services from './Services';


const Sectionone = () => {
    return (
        <>
        
       
        <section className="fundOrange">
        <Navbar/>
            <div className="container">
            <h1 className="fw-bold"> We're Award <br/>
            Winnning Digital<br/>
            Agency </h1>
            <button type="button" class="btn btn-light text-warning fw-bold" >DISCOVER MORE</button>
            </div>

        </section>
        <Services/>
        </>
    );
};

export default Sectionone;