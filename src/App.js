import "./App.css";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div>
  
  <Navbar title="TextUtils" item="AboutUs" />
  <TextArea heading="Enter text here" />
  <Summary/>
    </div>
  );
}

export default App;
