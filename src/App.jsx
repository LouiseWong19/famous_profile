import "./App.scss";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <div id="home">
        <h1>Welcome</h1>
      </div>
      <div id="films">
        <h1>Films</h1>
      </div>
      <div id="contact">
        <h1>Contacts</h1>
      </div>
    </div>
  );
};
export default App;
