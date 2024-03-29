import Link from '@/node_modules/next/link';
import React from 'react'


const Video = () => {

  return (
      <video src='Video/heroblockVideo.mp4'
      autoPlay
      muted
      playsInline
      loop
      preload=""
    >
      </video>
  )
}

export default Video

