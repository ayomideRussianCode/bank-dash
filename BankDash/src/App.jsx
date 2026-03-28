
import Navbar from './components/Navbar';
import SidebarMenu from './components/SidebarMenu';
import './index.css'

function App() {

  return (
    <>
      <div className='flex '>
        <SidebarMenu />
        <Navbar />
      </div>
    </>
  );
}

export default App;
