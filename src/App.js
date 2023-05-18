import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import VendingMachine from './VendingMachine';
import HelloPage from './HelloPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/HelloPage/" element={<HelloPage />} />
          <Route path="/" element={<VendingMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
