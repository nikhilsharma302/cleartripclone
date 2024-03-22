
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Hotels from './components/Hotels';
import Offers from './components/Offers';
import MyTrips from './components/MyTrips';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout className="layout"/>}>
          <Route index element={<Home/>}/>
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/mytrips" element={<MyTrips/>}/>   
        </Route> 
      </Routes>
         
        
        
         
    </div>
     
    </BrowserRouter>
  );
}

export default App;
