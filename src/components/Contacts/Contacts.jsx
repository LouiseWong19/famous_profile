import React from "react";
import "./Contacts.scss";
import FacebookIcon from "../ContactsIcon/FacebookIcon";
import InstagramIcon from "../ContactsIcon/InstagramIcon";
import TwitterIcon from "../ContactsIcon/TwitterIcon";
import SpotifyIcon from "../ContactsIcon/SpotifyIcon";

const Contacts = () => {
  return (
    <div className="contacts" id="contact">
      <h1>Latest News</h1>
      <p>Follow Bruno Mars' social media for the lastest news</p>
      <div className="contacts__icons">
         <a href="https://www.facebook.com/brunomars/" target="_blank">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/brunomars/?hl=en" target="_blank">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/BrunoMars" target="_blank">
        <TwitterIcon />
      </a>
      <a href="https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C" target="_blank">
        <SpotifyIcon />
      </a>
      </div>
      <p>© Bruno Mars 2022</p>
     
      
    </div>
  );
};

export default Contacts;
