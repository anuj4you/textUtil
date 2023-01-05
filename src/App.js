import "./App.css";
import Navbar from "./components/Navbar";

import TextArea from "./components/TextArea";

function App() {
  return (
    <div>
  
  <Navbar title="TextUtils" item="AboutUs" />
  <TextArea heading="Enter text below" />
  
    </div>
  );
}

export default App;
