import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const SWPlanets = (props) => {
    const [ planet, setPlanet ] = useState('')
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => {
            console.log(response.data);
            setPlanet(response.data);
        })
        .catch((err) => {
            console.log(err);
            setPlanet('')
        })
    }, [id])
        if(planet){
        return (
            <div>
                <h2>{ planet.name }</h2>
                <p>Climate: { planet.climate } </p>
                <p>Terrain: { planet.terrain }</p>
                <p>Surface Water: { planet.surface_water }</p>
                <p>Population: {planet.population}</p>
            </div>
        )
        }
        if(!planet) {
            return (
                <div>
                    <h1>These aren't the droids you're looking for.</h1>
                    <img src="https://imageio.forbes.com/specials-images/imageserve/6272cec264a0b61e6841d642/Obi-Wan--played-by-Ewan-McGregor-/960x0.jpg?format=jpg&width=960" alt="obi wan" />
                </div>
            )
        }
    }



export default SWPlanets
