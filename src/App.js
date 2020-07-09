import React, {useState} from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from "./components/Dashboard";


function App() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <Login setUser={setUser}/>}/>
                <Route path="/login" render={() => <Login setUser={setUser}/>}/>
                <Route path="/signup" render={() => <SignUp setUser={setUser} />}/>
                <Route path="/dashboard" render={() => <Dashboard user={user} setUser={setUser} />}/>
            </Switch>
        </Router>
    );
}

export default App;
