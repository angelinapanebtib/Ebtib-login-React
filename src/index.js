import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Resetyourpassword3 from './views/resetyourpassword3'
import Signup1 from './views/signup1'
import Signup3Filled from './views/signup3-filled'
import Homepage from './views/homepage'
import Line8 from './views/line8'
import Overlay from './views/overlay'
import Resetyourpassword33Error from './views/resetyourpassword33-error'
import Arrow19 from './views/arrow19'
import Selectbehaviour from './views/selectbehaviour'
import Patientcreatepost from './views/patientcreatepost'
import Resetyourpassword2 from './views/resetyourpassword2'
import Signup13Error from './views/signup13-error'
import Explorepage from './views/explorepage'
import Resetyourpassword22Filled from './views/resetyourpassword22-filled'
import Explorepage1 from './views/explorepage1'
import Signup12Openpassword from './views/signup12-openpassword'
import Note from './views/note'
import Resetyourpassword23Error from './views/resetyourpassword23-error'
import Selectwrong from './views/selectwrong'
import Providerprofile from './views/providerprofile'
import Resetyourpassword32Filled from './views/resetyourpassword32-filled'
import Dialouge from './views/dialouge'
import Resetyourpassword1 from './views/resetyourpassword1'
import LoginSuccess from './views/login-success'
import Signup2Focus from './views/signup2-focus'
import SignupSuccess from './views/signup-success'
import Providercreatepost from './views/providercreatepost'
import ResetyourpasswordSuccess from './views/resetyourpassword-success'
import ResetyourpasswordFailure from './views/resetyourpassword-failure'
import Dashboard from './views/dashboard'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={Resetyourpassword3}
          exact
          path="/resetyourpassword3"
        />
        <Route component={Signup1} exact path="/signup1" />
        <Route component={Signup3Filled} exact path="/signup3-filled" />
        <Route component={Homepage} exact path="/homepage" />
        <Route component={Line8} exact path="/line8" />
        <Route component={Overlay} exact path="/overlay" />
        <Route
          component={Resetyourpassword33Error}
          exact
          path="/resetyourpassword33-error"
        />
        <Route component={Arrow19} exact path="/arrow19" />
        <Route component={Selectbehaviour} exact path="/selectbehaviour" />
        <Route component={Patientcreatepost} exact path="/patientcreatepost" />
        <Route
          component={Resetyourpassword2}
          exact
          path="/resetyourpassword2"
        />
        <Route component={Signup13Error} exact path="/signup13-error" />
        <Route component={Explorepage} exact path="/explorepage" />
        <Route
          component={Resetyourpassword22Filled}
          exact
          path="/resetyourpassword22-filled"
        />
        <Route component={Explorepage1} exact path="/explorepage1" />
        <Route
          component={Signup12Openpassword}
          exact
          path="/signup12-openpassword"
        />
        <Route component={Note} exact path="/" />
        <Route
          component={Resetyourpassword23Error}
          exact
          path="/resetyourpassword23-error"
        />
        <Route component={Selectwrong} exact path="/selectwrong" />
        <Route component={Providerprofile} exact path="/providerprofile" />
        <Route
          component={Resetyourpassword32Filled}
          exact
          path="/resetyourpassword32-filled"
        />
        <Route component={Dialouge} exact path="/dialouge" />
        <Route
          component={Resetyourpassword1}
          exact
          path="/resetyourpassword1"
        />
        <Route component={LoginSuccess} exact path="/login-success" />
        <Route component={Signup2Focus} exact path="/signup2-focus" />
        <Route component={SignupSuccess} exact path="/signup-success" />
        <Route
          component={Providercreatepost}
          exact
          path="/providercreatepost"
        />
        <Route
          component={ResetyourpasswordSuccess}
          exact
          path="/resetyourpassword-success"
        />
        <Route
          component={ResetyourpasswordFailure}
          exact
          path="/resetyourpassword-failure"
        />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
