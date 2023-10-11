import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to="/"><a className="navbar-brand" href="#">Evidencija Knjiga</a></Link>
                   

                    <Link className="btn btn-outline-light" to="/addperson">Dodaj Osobu</Link>
                </div>
            </nav>

        </div>
    )
}
