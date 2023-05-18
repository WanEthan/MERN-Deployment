import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import StoreForm from '../components/StoreForm'

const UpdateStore = () => {

    const { id } = useParams();
    const [name, setName] = useState("")
    const [number, setNumber] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
            .then(response => {
                const store = response.data
                setName(store.name);
                setNumber(store.number);
                setIsOpen(store.isOpen);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [id])

    const updateStore = store => {
        axios.patch(`http://localhost:8000/api/stores/${id}`, store)
            .then(res => {
                console.log(res)
                setErrors([])
                navigate(`/detail/${id}`)
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
            <h3 className='mt-4'>Edit this Author</h3>
            {(loaded &&
                <StoreForm
                    onSubmitProp={updateStore}
                    initialName={name} initialNunmber={number} initialIsOpen={isOpen} errors={errors} />
            )}
        </div>
    )
}

export default UpdateStore