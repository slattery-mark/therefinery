import React from "react";
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import HomePage from "./components/homepage/homepage";
import SidePanel from "./components/layout/side-panel/side-panel";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      < Header />
      < SidePanel />
      < HomePage />
      < Footer />
    </div>
  );
}

export default App;
