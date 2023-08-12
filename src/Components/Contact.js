import React from 'react'

export default function Contact() {
  return (
<div className="contact" id='Contact'>
    <h1 className="cen"><span>contact</span> us</h1>
    <div className="container">
        <div className="grid-1">
            <div className="box">
            <i class="fa-solid fa-phone"></i>
            <h1>Our Number</h1>
            <p>01012707504</p>
            </div>
            <div className="box">
            <i class="fa-regular fa-envelope"></i>
            <h1>Our Email</h1>
            <p>Mohamed@Exampel.com</p>
            </div>
            <div className="box">
            <i class="fa-solid fa-location-dot"></i>
            <h1>Our Location</h1>
            <p>Egypt / Giza</p>
            </div>
        </div>
        <div className="flex">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6511991.782757467!2d-124.5952563472036!3d37.1602248776906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2seg!4v1691857668042!5m2!1sen!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form action="">
            <input type="text" placeholder='Name' />
            <input type="email"  placeholder='email'/>
            <input type="number"  placeholder='Numbr'/>
            <textarea  cols="30" rows="10" placeholder='Message'></textarea>
            <input type="submit" value="Send Message" />
        </form>
        </div>
    </div>
</div>
  )
}
