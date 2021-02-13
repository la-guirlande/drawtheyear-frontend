import React from 'react'

const Squares: React.FC = () => {
  return (
    <div className="w-full h-1/2-screen" >
      <ul className="absolute top-0 bottom-0 w-11/12 h-11/12 overflow-hidden squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div >
  )
}

export default Squares
