import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchForm = () => {
    const [searchType, setSearchType] = useState('people');
    const [selectedId, setSelectedId] = useState();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${searchType}/${selectedId}`);
    }

    // const handleSelectChange = (e) => {
    //     setSearchType(e.target.value);
    // }

    // const handleIdChange = (e) => {
    //     setSelectedId(e.target.value);
    // }


return (
    <div className='w-100'>
        <form id='searchForm' onSubmit={submitHandler} className='d-flex justify-content-center p-5'>
            <div className='d-flex w-50 gap-3 align-items-center'>
                <label htmlFor="">Search For:</label>
                <select name="" id="" className='form-control w-25' onChange={ (e) => setSearchType(e.target.value)}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                </select>
                <label htmlFor="">ID: </label>
                <input type="number" className='form-control w-25'  onChange={ (e) => setSelectedId(e.target.value)}/>
            <button className='btn btn-outline-primary'> Search </button>
            </div>
        </form>
    </div>
  )
}

export default SearchForm
