import { Route, Routes } from "react-router";
import Loader from "./layout/Loader";
import Home from './components/Home';
import Login from './components/auth/Login'

const App = () => {
  return ( 
    <div>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
      </Routes>
    </div>
   );
}
 
export default App;