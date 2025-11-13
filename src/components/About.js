import React, { useCallback, useState } from 'react'
import MyChild from './MyChild'

export default function About() {
    const [count,setCount] = useState(0)
    console.log('Parent rendered')

    // useCallback memoizes the function reference

    const handleAlert = useCallback(()=>{
        alert("Hello from child")
    },[])
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>

        <MyChild onAlert={handleAlert} />
    </div>
  )
}
