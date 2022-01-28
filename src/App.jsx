import './App.css';
import React, {useEffect} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from 'react-router-dom';


// HOC
import HomeLayoutHoc from './HOC/Home.hoc';
import RestaurantLayoutHoc from './HOC/Restaurant.hoc';
import CheckoutLayoutHoc from './HOC/Checkout.hoc';

//Pages
import HomePage from './pages/HomePage'; 
// import RestaurantPage from './pages/Restaurant';
import CheckoutPage from './pages/CheckoutPage';
import RedirectRes from './pages/Restaurant/redirectRes';
import GoogleAuth from './pages/GoogleAuth';

//components
import Overview from './components/Restaurant/Overview';
import OrderOnline from './components/Restaurant/OrderOnline';
import Reviews from './components/Restaurant/Reviews/Reviews';
import Menu from './components/Restaurant/Menu/Menu';
import Photos from './components/Restaurant/Photos/Photos';

//redux
import{useDispatch} from "react-redux";
import{getSelf} from "./redux/reducer/user/user.action";
;

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelf());
  },[localStorage])

  return (
    <>
      <Route path="/" exact>
      <Redirect to='/delivery' />
      </Route>
      <Route path='/restaurant/:id' exact component={RedirectRes} />
      <HomeLayoutHoc exact component={HomePage} path='/:type' />
      <HomeLayoutHoc exact component={GoogleAuth} path="/google/:token" />      
      <RestaurantLayoutHoc path='/restaurant/:id/overview' exact component={Overview} />
      <RestaurantLayoutHoc path='/restaurant/:id/order-online' exact component={OrderOnline} />
      <RestaurantLayoutHoc path='/restaurant/:id/review' exact component={Reviews} />
      <RestaurantLayoutHoc path='/restaurant/:id/menu' exact component={Menu} />
      <RestaurantLayoutHoc path='/restaurant/:id/photos' exact component={Photos} />
      <CheckoutLayoutHoc path='/checkout/orders' exact component={CheckoutPage} />
    </>
  );
}

export default App;
