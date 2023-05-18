import React from 'react'
import { Link } from 'react-router-dom'
// import DeleteButton from './DeleteButton';

const StoresList = (props) => {
    return (
        <div className='container' style={{ width: "50%" }}>
            <h4 className='my-4'>***The List of All Stores***</h4>
            <table className="table">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col">Store Name</th>
                        <th scope="col">Store Number</th>
                        <th scope="col">Open</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.storesList.map((store, index) =>
                            <tr key={index}>
                                <td>
                                    <Link to={`/detail/${store._id}`}><strong>{store.name}</strong></Link>
                                </td>
                                <td>
                                    <p>{store.number}</p>
                                </td>
                                <td>
                                    {store.isOpen ?
                                        <p>Yes</p> :
                                        <p>No</p>
                                    }
                                </td>
                                <td>
                                    {
                                        store.isOpen ?
                                            <button className='btn btn-outline-danger' onClick={() => props.onDelete(store._id)}>Delete</button> :
                                            <p></p>
                                    }

                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Link to={`/new`}><h3>Can't find your Store?</h3></Link>
        </div>
    )
}

export default StoresList