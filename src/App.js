
import './App.css';
import RandomContainer from './RandomContainer';
import Banner from './Banner'
import ChooseDate from './ChooseDate'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <Row>
      <Banner/>
      <ChooseDate/>
      <RandomContainer/>
    </Row>
   
  );
}

export default App;