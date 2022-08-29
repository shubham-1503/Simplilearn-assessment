import './App.css';
import {EventList} from './Components/EventList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Header/>
          <div>
            <Routes>
                <Route path ="/events" element={<EventList/>}></Route>
            </Routes>
            <Routes>
                <Route path ="/about" element={<Footer/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
      {/* <Router>

        <Link to="">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>


        <Route path="" component = {Header} />
        <Route path="/events" component = {EventList} />
        <Route path="/about" component = {Footer} /> 
        </Router> */}
       

        {/* <Header /> 
        <EventList/>
        <Footer/> */}
      
    </div>
  );
}

export default App;
