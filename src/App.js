import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Noterror from './pages/Noterror';
import Services from './pages/Services';
import Avis from './pages/Avis';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Sectionone from './pages/Sectionone';


function App() {
  return (
    <div className="container-fluid">
      
      <BrowserRouter>
    <Switch>

      
      <Route path="/" exact component={Sectionone}/>
      <Route path="/services" component={Services}/>
      <Route path="/avis" component={Avis}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/contact" component={Contact}/>
      <Route component={Noterror}/>
    
    </Switch>
    </BrowserRouter>
      
    </div>
    
  );
}

export default App;
