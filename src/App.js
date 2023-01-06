import "./App.css";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import TextArea from "./components/TextArea";

function App() {
  return (
    <div>
  
  <Navbar title="TextUtils" item="AboutUs" />
  <TextArea heading="Enter text below" /> 
  <Footer/>

  {/* <AboutUs/> */}
    </div>
  );
}

export default App;
