import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AddBook() {

    let navigate = useNavigate()

    const {id} = useParams()
    const [book,setBook] = useState({
        bookname: "",
        bookAuthor: "",
        date:"",
    })

    const {bookName, bookAuthor, date} = book

    const onInputChange=(e)=>{
        setBook({...book,[e.target.name]: e.target.value})
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:8080/apiv2/addBook/${id}`,book)
        navigate("/")
        
    }


  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Dodavanje Knjige</h2>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='BookName' className='form-label'>
                        BookName
                    </label>
                    <input 
                    type={"text"}
                    className='form-control'
                    placeholder='Unesite naziv knjige'
                    name='bookName'
                    value={bookName}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='BookAuthor' className='form-label'>
                        BookName
                    </label>
                    <input 
                    type={"text"}
                    className='form-control'
                    placeholder='Unesite autora knjige'
                    name='bookAuthor'
                    value={bookAuthor}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='Date' className='form-label'>
                        Date 
                    </label>
                    <input 
                    type={"date"}
                    className='form-control'
                    placeholder='Unesite datum'
                    name='date'
                    value={date}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type='submit' className='btn btn-outline-primary mx-2'>Dodaj</button>
                <Link to="/" className="btn btn-outline-danger mx-2">Nazan</Link>
            </form>
        </div>

    </div>
  )
}
