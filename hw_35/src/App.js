import { useState } from 'react';
import './App.css';
import Header from './Component/Header/header';
import Sidebar from './Component/Sidebar/sidebar';
import Body from './Component/Body/body';

function App() {
  const [isMenuOpen, setMenuState] = useState(false);
  return (
    <div className="wrapper">
      <Header
        isMenuOpen={isMenuOpen}
        onClickMenu={setMenuState}
      />
      <Sidebar
        isMenuOpen={isMenuOpen}
      />
      <Body/>
    </div>
  );
}

export default App;
