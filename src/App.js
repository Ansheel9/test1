import './App.css';
import { Hero } from './components/Sections/Hero';
import { MobileSol } from './components/Sections/MobileSol';
import { OneStop } from './components/Sections/OneStop';
import { Savings } from './components/Sections/Savings';
import { ThreeFeatures } from './components/Sections/ThreeFeatures';
import { WebSol } from './components/Sections/WebSol';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <OneStop></OneStop>
      <ThreeFeatures></ThreeFeatures>
      <MobileSol></MobileSol>
      <WebSol></WebSol>
      <Savings></Savings>
    </div>
  );
}

export default App;
