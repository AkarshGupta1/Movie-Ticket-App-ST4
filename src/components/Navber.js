import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="bg-warning p-3">
            <div className="navigation">
                <Navbar  expand="lg">
                    <Link className="text-link h4 text-primary" to="/">Play with React API</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <button className="btnn btn btn-primary mx-4"><Link className="text-link" to="/home">Home</Link></button>
                            <button onClick={()=>alert("This feature is not available right now !!")} className="btnn btn btn-primary"><Link className="text-link" to="/home">About us</Link></button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Navigation;
