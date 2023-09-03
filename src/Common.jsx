import React from "react";
import { NavLink } from "react-router-dom";



const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                                    {props.imgsrc1 && <div id="myImg">
                                        <img src={props.imgsrc1} style={{ height: '80px' }} className="img-fluid" alt="home img"/>
                                    </div>}
                                    <h1 style={{ marginTop: props.marginTop}}>
                                        {props.name}
                                        <strong className="brand-name">Gajraj Technical</strong>
                                    </h1>
                                    <h2 className="my-5">We are the team of talented developer making websites</h2>
                                </div>
                                <div className="col-lg-6 order-2 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="w-100 by-light text-center mt-5">
                        <p> Copyright &copy; 2023 Gajraj Technical.ALL right reserved/terms and conditions </p>
                    </footer>
                </div>
            </section>
        </>
    )
}


export default Common;