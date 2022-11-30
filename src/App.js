import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./routes/navigation/navigation.component";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigation/>}></Route>
    </Routes>
    
  );
}

export default App;
