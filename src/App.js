import './App.css';
import DateTime from './components/DateTime';
import Quote from './components/Quote';
import Timestamp from './components/Timestamp';
import Weather from './components/Weather';

function App() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  return (
    <div>
      <Weather/>
      <Timestamp/>
      <DateTime/>
      <Quote/>
    </div>
  );
}

export default App;
