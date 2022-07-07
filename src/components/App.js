/* reference: https://nad.is/ */

import '../Styles/App/App.css';
import NavigationBar from './NavigationBar.js';
import HeroBanner from './HeroBanner.js';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroBanner />    
    </div>
  );
}

export default App;
