import React from 'react'

import { Helmet } from 'react-helmet'

import './signupready.css'

const Signupready = (props) => {
  return (
    <div className="signupready-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="signupready-signupready">
        <div className="signupready-home-indicator1">
          <img
            alt="HomeIndicatorI213"
            src="/external/homeindicatori213-nmqt-200h.png"
            className="signupready-home-indicator2"
          />
        </div>
        <div className="signupready-signinorup-navigation-bar">
          <div className="signupready-signinorup-navigation-bar-contents">
            <div className="signupready-titleand-controls">
              <div className="signupready-leading">
                <div className="signupready-arrows">
                  <div className="signupready-arrowleft">
                    <img
                      alt="VectorI213"
                      src="/external/vectori213-peb1l.svg"
                      className="signupready-vector"
                    />
                  </div>
                </div>
                <span className="signupready-text10 BodyEmphasized">
                  <span>Back</span>
                </span>
              </div>
              <span className="signupready-text12 BodyEmphasized">
                <span>Log in or sign up</span>
              </span>
            </div>
          </div>
        </div>
        <div className="signupready-logo-cards">
          <div className="signupready-logo">
            <span className="signupready-text14">
              <span>Ebtib.Health</span>
            </span>
          </div>
        </div>
        <button className="signupready-googlesignbutton"></button>
        <button className="signupready-button">
          <div className="signupready-google">
            <img
              alt="image1I213"
              src="/external/image1i213-xvw8-200h.png"
              className="signupready-image1"
            />
          </div>
          <span className="signupready-text16 BodyEmphasized">
            <span>Continue with Google</span>
          </span>
        </button>
        <span className="signupready-text18 CaptionFootnote">
          <span>
            By continuing I agree with Privacy Policy and Terms &amp; Conditions
          </span>
        </span>
        <img
          alt="logoebtib12257"
          src="/external/logoebtib12257-dxt-200h.png"
          className="signupready-logoebtib1"
        />
      </div>
    </div>
  )
}

export default Signupready
