import './App.css';
import AboutInfo from './components/AboutInfo/AboutInfo';
import Blog from './components/Blog/Blog';
import BookAppointment from './components/BookAppointment/BookAppointment';
import ClinicInfo from './components/ClinicInfo/ClinicInfo';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App" id="wrapper">
      <Header />
      <Slider />
      <AboutInfo />
      <BookAppointment/>
      <Services />
      <ClinicInfo/>
      <Gallery />
      <Blog/>
      <Footer />
      
    </div>
  );
}

export default App;
