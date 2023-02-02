import './App.css';
import Sidebar from "./components/sidebar/sidebar";
import Timeline from "./components/timeline/timeline";
import Widgets from "./components/widget/Widgets";


function App() {
  return (
    <div className='app'>
      <Sidebar />

      {/* timeline */}
      <Timeline />

      {/* widget */}
      <Widgets />
    </div>
  );
}

export default App;
