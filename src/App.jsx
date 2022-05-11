import "./App.scss";
import Albums from "./components/Albums/Albums";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import albums from "./data/albums";

const App = () => {
  const filteredAlbums = albums.filter(album => album.strAlbumThumb);
  return (
    <div className="App">
      <Nav />
      <Home />
      <Albums albums={filteredAlbums}/>
      <div id="contact">
        <h1>Contacts</h1>
      </div>
    </div>
  );
};
export default App;
