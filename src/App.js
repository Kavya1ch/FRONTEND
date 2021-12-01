
import './App.css';
import Home from './components/home';
import Nav from "./components/nav";
import Login from './components/login';
import Posts from "./components/posts"
import Register from "./components/register";
import PageNotFound from './components/pagenotfound';

import Furniture from './components/furniture';
import FurnitureForm from './components/addfurniture';
import FurnitureUpdate from './components/updatefurniture';
import Report from './components/report';
import CartReport from './components/cartreport';
import OrderReport from './components/orderReport';
import BillReport from './components/billReport';
import CustReport from './components/custReport';



import { Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";




function App() {
  return (
    <div className="App">
      <Nav />
       <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/report" component={Report} />

        <Route path="/register" component={Register} />
        <Route path="/custReport" component={CustReport} />
        <Route path="/cartreport" component={CartReport} />
        <Route path="/orderReport" component={OrderReport} />
         <Route path="/billReport" component={BillReport} />


        <Route path="/furniture" component={Furniture} />
        <Route path="/furnitures/add" component={FurnitureForm}/>
        <Route path="/furnitures/update/:furnitureId" component={FurnitureUpdate}/>
        <Route exact path="/" component={Home} />
        
        
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
        
       </Switch>
    </div>
  );
}

export default App;