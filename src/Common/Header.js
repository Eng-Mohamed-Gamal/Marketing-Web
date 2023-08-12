import React, { useRef, useState } from 'react'

export default function Header() {
const [tog , setTog] = useState(false)
const barsRef = useRef()

  const Bars = () =>{
    setTog(!tog)
    barsRef.current.classList.toggle("translate")
    if(barsRef.current.classList.contains("translate")){
        barsRef.current.classList.add("trans")
    }else{
        setTimeout(()=>{
            barsRef.current.classList.remove("trans")
        },300)
    }
}
  return (
<div className="header">
    <div className="container">
        <h1>Marketo</h1>
        <ul  ref={barsRef} >
            <li><a href="#Home">Home</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#Review">Review</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
        <i class={tog ? "fa-solid fa-times" : "fa-solid fa-bars"} onClick={Bars} ></i>
    </div>
</div>
  )
}
