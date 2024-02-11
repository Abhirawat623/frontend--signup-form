import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login, SignUp} from "./pages/index";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    
    </Routes>
  );
}

export default App;
