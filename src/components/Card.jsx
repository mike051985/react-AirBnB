import React from 'react'
import ImageCard from '../images/katie-zaferes.png'
import ImageStats from '../images/star.png'
import '../App.css'

export default function Card() {
  return (
    <div className='card'>
      <img src={ImageCard} className='card--image' />
      <div className='card--stats'>
        <img src={ImageStats} className='card--star' />
        <span>5.0</span>
        <span className='gray'>(6) . </span>
        <span className='gray'>USA</span>
      </div>
      <h2>Life lessons with Katie Zaferes</h2>
      <p><span className='bold'>From $136 </span>/ person</p>
    </div>
  )
}
