import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            {
                                Sdata.map((val, ind) => {
                                    return <
                                        Card key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
                <footer className="w-100 by-light text-center mt-5">
                        <p> Copyright &copy; 2023 Gajraj Technical.ALL right reserved/terms and conditions </p>
                    </footer>
            </div>
        </>
    );
};


export default Service;