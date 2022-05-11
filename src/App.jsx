import "./App.scss";
import Albums from "./components/Albums/Albums";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import albums from "./data/albums";

const App = () => {
  const filteredAlbums = albums.filter((album) => album.strAlbumThumb);
  return (
    <div className="App">
      <Nav />
      <Home />
      <Albums albums={filteredAlbums} />
      <Contacts />
    </div>
  );
};
export default App;
