import React from 'react'
import Album from '../Album/Album';
import "./Albums.scss";

const Albums = props => {
  const {albums} = props;
  
  return (
    <div className='albums' id="albums">
      <h1>Albums</h1>
      {albums.map((album)=>{
        return <Album key={album.idAlbum} picture={album.strAlbumThumb} />
      })}
      </div>
  )
}

export default Albums