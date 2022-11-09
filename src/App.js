import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import Store from './components/Store';
import ProductDetails from './components/shared/ProductDetails';
import { Switch } from 'react-router-dom';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/*' element={<Navigate to='/signup' />} />
      </Routes> */}
      <ContextProvider>
        <CartContextProvider>
          <Navbar/>
          <Switch>
            <Route path='/products/:id' component={ProductDetails} />
            <Route path='/products' component={Store}/>
            <Route path='/cart' component={ShopCart}/> 
            <Redirect to='products' />
          </Switch>
        </CartContextProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
