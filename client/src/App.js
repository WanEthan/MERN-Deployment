import { Routes, Route } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./views/MainPage";
import Create from "./views/Create";
import UpdateStore from "./views/UpdateStore";
import Detail from "./views/Detail";


function App() {
  return (
    <div className="App">
      <h1><strong>Store Finder</strong></h1>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new" element={<Create />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id" element={<UpdateStore />} />
      </Routes>
    </div>
  );
}

export default App;
