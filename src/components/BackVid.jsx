import React from 'react'
import "./comp.css"
// import VID from './../assets/bg-Vid.mp4'


export default function BackVid() {
  return (
    <div className='h-[100%]'>
      <video className="video-bg" autoPlay loop muted>
          <source src={`${process.env.PUBLIC_URL}/bg-Vid.mp4`} type="video/mp4" />
        </video>
    </div>
  )
}
