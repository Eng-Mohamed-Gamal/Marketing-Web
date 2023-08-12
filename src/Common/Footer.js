import React from "react";
import { useTypewriter } from "react-simple-typewriter";

export default function Footer() {

    const [text] = useTypewriter({
        words : ["Jemy" , "Front-End-Developer"],
        loop : {}
    })

  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <h1>Our Branches</h1>
          <div className="row">
            <i class="fa-solid fa-location-dot"></i> <p>India</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-location-dot"></i> <p>USA</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-location-dot"></i> <p>Japan</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-location-dot"></i> <p>Russia</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-location-dot"></i> <p>France</p>
          </div>
        </div>
        <div className="col">
          <h1>Quick Links</h1>
          <div className="row">
            <i class="fa-solid fa-arrow-right"></i> <a href="#Home">Home</a>
          </div>
          <div className="row">
            <i class="fa-solid fa-arrow-right"></i>{" "}
            <a href="#Services">Services</a>
          </div>
          <div className="row">
            <i class="fa-solid fa-arrow-right"></i> <a href="#About">About</a>
          </div>
          <div className="row">
            <i class="fa-solid fa-arrow-right"></i>{" "}
            <a href="#Portfolio">Portfolio</a>
          </div>
          <div className="row">
            <i class="fa-solid fa-arrow-right"></i>{" "}
            <a href="#Pricing">Pricing</a>
          </div>
          <div className="row">
            <i class="fa-solid fa-arrow-right"></i> <a href="#Review">Review</a>
          </div>
          <div className="row">
            <i class="fa-solid fa-arrow-right"></i>{" "}
            <a href="#Contact">Contact</a>
          </div>
        </div>
        <div className="col">
          <h1>Our Services</h1>
          <div className="row">
            <i class="fa-solid fa-check"></i> <p>Web Design</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-check"></i> <p>seo marketing</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-check"></i> <p>digital marketing</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-check"></i> <p>content marketing</p>
          </div>
          <div className="row">
            <i class="fa-solid fa-check"></i> <p>email marketing</p>
          </div>
        </div>
        <div className="col">
          <h1>Follow us</h1>
          <div className="row">
            <i class="fa-brands fa-facebook-f"></i> <p>Facebook</p>
          </div>
          <div className="row">
            <i class="fa-brands fa-twitter"></i> <p>twitter</p>
          </div>
          <div className="row">
            <i class="fa-brands fa-instagram"></i>
            <p>instagram</p>
          </div>
          <div className="row">
            <i class="fa-brands fa-pinterest"></i>
            <p>pinterest</p>
          </div>
        </div>
      </div>
      <h3>Made By {text}</h3>
    </div>
  );
}
