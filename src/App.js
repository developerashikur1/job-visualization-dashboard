import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Airlines from './components/Airlines/Airlines';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Airlines></Airlines>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
