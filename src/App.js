import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Pharmacy from './components/Pharmacy/Pharmacy';
import About from './components/About/About';
import LogIn from './components/LogIn/LogIn';
import AuthProvider from './Firebase/AuthProvider';
import PrivateRoute from './Firebase/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/pharmacy">
              <Pharmacy></Pharmacy>
            </PrivateRoute>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/about/:id">
              <About></About>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
