import './App.css';
import NavBar from './components/Navigation/NavBar';
import FeedBackForm from './pages/FeedBack/FeedBackForm';
import { Route, Routes } from "react-router-dom";
import About from './pages/About/About';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/feedback" element={<FeedBackForm />} />
      </Routes>
    </div>
  );
}

export default App;
