import './App.css';
import Menubar from './Components/Menubar';
import BGImages from './Components/BGImages';
import LandingScreen from './Components/LandingScreen';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Menubar />
      <BGImages />
      <LandingScreen />
      <Footer />
    </div>
  );
}

export default App;