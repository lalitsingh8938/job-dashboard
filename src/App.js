import Header from './components/Header';
import './App.css';
import Cards from './components/cards';
import Sidemenu from './components/sidemenu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from './components/sidemenu';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Sidemenu />
    <Routes>
      {/* Default route (Dashboard Page) */}
      <Route path="/" element={<><Dashboard /></>} />
      <Route path="/Jobs" element={<Cards />} />
            
      </Routes>
      </BrowserRouter>
  );
}

export default App;




