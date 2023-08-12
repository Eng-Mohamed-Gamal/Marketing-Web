
import Footer from './Common/Footer';
import Header from './Common/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Pricing from './Components/Pricing';
import Review from './Components/Review';
import Services from './Components/Services';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <About></About>
      <Portfolio></Portfolio>
      <Pricing></Pricing>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
