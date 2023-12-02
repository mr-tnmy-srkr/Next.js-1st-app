"use client"
import { useState } from 'react'
const Counter = () => {
  //client component
  const [counter,setCounter] = useState(0)
// console.log("hello world");


  return (
    <div>
    <h1>This is next app</h1>
    <h2>Counter :{counter}</h2>
    <button className='btn btn-primary' onClick={()=>setCounter(counter+1)}>Increase</button>
    <button className='btn btn-primary' onClick={()=>setCounter(counter-1)}>Decrease</button>
    </div>
  )
}

export default Counter