import "./App.css";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import List from "./components/List";
import { DataProvider } from "./components/DataProvider";
function App() {
  return (
    <div className="App">
      <DataProvider>
      <h1>To Do List</h1>
      <FormInput />
      <List />
      <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
