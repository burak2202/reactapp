
import './App.css';
import HeaderComponent from './components/Header';
import MainComponent from './components/Main';
import FooterComponent from './components/Footer';
import UserComponent from './components/User';
import Navbar from './components/Navbar';
function App() {
  return (
  <div className='main'>
    <h2>App components</h2>
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
    <UserComponent
    name='Burak'
    salary='3500'
    department='ICT'
    city='Rotterdam'
    
    
    />
    <UserComponent
    name='Deniz'
    salary='4500'
    department='ICT'
    city='Den Haag'
    />
      <hr/>
      
    <Navbar title= "User App123"/>
  </div>
  );
}

export default App;
