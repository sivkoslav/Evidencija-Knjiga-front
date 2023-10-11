import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Pagination, Table } from 'antd'

export default function ViewBooks() {

    const { id } = useParams()
    const [totalPages, setTotalPages] = useState(1)
    
    const recordPerPage = 5
    

    const [books, setBooks] = useState([])
    

    const columns = [
        {
            title:"ID",
            dataIndex:"id"
        },
        {
            title:"Name",
            dataIndex:"bookName"
        },
        {
            title:"Author",
            dataIndex:"bookAuthor"
        },
        {
            title:"Date",
            dataIndex:"date"
        }
    ]
    
    
    useEffect(() => {
        loadBooks(0)
    }, [])

    const loadBooks = async (page) => {
        
        //setLoading(true)
        await axios.get(`http://localhost:8080/apiv2/books-of-person?personId=${id}&pageNumber=0&recordCount=${recordPerPage}&sorted=`)
        .then((res)=>{
            setBooks(res.data.content)
            console.log(res.data)
            setTotalPages(res.data.totalPages)
            console.log(res.data.totalPages)
            

        })
        
        



    }

    return (
        <div className='container'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Knjige</h2>
                
                <Table 
                
                columns={columns}
                dataSource={books}
                pagination={{
                    defaultPageSize:5,
                    total: totalPages,
                    onChange: (page)=>{
                        loadBooks(page)
                    }
                }}
              
                
                ></Table>
                
                
            </div>
        </div>
    )

    
}
