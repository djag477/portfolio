/* reference: https://nad.is/ */

import './Styles/App/App.css'
import NavigationBar from './components/NavigationBar.js';
import Hero from './components/Hero.js';
import PictureDiv from './components/PictureDiv.js';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <PictureDiv />

      
    </div>
  );
}

export default App;
