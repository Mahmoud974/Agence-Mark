import React from 'react';

const Work = (props) => {
    let flexOne = "d-flex justify-content-center align-items-center mt-5"
    return (
        <>
        <div className="text-center mt-5">
            <small>WORKING PROCESS</small>
        <h2 className="fw-bold">HOW DOES IT WORK</h2>
        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
        Lorem Ipsum has been the industry's standard dummy text ever</p>
        </div>

        <div className=" container mt-5">

            <ul className="list-inline">

            {
                props.module.map((mod)=>{return(
                
                    <li key={mod.id} className="list-inline-item" >
                      
                      <div className="circle">
                         <i className={mod.classN}></i>
                      </div>
                        <h3 className="h4">{mod.name}</h3>
                        <p>{mod.para}</p>
                    </li>
                   
                )})
            }
              </ul>
        </div>
        </>
    );
};

export default Work;