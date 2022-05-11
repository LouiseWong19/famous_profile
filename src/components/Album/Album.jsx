import React from "react";
import "./Album.scss";

const Album = (props) => {
  const { picture,title } = props;
  return (
    <div className="album">
      <img src={picture} />
      <div className="album__title">{title}</div>
    </div>
  );
};

export default Album;
