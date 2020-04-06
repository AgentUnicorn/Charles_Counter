import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import charles from './src/charles.jpg';

export default function Box() {
    let boxArray = useSelector(state=> state.boxArray)
    let bgColor = useSelector(state=> state.bgColor)
    let textColor = useSelector(state=> state.textColor)

    let dispatch = useDispatch();

    let individualColor = (e) => {
        let indColor = e.target.value
        dispatch({type: 'IND_COLOR', payload:indColor})
    }

    const htmlBox = boxArray.map(box => {
        return(
            <div style={{backgroundColor:`${bgColor}`, border: "1px solid black", color: `${textColor}`}}>
                <h2>{box.name}'s favorite color is: {bgColor}</h2>
                <input type="text" placeholder="color" onChange={individualColor}></input>
            </div>
        )
    })
    return (
        <div>
            {htmlBox}
        </div>
    )
}
