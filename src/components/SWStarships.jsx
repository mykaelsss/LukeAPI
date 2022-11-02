import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
const SWStarships = () => {
    const [ starship, setStarship ] = useState('')
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
        .then(response => {
            console.log(response.data);
            setStarship(response.data);
        })
        .catch((err) => {
            console.log(err);
            setStarship('')
        })
    }, [id])
        if(starship){
        return (
            <div>
                <h2>{ starship.name }</h2>
                <p>Cargo Capacity: { starship.cargo_capacity} </p>
                <p>Consumables: { starship.consumables }</p>
                <p>Starship Class: { starship.starship_class}</p>
                <p>Crew: { starship.crew }</p>
                <p>Cost in credits: {starship.cost_in_credits}</p>
            </div>
        )
        }
        if(!starship) {
            return (
                <div>
                    <h1>These aren't the droids you're looking for.</h1>
                    <img src="https://imageio.forbes.com/specials-images/imageserve/6272cec264a0b61e6841d642/Obi-Wan--played-by-Ewan-McGregor-/960x0.jpg?format=jpg&width=960" alt="obi wan" />
                </div>
            )
        }
    }

export default SWStarships
