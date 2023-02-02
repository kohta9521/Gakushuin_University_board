import './App.css';
import Sidebar from "./components/sidebar/sidebar";
import Timeline from "./components/timeline/timeline";


function App() {
  return (
    <div className='app'>
      <Sidebar />

      {/* timeline */}
      <Timeline />

      {/* widget */}
    </div>
  );
}

export default App;
