import FileSystem from "./components/cars24";
import fileData from "../src/components/cars24/fileData.json";
function App() {
  return (
    <div className="app">
      <FileSystem fileData={fileData} />
    </div>
  );
}

export default App;
