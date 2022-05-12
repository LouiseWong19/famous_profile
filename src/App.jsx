import "./App.scss";
import Albums from "./containers/Albums/Albums";
import Contacts from "./containers/Contacts/Contacts";
import Home from "./containers/Home/Home";
import Nav from "./components/Nav/Nav";
import albums from "./data/albums";
import About from "./containers/About/About";

const App = () => {
  const filteredAlbums = albums.filter((album) => album.strAlbumThumb);
  return (
    <div className="App">
      <Nav />
      <Home />
      <Albums albums={filteredAlbums} />
      <About />
      <footer>
        <Contacts />
      </footer>
    </div>
  );
};
export default App;
