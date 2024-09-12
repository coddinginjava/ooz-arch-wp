import './App.css';
import { MainPage } from './pages/MainPage'
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
