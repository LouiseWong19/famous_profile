import React from "react";
import FacebookIcon from "../ContactsIcon/FacebookIcon";
import InstagramIcon from "../ContactsIcon/InstagramIcon";
import TwitterIcon from "../ContactsIcon/TwitterIcon";

const Contacts = () => {
  return (
    <div className="contacts" id="contact">
      <h1>Latest News</h1>
      <p>Follow Bruno Mars' social media for the lastest news</p>
      <a href="https://www.facebook.com/brunomars/" target="_blank">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/brunomars/?hl=en" target="_blank">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/BrunoMars" target="_blank">
        <TwitterIcon />
      </a>
      
    </div>
  );
};

export default Contacts;
