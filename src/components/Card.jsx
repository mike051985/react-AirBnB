import React from 'react'
//import ImageCard from '../images/katie-zaferes.png'
import ImageStats from '../images/star.png'
import '../App.css'

export default function Card(props) {
  console.log(props)
  return (
    <div className='card'>
      <img src={props.imgUrl} className='card--image' />
      <div className='card--stats'>
        <img src={ImageStats} className='card--star' />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) . </span>
        <span className='gray'>{props.location}</span>
      </div>
      <h2>{props.title}</h2>
      <p><span className='bold'>From ${props.price} </span>/ person</p>
    </div>
  )
}
