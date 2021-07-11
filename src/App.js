import "./App.css";
import AboutInfo from "./components/AboutInfo/AboutInfo";
import Blog from "./components/Blog/Blog";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import LoadingOverlay from "react-loading-overlay";
import BeatLoader from "react-spinners/BeatLoader";

import ClinicInfo from "./components/ClinicInfo/ClinicInfo";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import { useSelector } from "react-redux";

import Slider from "./components/Slider/Slider";

function App() {
  const { loading } = useSelector((state) => state.data);
  return (
    <div className="App" id="wrapper">
      <LoadingOverlay
        active={loading}
        spinner={<BeatLoader color="#FFA500" size={30} />}
        text=""
        color="#ffffff"
      >
        <Header />
        <Slider />
        <AboutInfo />
      </LoadingOverlay>
      <BookAppointment />
      <Services />
      <ClinicInfo />
      <Gallery />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
