import Particle from './components/particle/Particle';
import Navigation from './components/navigation/Navigation';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Particle />
      <Navigation /> 
      <Rank />
      <ImageLinkForm/>
      {/* <FaceDetection/> */}
      
    </div>
  );
}

export default App;
