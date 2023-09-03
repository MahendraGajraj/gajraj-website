import React from "react";
import img2 from "../src/images/img2.jpg";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
                name="Welcome to About page "
                imgsrc={img2}
                visit="/Contact"
                btnname="Contact Now"
                marginTop='30px'
            />
        </>
    );
};


export default About;
