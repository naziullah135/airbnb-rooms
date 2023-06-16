import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import RoomDetails from './components/RoomDetails';

function App() {
  return (
    <div className='lg:px-28 xl:px-28 2xl:px-96'>
      <Navbar />
      <Hero />
      <RoomDetails />
    </div>
  );
}

export default App;
