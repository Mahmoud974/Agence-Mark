import React from 'react';

const Mescards = (props) => {

    
    let flexOne = "d-flex justify-content-center align-items-center mt-5"
    
    return (
       
        < >
        <div className="text-center m-5">
            <small>SERVICES</small>
        <h2 className="fw-bold">Our Amazing Services</h2>
        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
        Lorem Ipsum has been the industry's standard dummy text ever</p>
        </div>

        <div className={flexOne}>
        {
            props.mesdonnee.map((mybase) => {return(

                <div className="card  " key={mybase.id} style={{width: "18rem"}}>
                <div className="card-body" >
                    <div className="cubeOrange">
                       <i className={mybase.classN}></i> 
                    </div>
                    
                <h5 className="card-title fw-bold">{mybase.title}</h5>
                <p className="card-text"> {mybase.para}</p>
                <p className="paraone"> <i className="fas fa-times-circle "></i> {mybase.pone}</p>
                <p className="paraone"> <i className="fas fa-times-circle"></i> {mybase.ptwo}</p>
                <p className="paraone"> <i className="fas fa-times-circle"></i> {mybase.pthree}</p>
            </div>
        </div>
                
            )})
        }
        </div>
        
        
    </>
    );
};

export default Mescards;