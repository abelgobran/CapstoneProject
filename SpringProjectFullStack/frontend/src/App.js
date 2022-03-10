import './App.css';
import AddCar from './Components/AddCar';
import Nav from './Components/Nav';
import Error from './Components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Update from './Components/update';
import EditInventory from './Components/EditInventory';
import Inventory from './Components/Inventory';


function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <header>
          <Nav />
          <Routes>
            <Route path='*' element={<Error />} />
            <Route path="/" exact element={<Inventory />} />
            <Route path='inventory' element={<Inventory />} />
            <Route path='addCar' element={<AddCar />} />
            <Route path='edit' element={<EditInventory />} />
            <Route path='/car/update/:id' element={<Update />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
