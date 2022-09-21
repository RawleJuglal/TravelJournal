import React from 'react'
import './Location.css'

export default function Location(props){
    return(
        <div className="--location-location-container">
            <div className='--location-img-container'>
                <img className='--location-img' src={props.imageUrl} />
            </div>
            <div className='--location-information-container'>
                <div className='--location-country-map-container'>
                    <span className='--location-map'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi --location-bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <span className='--location-location'>{props.location}</span>
                        <a className="--location-mapLink" href={props.mapLink}>View on Google Maps</a>
                        </span>
                </div>
                <div className='--location-title-container'>
                    <h1 className='--location-title'>
                        {props.title}
                    </h1>
                </div>
                <div className='--location-date-container'>
                    <span className='--location-date'>{props.startDate} - {props.endDate}</span>
                </div>
                <div className='--location-description-container'>
                    <p className='--location-description'>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}