import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import HomePage from "./components/views/homepage";
import ResultsPage from './components/views/resultspage';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        console.log(data.message);
      });
  }, []);

  return (
    <Routes>
      <Route exact path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/results/*">
          <Route path=':firstID' element={<ResultsPage />} />
          <Route path=':firstID+:secondID' element={<ResultsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
