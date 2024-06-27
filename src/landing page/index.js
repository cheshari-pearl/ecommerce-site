import React from "react"
import './index.css'
import man from '../Images/man.png'
import girl1 from '../Images/girl1.png'
import girl2 from '../Images/girl2.png'

const LandingPage = () => {
    return(
        <div>

        <div id="landingpage">
            <div>
     <img src={man} alt="Man in suit"/>
     </div>
     <div id="landing-text">
        <p>THE Real GENTLEMAN</p>
         <p> Choose from the most luxurious collections and experience THE ROYAL LOOK & FEEL</p>
         <button id="order-button">Order Now</button>
         </div>
         </div>

    <div id="discount">
         <div id="discount1">
            <h3>Low Price</h3>

            <p>High Coziness</p>
            <h6>UPTO 50% OFF</h6>
             <h3>Explore Items</h3>
        <img src={girl1} alt="girl1" id="girl1"/>
         </div>

         <div id="discount2">
            <h3>Beyoung Presents</h3>

            <p>Breezy Summer Style</p>
            <h6>UPTO 50% OFF</h6>
             <h3>Explore Items</h3>
             <img src={girl2} alt="girl2" id="girl2"/>
         </div>
    </div>


        
        
        <div>
            <h1>WE MAKE YOUR EVERYDAY FASHION BETTER</h1>
            <p>In our journey to improve everyday fashion 
            euphoria presents EVERYDAY wear range - 
            Comfortable & Affordable fashion 24/7
            </p>
            <button>Shop Now</button>

           
        </div>

        </div>
    )
}
export default LandingPage
