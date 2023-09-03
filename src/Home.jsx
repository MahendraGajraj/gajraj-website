import React from "react";
import img1 from "../src/images/img1.jpg";
import img3 from "../src/images/img3.jpg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common
                name="Grow your Business with "
                imgsrc={img1}
                imgsrc1={img3}
                visit="/services"
                btnname="Get Started"
                marginTop='10px'
            />
        </>
    );
};

export default Home;