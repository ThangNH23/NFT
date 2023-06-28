import Header from '../src/Component/Header'
import ContentHeader from './Component/ContentHeader'
import ServicesA from './Component/ServicesA'
import './style/style.css';
import './App.css';
import Admin from './Component/Admin';


function App() {
  return (
    <div className='App'>
      <div className='head'>
        <Header/>
      </div>
      <div className='content'>
        <ContentHeader/>
      </div>
      <div className='services'>
        <ServicesA/>
      </div>
      <div className='services'>
        <Admin/>
      </div>
      {/* <div className='Admin'>
        <Admin/>
      </div> */}
    </div>
  );
}

export default App;
