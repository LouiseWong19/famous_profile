import React from "react";
import Album from "../Album/Album";
import "./Albums.scss";

const Albums = (props) => {
  const { albums } = props;

  return (
    <div className="albums" id="albums">
      <h1>Albums</h1>
      <div className="albums__items">
        {albums.map((album) => {
          return <Album key={album.idAlbum} picture={album.strAlbumThumb} title={album.strAlbum}/>;
        })}
      </div>
    </div>
  );
};

export default Albums;
