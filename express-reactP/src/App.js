import {Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import OurServices from "./components/OurServices";
import NavBar from "./components/Navbar/NavBar";
 
function App() {
  return (
    <div>
<NavBar />
<Routes>
   <Route path= "/" element={<HomePage />}   />
   <Route path = "/ContactUs" element= {<ContactUs/>}  />
   <Route path ="OurServices" element= {<OurServices/>} />
</Routes>
</div>
  );
}
 
export default App;
