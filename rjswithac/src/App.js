import './App.css';
import AddReview from './components/AddReview';
import AddSession from './components/AddSession';
import Sessions from './components/Sessions';
import Locations from './Locations';
import { Container } from "react-bootstrap";


function App() {
  return (
    <Container>
    <div className="App">
    {/* <AddReview/>
    <Locations/> */}
    <Sessions/>
    {/* <AddSession/> */}
    </div>
    </Container>
  );
}

export default App;
