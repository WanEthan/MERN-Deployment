import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StoresList from '../components/StoresList'

const MainPage = () => {

    const [storesList, setStoresList] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores`)
            .then(response => {
                // If the compare function returns a negative value, then s1 is kept before s2 in the sorted result.
                //Else if, the compare function returns a positive value, then s2 is kept before s1 in the sorted result
                //Else, if the compare function returns a zero, there are no swaps done between s1 and s2 into the sorted result, and their order remains the same.
                let sortedStoreNumbers = response.data.sort(
                    (s1, s2) => (s1.number < s2.number) ? -1 : (s1.number > s2.number) ? 1 : 0);
                console.log(sortedStoreNumbers)
                setStoresList(sortedStoreNumbers);
            })
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (storeId) => {
        axios.delete(`http://localhost:8000/api/stores/${storeId}`)
            .then(response => {
                removeFromDom(storeId)
            })
            .catch(err => console.log(err))
    }

    const removeFromDom = (storeId) => {
        const filteredList = storesList.filter((eachstore) => eachstore._id !== storeId)
        setStoresList(filteredList);
    }


    return (
        <div>
            <h3>Find Stores in your area</h3>
            <StoresList storesList={storesList} onDelete={handleDelete} />
        </div>
    )
}

export default MainPage