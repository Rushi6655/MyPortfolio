import './App.css';
import { Nav } from './navbar/Nav';
import { Home } from './home/Home';
import { Contact } from './contactus/Contact';
import { Portfolio } from './portfolio/Portfolio';
import { Project } from './projects/Project';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Project/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
