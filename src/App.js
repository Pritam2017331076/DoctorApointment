import Header from "./component/Header";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import React, { useReducer, useEffect} from 'react'
import Signup from './component/Signupform'
import Login from './component/Loginform'
import Home from './component/Home'
import Doctoroption from "./component/Doctoroption";
import Patientform from './component/Patientform'
import Patientlist from './component/Patientlist'
import PatientLayout from './component/PatientLayout'
import Patientupdate from './component/Patientupdate'
function App() {
  return (
    <Router>
    <div className="App">
        <Header/>

        <Route
          exact
          path="/" component={Home} 
        />

        <Route
          path="/home" component={Home} 
        />

        <Route
          path="/signup" component={Signup} 
        />
        <Route
          path="/login" component={Login} 
        />

        <Route
          path="/doctoroption" component={Doctoroption} 
        />

        <Route
          path="/patientform" component={Patientform} 
        />
        <Route
          path="/patientlist" component={Patientlist} 
        />

        <Route
          path="/patientupdate" component={Patientupdate} 
        />

        <Route
          path="/pat" component={PatientLayout} 
        />

    </div>
    </Router>
  );
}

export default App;
