import './App.css';
import { Footer } from './components/Footer/Footer';
import { CTA } from './components/Sections/CTA';
import { Hero } from './components/Sections/Hero';
import { Investment } from './components/Sections/Investment';
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
      <Investment></Investment>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}

export default App;
