import React from 'react'

type Props = {
  size : string
}

export default function PlusIcon({ size }: Props) {
  function sizes() {
    if (size === "sm") {
      return 'w-4 h-4'
    } else if (size === "md") {
      return 'w-6 h-6'
    } 
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${sizes()}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  
  )
}