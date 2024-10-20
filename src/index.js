import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Afterselectoffersupportbecomeprovider from './views/afterselectoffersupportbecomeprovider'
import Creatingandpostclinicpage from './views/creatingandpostclinicpage'
import Dialouge from './views/dialouge'
import Createclinicprofilepage from './views/createclinicprofilepage'
import Patientstestmoni3 from './views/patientstestmoni3'
import Explorepage from './views/explorepage'
import Dashboardselecttags from './views/dashboardselecttags'
import AIpackagetousers from './views/a-ipackagetousers'
import Images32 from './views/images32'
import Frame1sthomepgae from './views/frame1sthomepgae'
import Providerprofile from './views/providerprofile'
import Patinettestmoni2 from './views/patinettestmoni2'
import Selectwrong from './views/selectwrong'
import USERrprofile from './views/use-rrprofile'
import Patientcreatepost from './views/patientcreatepost'
import Overlay from './views/overlay'
import Userpremiumintro from './views/userpremiumintro'
import Signupready from './views/signupready'
import Providertestmoni3 from './views/providertestmoni3'
import LoginSuccess from './views/login-success'
import Finishedclinicprofilepage from './views/finishedclinicprofilepage'
import Images33 from './views/images33'
import Providertestmoni2 from './views/providertestmoni2'
import Chooserecievesupportbecomepatient from './views/chooserecievesupportbecomepatient'
import Dashboardselecttags1 from './views/dashboardselecttags1'
import Frame48095997 from './views/frame48095997'
import PricingCard2 from './views/pricing-card2'
import Providerpremiumintro from './views/providerpremiumintro'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={Afterselectoffersupportbecomeprovider}
          exact
          path="/afterselectoffersupportbecomeprovider"
        />
        <Route
          component={Creatingandpostclinicpage}
          exact
          path="/creatingandpostclinicpage"
        />
        <Route component={Dialouge} exact path="/dialouge" />
        <Route
          component={Createclinicprofilepage}
          exact
          path="/createclinicprofilepage"
        />
        <Route component={Patientstestmoni3} exact path="/patientstestmoni3" />
        <Route component={Explorepage} exact path="/explorepage" />
        <Route
          component={Dashboardselecttags}
          exact
          path="/dashboardselecttags"
        />
        <Route component={AIpackagetousers} exact path="/a-ipackagetousers" />
        <Route component={Images32} exact path="/images32" />
        <Route component={Frame1sthomepgae} exact path="/frame1sthomepgae" />
        <Route component={Providerprofile} exact path="/providerprofile" />
        <Route component={Patinettestmoni2} exact path="/patinettestmoni2" />
        <Route component={Selectwrong} exact path="/selectwrong" />
        <Route component={USERrprofile} exact path="/use-rrprofile" />
        <Route component={Patientcreatepost} exact path="/patientcreatepost" />
        <Route component={Overlay} exact path="/overlay" />
        <Route component={Userpremiumintro} exact path="/userpremiumintro" />
        <Route component={Signupready} exact path="/" />
        <Route component={Providertestmoni3} exact path="/providertestmoni3" />
        <Route component={LoginSuccess} exact path="/login-success" />
        <Route
          component={Finishedclinicprofilepage}
          exact
          path="/finishedclinicprofilepage"
        />
        <Route component={Images33} exact path="/images33" />
        <Route component={Providertestmoni2} exact path="/providertestmoni2" />
        <Route
          component={Chooserecievesupportbecomepatient}
          exact
          path="/chooserecievesupportbecomepatient"
        />
        <Route
          component={Dashboardselecttags1}
          exact
          path="/dashboardselecttags1"
        />
        <Route component={Frame48095997} exact path="/frame48095997" />
        <Route component={PricingCard2} exact path="/pricing-card2" />
        <Route
          component={Providerpremiumintro}
          exact
          path="/providerpremiumintro"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
