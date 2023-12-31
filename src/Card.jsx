import React from "react";
import web from "../src/images/web.jpg";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="Card">
                    <img src={props.imgsrc} className="card-img-top" alt="props.imgsrc" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold ">{props.title}</h5><br />
                        <p className="card-text">
                            We provides all type of web services as per your requirement.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Card;
