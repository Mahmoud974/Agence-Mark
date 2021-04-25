import React, { Component } from 'react';
import { dateb } from '../dateBase/dateb';
import Mescards from '../components/Mescards';
import Work from '../components/Work';

class Services extends Component {
   state = {
       base: dateb,

       moduleWork: [
        {id: 1, classN: "fas fa-comments", name: "Listen", para: "Lorem Ipsum is simply dummy and typesetting industry."},
        {id: 2, classN: "fas fa-sd-card", name: "Plan", para: "Lorem Ipsum is simply dummy and typesetting industry."},
        {id: 3, classN: "fas fa-cubes", name: "Work & Revision", para: "Lorem Ipsum is simply dummy and typesetting industry."},
        {id: 4, classN: "fas fa-star" , name: "Delivery & Feedback", para: "Lorem Ipsum is simply dummy and typesetting industry."},
       
    ]
   }

    render() {
        
        let {base, moduleWork} = this.state
        return (
            <section className="bgTwo">
            <Mescards mesdonnee={base} />

            <Work mesdonnee={base} 
                module={moduleWork}
            />
            </section>
            
        );
    }
}

export default Services;