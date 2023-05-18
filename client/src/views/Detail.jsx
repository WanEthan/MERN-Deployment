import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from '@mui/material';

// 1. get id from params (useParams)
// 2. with the id, send api call on load (useEffect,axios)
// 3. store the changing variable from api (useState) 

const Detail = () => {

    const [store, setStore] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(response => {
                setStore(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <Link className='mt-4' to={"/"}>Back to Main Page</Link>
            {
                store ?
                    <Card className='mx-auto' variant="outlined" style={{padding:"3%", width: "40%"}}>
                        <div className='container'>
                            <h1><strong>Store Name:</strong> {store.name}</h1>
                            <h4><strong>Store Number:</strong> {store.number}</h4>
                            <p><strong>Open? </strong>
                                {
                                    store.isOpen ?
                                        <span>Yes</span> :
                                        <span>No</span>
                                }
                            </p>
                            <Link className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to={`/update/${id}`}>Update Store Details</Link>
                        </div>
                    </Card> :
                    <h1>Sorry, there are no details!</h1>
            }
        </div>
    )
}

export default Detail