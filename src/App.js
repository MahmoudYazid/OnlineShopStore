
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './mainpage/mainpage';
import Cart from './cart/cart';

import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
    
          <Route path='/' element={<Mainpage />} />

          <Route path='/cart' element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
