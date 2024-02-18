import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";
// import MyFooter from "./Components/Footer"


function App() {
  return (
    
      
      <div>


        <NavBar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        {/* <MyFooter /> */}
      </div>
    
    
  );
}

export default App;
