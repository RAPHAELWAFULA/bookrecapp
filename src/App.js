import Navbar from "./components/navbar";
import page1 from "./pages/explore";
import page2 from "./pages/recomandations";
import page3 from "./pages/library";
import pages4 from "./pages/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App () {
  return (
    <Router>
    <Navbar />
<div className="explore"
style={{
  backgroundImage:"URL(picf.jpg)",
   backgroundSize: "cover",      
  backgroundPosition: "center",
  height:"200px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
  margin:"20px"

}}>
  <h1>
    explore
  </h1>
</div>
</Router>
  );
}
export default App;