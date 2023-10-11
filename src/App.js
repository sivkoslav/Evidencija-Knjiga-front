import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddPerson from './persons/AddPerson';
import EditPerson from './persons/EditPerson';
import AddBook from './pages/books/AddBook';
import ViewBooks from './pages/books/ViewBooks';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/addperson" element={<AddPerson/>} />
        <Route exact path="/editPerson/:id" element={<EditPerson/>} />
        <Route exact path="/addBook/:id" element={<AddBook/>} />
        <Route exact path="/viewBooks/:id" element={<ViewBooks/>} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
