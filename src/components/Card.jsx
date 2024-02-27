import React from 'react'
//import ImageCard from '../images/katie-zaferes.png'
import ImageStats from '../images/star.png'
import '../App.css'

export default function Card(props) {
  
  let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    <div className='card'>
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.item.coverImg} className='card--image' />
      <div className='card--stats'>
        <img src={ImageStats} className='card--star' />
        <span>{props.item.stats.rating}</span>
        <span className='gray'>({props.item.stats.reviewCount}) . </span>
        <span className='gray'>{props.item.location}</span>
      </div>
      <h2 className='card--title'>{props.item.title}</h2>
      <p className='card--price'><span className='bold'>From ${props.item.price} </span>/ person</p>
    </div>
  )
}
