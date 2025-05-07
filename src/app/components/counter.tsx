"use client"
import { useState } from "react";

export const Counter = () => {
    const [count ,setCount] = useState(0);
    console.log("counter component");
    return (
        <button className="" onClick={()=>{
            setCount(count + 1)
        }}>{count}</button>
    )
}
