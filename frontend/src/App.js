import {RouterProvider, router} from './login/RouterProvider';
// import Test from './test/Test';
import './App.css';
import Homepage from './homepage/Homepage.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/homepage' element={<Homepage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
