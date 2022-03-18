import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Airlines from './components/Airlines/Airlines';

function App() {
  return (
    <>
      <Router>
          <Header></Header>
        <Routes>
          <Route path='/' element={<Airlines></Airlines>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
