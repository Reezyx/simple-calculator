import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator/Calculator";

function App() {
  return (
    <div className="App my-8 xl:mx-96">
      <div className="bg-red-700 xl:mx-80 py-3 rounded-md">
        <p className="font-bold text-3xl text-white">Calculator Apps</p>
        <p className="text-white font-semibold">by Rudiansyah Wijaya Pratama</p>
      </div>
      <div className="my-8">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
