import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: " ",
        phone: " ",
        email: " ",
        msg: " ",

    })
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        });

    };
    const formSubmit = (e) => {
        e.prevantDefault();
    };
    // alert(`myname is${data.fullname},my mobile number is${data.phone},my email is${data.email}`);
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="Fullname"
                                    value={data.fullname}
                                    onChange={inputEvent}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">phone</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    placeholder="mobile number"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">message</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    rows="3"
                                    name="msg"
                                    value={data.msg}
                                    onChange={inputEvent}
                                />
                            </div>
                            <div className="col-12">
                                <button className="btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className="w-100 by-light text-center mt-5">
                    <p> Copyright &copy; 2023 Gajraj Technical.ALL right reserved/terms and conditions </p>
                </footer>
            </div>
        </>
    )
}

export default Contact;
