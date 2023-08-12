
import Header from './Common/Header';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Services></Services>
      <About></About>
    </div>
  );
}

export default App;
