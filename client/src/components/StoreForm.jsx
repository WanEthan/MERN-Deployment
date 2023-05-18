import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper } from '@mui/material';

const StoreForm = (props) => {

    const { initialName, initialNunmber, initialIsOpen, onSubmitProp } = props;
    const [name, setName] = useState(initialName)
    const [number, setNumber] = useState(initialNunmber)
    const [isOpen, setIsOpen] = useState(initialIsOpen)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({ name: name, number: number, isOpen: isOpen });
        setName("");
        setNumber(null);
        setIsOpen(false);
    }

    const handleIsOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
        else {
            setIsOpen(false);
        }
    }

    const handleCancle = (e) => {
        navigate(`/`)
    }

    return (
        <div className='container' style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Paper elevation={3} style={{padding:"3%"}}>
            <form onSubmit={handleSubmit}>
                {
                    props.errors.map((err, index) => <p key={index} style={{ color: "red" }}> {err} </p>)
                }

                <div className="row mb-3 align-items-center">
                    <label className="col-auto col-form-label"><strong>Store Name: </strong></label>
                    <div className="col-auto">
                        <input type="text" className="form-control" name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <label className="col-auto col-form-label"><strong>Store Number: </strong></label>
                    <div className="col-auto">
                        <input type="number" className="form-control" name='number' value={number} onChange={(e) => setNumber(e.target.value)}></input>
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <div className="col-auto">
                        <input className="form-check-input" type="checkbox" name='isOpen' checked={isOpen} onChange={(e) => handleIsOpen(e.target.checked)} style={{ zoom: "1.5" }}></input>
                    </div>
                    <label className="col-auto col-form-label"><strong>Open?</strong></label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginRight: "15px" }}>Submit</button>
                <button className='btn btn-outline-dark' onClick={handleCancle}>Cancel</button>

            </form>
            </Paper>
        </div>
    )
}

export default StoreForm