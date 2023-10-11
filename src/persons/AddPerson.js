import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function AddPerson() {

    let navigate = useNavigate()

    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email: "",
        prhoneNumber: "",
        brLicneKarte: ""
    })

    const { firstName, lastName, email, phoneNumer, brLicneKarte } = person

    const onInputChange = (e) => {

        setPerson({ ...person, [e.target.name]: e.target.value })

    }

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/addPerson",person);
        navigate("/")


    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Dodaj Korisnika</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>
                                Ime
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Unesite Ime'
                                name="firstName"
                                value={firstName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Lastname' className='form-label'>
                                Prezime
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Unesite Prezime'
                                name="lastName"
                                value={lastName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>
                                Email
                            </label>
                            <input
                                type={"email"}
                                className='form-control'
                                placeholder='Unesite email'
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='PhoneNumber' className='form-label'>
                                Broj telefona
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Unesite broj telefona'
                                name="phoneNumber"
                                value={phoneNumer}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='BrLicneKarte' className='form-label'>
                                Broj licne karte
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Unesite broj licne karte'
                                name="brLicneKarte"
                                value={brLicneKarte}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type='submit' className='btn btn-outline-primary mx-2'>Dodaj</button>
                        <Link  to="/" type='submit' className='btn btn-outline-danger mx-2'>Nazad</Link>
                    </form>

                </div>
            </div>
        </div>
    )
}
