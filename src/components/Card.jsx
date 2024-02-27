import React from 'react'
//import ImageCard from '../images/katie-zaferes.png'
import ImageStats from '../images/star.png'
import '../App.css'

export default function Card(props) {
  
  return (
    <div className='card'>
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img src={props.imgUrl} className='card--image' />
      <div className='card--stats'>
        <img src={ImageStats} className='card--star' />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) . </span>
        <span className='gray'>{props.location}</span>
      </div>
      <h2 className='card--title'>{props.title}</h2>
      <p className='card--price'><span className='bold'>From ${props.price} </span>/ person</p>
    </div>
  )
}
