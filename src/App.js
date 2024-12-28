import Navbar from "./component/Navbar.jsx";
import "./App.css";
import Footer from "./component/Footer.jsx";
import AllRoutes from "./AllRoutes.jsx";

function App() {
  console.log(process.env.REACT_APP_BASEURL)
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
