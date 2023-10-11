import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import PersonCard from '../components/PersonCard';


export default function Home() {


    const [persons, setPersons] = useState([])
    const [records,setRecords] = useState([])

    useEffect(() => {
        loadPersons();
    }, [])

    const loadPersons = async () => {
        const result = await axios.get("http://localhost:8080/api/persons")
        setPersons(result.data)
        setRecords(result.data)
    }

    const filter = (event)=>{
        console.log(event.target.value)
        console.log(records.filter(f=>f.brLicneKarte.toLowerCase().includes(event.target.value)))
        //srediti ovo
        setPersons(records.filter(f=>f.brLicneKarte.toLowerCase().includes(event.target.value)))
        
        
    }

    return (
        
        <div className='container'>
            <input type='text ' className='form-control mt-2 mb-2' onChange={filter} placeholder='pretraga'></input>
            <Grid container spacing={3}>
           {persons.map(person=>(
            <Grid item key={person.id} xs={12} md={6} lg={4}>
                <PersonCard person={person}>{person.firstName}</PersonCard>
            </Grid>
           ))}
           </Grid>
        </div>
    )
}
