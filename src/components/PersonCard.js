import React from 'react'
import Card from '@mui/material/Card'
import  CardHeader  from '@mui/material/CardHeader'
import  CardContent  from '@mui/material/CardContent'
import { IconButton, Typography } from '@mui/material'
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
export default function PersonCard({ person }) {
  return (
    <div>
      <Card>
        <CardHeader 
          

          
          
          title={person.firstName +" "+ person.lastName}
          subheader={person.phoneNumber}
          
        />
        <CardContent>
          <Typography variant='body2' color="textSecondary">
            <div>
              <p>email: <strong>{person.email}</strong></p>
              <p>Broj licne karte: <strong>{person.brLicneKarte}</strong></p>
            </div>
            <Link to={`/viewBooks/${person.id}`} className='btn btn-primary mx-2'>Pregled Knjiga</Link>
            <Link to={`/editPerson/${person.id}`} className='btn btn-outline-primary mx-2'>Izmeni podatke</Link>
            <Link to={`/addBook/${person.id}`} className='btn btn-outline-primary mx-2 md-2 mt-2'>Dodaj Knjigu</Link>
          </Typography>
        </CardContent>

      </Card>
    </div>
  )
}
