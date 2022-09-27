import { useState, useEffect } from 'react';
import "./dummyKnight.css";
import data from "./dummyKnight.json"
import image from "./dummyKnight.png"
import axios from 'axios';

const DUMMY_KNIGHT = () => {

    const [knight, setKnight] = useState(data)

    // const url = "INSERT URL HERE"

    useEffect(() => {
    // if this was really pulling data from the backend the axios call would go here and look something like the following:
    //     axios.get(url)
    //         .then(res => {
    //             setKnight(res.data)
    //         })
    //         .catch(err => console.log(err))
        console.log(data)
    }, [])

    

    return (
        <div className='knight-position-arena'>
            <div className='knight-position28'>
                <div className='knight'>
                    <img height={64} src={image} alt={knight.name} />
                </div>
            </div>
        </div>
    );
};

export { DUMMY_KNIGHT };