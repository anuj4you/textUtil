import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";

import TextArea from "./components/TextArea";

function App() {
  return (
    <div>
  
  <Navbar title="TextUtils" item="AboutUs" />
  <TextArea heading="Enter text below" />
  {/* <AboutUs/> */}
    </div>
  );
}

export default App;
