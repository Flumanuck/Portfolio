import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Profile />
        <Body />
      </div>
    </div>
  );
}

export default App;
