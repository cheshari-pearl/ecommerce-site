import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGooglePlay } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { LuCopyright } from "react-icons/lu";
import React from "react";
import './index.css'



const Footer = () => {
    return(
        <div id="footer">
        <div id="footer-text">
        <div >
          <h3>Need Help</h3>
          <p>Contact Us</p>
          <p>Track Order</p>
          <p>Returns & Refunds</p>
          <p>FAQs</p>
          <p>Career</p>
     </div>

    <div >
        <h3>Company</h3>
        <p>About Us</p>
        <p>Driplabs Blog</p>
        <p>Drips</p>
        <p>Collaboration</p>
        <p>Media</p>
    </div>
    
    <div >
        <h3>More Info</h3>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Shipping Policy</p>
        <p>Sitemap</p>
    </div>

    <div>
        <h3>Location </h3>
        <p>support@driplabs.com</p>
        <p>Address Line 1, State or Province, Country, Zip 912034</p>
        <p>State or Province, Country, Zip 912034</p>
    </div>
        
    </div>
        
        <div>
    <TiSocialFacebook /> <FaInstagram /> <FaTwitter /> <RiLinkedinFill />
    </div>

    <div>
        Download The App
    <FaGooglePlay /> Download app on Google Play
    <MdOutlinePhoneIphone /> Download on the App Store
        </div>

        <div>Popular Categories</div>
        <p> Copyright <LuCopyright /> 2023 Driplabs Company. All Rights Reserved. </p>
       
        </div>
    )
}
export default Footer