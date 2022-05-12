import React from "react";
import Link from "react-scroll/modules/components/Link";
import Button from "../../components/Button/Button";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home__intro">
        <h1>Bruno Mars</h1>
        <p>
          Bruno Mars is an American singer, songwriter, record producer,
          musician and dancer
        </p>
        <Link
          activeClass="active"
          to="albums"
          spy={true}
          smooth={true}
          offset={-100}
          duration={600}
        >
          <Button buttonText={"Explore"} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
