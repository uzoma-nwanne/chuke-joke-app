import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import CategoryView from "./routes/category/category.component";
import SearchView from "./routes/category/search.component";


function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path="/category" element={<CategoryView/>}/>
            <Route path="/search" element={<SearchView/>}/>
        </Route>
    </Routes>
    
  );
}

export default App;
