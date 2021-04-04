import './App.css';
import { Footer } from './components/Footer/Footer';
import { Section } from './components/Sections/Section';
import { Popup } from './components/Sections/Popup';


function App() {
  return (
    <div className="App">
      <Popup></Popup>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
}

export default App;
