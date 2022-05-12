import React from "react";
import "./Contacts.scss";
import FacebookIcon from "../../components/ContactsIcon/FacebookIcon";
import InstagramIcon from "../../components/ContactsIcon/InstagramIcon";
import TwitterIcon from "../../components/ContactsIcon/TwitterIcon";
import SpotifyIcon from "../../components/ContactsIcon/SpotifyIcon";
import SubscriptionForm from "../../components/SubscriptionForm/SubscriptionForm";

const Contacts = () => {
  return (
    <div className="contacts" id="contact">
      <h1>Latest News</h1>
      <p>Follow Bruno Mars' social media for the latest news</p>
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
        <a
          href="https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C"
          target="_blank"
        >
          <SpotifyIcon />
        </a>
      </div>
      <div className="contacts__form">
        <p>Or subscribe to the mailing list</p>
        <SubscriptionForm />
      </div>
      <hr></hr>
      <p>© Bruno Mars 2022</p>
    </div>
  );
};

export default Contacts;
