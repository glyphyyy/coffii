import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Info from "./components/info/Info"
import InfoBanner from "./components/infobanner/InfoBanner"
import Footer from "./components/footer/Footer"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from 'react';
import Scroll from "./components/scroll/Scroll";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Scroll />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <InfoBanner/>
          <Info />
          <Footer />
        </div>
    </div>
  );
}

export default App;
