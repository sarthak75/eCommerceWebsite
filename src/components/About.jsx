import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="fw-bold mb-4"style={{color:'#56bbdb',fontSize:'3rem'}} >About Us</h1>
                        <p className="lead mb-4" style={{color:'black'}}>
                            We are a technology company born of the belief that companies should do more than just make a profit. They should make the world a better place.

                            Our efforts in climate action, human rights, and digital equity prove that we are doing everything in our power to make it so.



                            With over 80 years of actions that prove our intentions, we have the confidence to envision a world where innovation drives extraordinary contributions to humanity.



                            And our technology – a product and service portfolio of personal systems, printers, and 3D printing solutions – was created to inspire this meaningful progress.

                            We know that thoughtful ideas can come from anyone, anywhere, at any time.



                            And all it takes is one to change the world.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3" style={{color:'white',backgroundColor:'blue'}}>Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.webp" alt="About Us" height="500px" width="600px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
