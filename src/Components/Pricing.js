import React from 'react'

export default function Pricing() {
  return (
<div className="price" id='Pricing'>
<h1 className="cen"><span>our</span> pricing</h1>
<div className="container">
    <div className="box">
        <h2>Basic Blan</h2>
        <div className="img"><img src="./images/p-1.png" alt="" /></div>
        <h1>$30.99 <span>/Mo</span></h1>
        <p>5GB Space</p>
        <p>2 Domains</p>
        <p>Seo Marketing</p>
        <p>24/7 Services</p>
        <p>Maintainance</p>
        <button>Choose Plan</button>
    </div>
    <div className="box">
        <h2>Standard Blan</h2>
        <div className="img"><img src="./images/p-2.png" alt="" /></div>
        <h1>$50.99 <span>/Mo</span></h1>
        <p>15GB Space</p>
        <p>10 Domains</p>
        <p>Seo Marketing</p>
        <p>24/7 Services</p>
        <p>Maintainance</p>
        <button>Choose Plan</button>
    </div>
    <div className="box">
        <h2>Premium Blan</h2>
        <div className="img"><img src="./images/p-3.png" alt="" /></div>
        <h1>$90.99 <span>/Mo</span></h1>
        <p>25GB Space</p>
        <p>20 Domains</p>
        <p>Seo Marketing</p>
        <p>24/7 Services</p>
        <p>Maintainance</p>
        <button>Choose Plan</button>
    </div>
</div>
</div>
  )
}
