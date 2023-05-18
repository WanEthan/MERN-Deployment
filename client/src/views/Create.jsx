import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import StoreForm from '../components/StoreForm'



const Create = () => {

    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const createStore = (store) => {
        // send the form data to api
        console.log(store)
        axios.post('http://localhost:8000/api/stores', store)
            .then(response => {
                console.log(response.data)
                setErrors([])
                navigate(`/detail/${response.data._id}`)
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errMsgArr = []

                for (const eachKey in errorResponse) {
                    errMsgArr.push(errorResponse[eachKey].message)
                }
                setErrors(errMsgArr);
            })
    }

    return (
        <div>
            <Link to={`/`}>Back to Main Page</Link>
            <h3 className='mt-4'>Add New Store</h3>
            <StoreForm onSubmitProp ={createStore} initialName=""  initialNumber={null} initialIsOpen={false} errors ={errors}/>
        </div>
    )
}

export default Create