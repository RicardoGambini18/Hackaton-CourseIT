import "./App.css";
import react from "react";
import $ from "jquery";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Animal from "./containers/Animales";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Evento from "./containers/Evento";
import Charities from "./containers/Charities";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/animal/:id" component={Animal} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/evento/:id" component={Evento} />
                    <Route exact path="/charities" component={Charities} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
