import './App.css';
import {Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Prva from './Komponente/Prva';
import Druga from './Komponente/Druga';
import Treca from './Komponente/Treca';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Prva/>}></Route>
          <Route path='/druga' element={<Druga/>}></Route>
          <Route path='/treca' element={<Treca/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
