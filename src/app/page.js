// (not best practice)
// "use client" 
// import { useState } from 'react'

import Counter from "@/components/Counter/Counter"

const HomePage = () => {
  //client component
  // const [counter,setCounter] = useState(0)
// console.log("hello world");



// throw new Error()

  return (
    <div>
    <h1>This is next app</h1>
    {/* <h2>Counter :{counter}</h2>
    <button className='btn btn-primary' onClick={()=>setCounter(counter+1)}>Increase</button>
    <button className='btn btn-primary' onClick={()=>setCounter(counter-1)}>Decrease</button> */}
    <Counter/>
    </div>
  )
}

export default HomePage