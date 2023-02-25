import React from "react"
import pin from "../images/pin.png"
export default function Card(props) {
    return (
    <div className='card'>
        <img className = 'card-img' src={props.item.imageUrl}/>
        <div className='card-text'>
            <div className='card-stats'>
                <img className ='card-pin' src ={pin}/>
                <span className ='card-location'>{props.item.location}</span>
                <a className ='card-maps' target="_blank" href = {props.item.googleMapsUrl}>View on google maps</a>
            </div>
        <h2 className="card-title">{props.item.title}</h2>
        <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
        <p className="card-description">{props.item.description}</p>
        </div>
    </div>
    )
}