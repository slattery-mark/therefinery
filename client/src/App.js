import React from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import HomePage from "./components/views/homepage";
import SideBar from "./components/layout/sidebar";
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
      <Header />
      <SideBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
