import Navbar from "./components/Navbar/";
import Profile from "./components/Profile";
import Body from "./components/Body";
import Footer from "./components/Footer/";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Profile />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
