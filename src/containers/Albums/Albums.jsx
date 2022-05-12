import React from "react";
import Album from "../../components/Album/Album";
import "./Albums.scss";

const Albums = (props) => {
  const { albums } = props;

  return (
    <div className="albums" id="albums">
      <h1>Albums</h1>
      <div className="albums__items">
        {albums.map((album) => {
          return (
            <Album
              key={album.idAlbum}
              picture={album.strAlbumThumb}
              title={album.strAlbum}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Albums;
