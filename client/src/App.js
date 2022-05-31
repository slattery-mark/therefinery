import React from "react";
import logo from './logo.svg';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
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
      <div></div>
      <Footer />
    </div>
  );
}

export default App;
