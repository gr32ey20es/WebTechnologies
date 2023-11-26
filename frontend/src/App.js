import {RouterProvider, router} from './login/RouterProvider';
// import Test from './test/Test';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;