import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="d-flex flex-wrap align-items-center justify-content-center py-3 my-4 border-top">

                {/* <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                </Link> */}
                <span className="mb-0 text-muted align-items-center">© 2023 PrwzFood, All Rights Reserved</span>


            </footer>
        </>
    )
}

export default Footer;