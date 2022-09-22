
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import NavHead from './Nav';
import Form from './form';
import Cart from './Cart';
import Payment from './method';

function App() {
  return (
    <div className="App">
           <NavHead />
        <div className='appBody'>
            <Form />
        
            <Payment />
            
            <Cart />

        </div>       
    </div>
  );
}

export default App;
