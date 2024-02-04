import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";


import Favorites from "./views/Favorites";
import Home from "./views/Home"; 
import PhotoContextProvider from "./context/PhotoContext";


const App = () => {

  return (
    <div>
      <Navbar />
      <PhotoContextProvider>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
            />
          <Route
            path="/favoritos"
            element={<Favorites />}
            />
        </Routes>
      </PhotoContextProvider>
    </div>
  );
};
export default App;
