import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
const SWPeople = (props) => {
    const [person, setPerson] = useState('')
    const { id } = useParams()
    useEffect (() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            console.log(response.data);
            setPerson(response.data);
        })
        .catch((err) => {
            console.log(err)
            setPerson('')
        })
    }, [id])
    if(person){
        return (
            <div>
                <h2>{ person.name }</h2>
                <p>Height: { person.height } cm</p>
                <p>Mass: { person.mass } kg</p>
                <p>Hair Color: { person.hair_color  }</p>
                <p>Eye Color: { person.eye_color }</p>
            </div>
        )
        }
        if(!person) {
            return (
                <div>
                    <h1>These aren't the droids you're looking for.</h1>
                    <img src="https://imageio.forbes.com/specials-images/imageserve/6272cec264a0b61e6841d642/Obi-Wan--played-by-Ewan-McGregor-/960x0.jpg?format=jpg&width=960" alt="obi wan" />
                </div>
            )
        }
}

export default SWPeople
