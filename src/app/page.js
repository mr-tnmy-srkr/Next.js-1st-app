// (not best practice)
// "use client"
// import { useState } from 'react'

import Counter from "@/components/Counter/Counter";
import Link from "next/link";

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
      <Counter />
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>
      <Link href="/contact">
        <button className="btn btn-accent">Contact</button>
      </Link>
      <Link href="/news">
        <button className="btn btn-accent">News</button>
      </Link>
      <Link href="/news/article">
        <button className="btn btn-accent">Article</button>
      </Link>
      <Link href="/news/blog">
        <button className="btn btn-accent">Blog</button>
      </Link>
    </div>
  );
};

export default HomePage;
