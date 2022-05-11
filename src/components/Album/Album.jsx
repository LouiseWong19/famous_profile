import React from 'react'
import "./Album.scss"

const Album = (props) => {
  const {picture} = props
  return (
    <div className='album'>
      <img src={picture}/>
    </div>
  )
}

export default Album