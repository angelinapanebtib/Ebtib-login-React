import React from 'react'

import { Helmet } from 'react-helmet'

import './signup-success.css'

const SignupSuccess = (props) => {
  return (
    <div className="signup-success-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="signup-success-signup-success">
        <button className="signup-success-button-frame">
          <button className="signup-success-button">
            <span className="signup-success-text10 BodyEmphasized">
              <span>Continue</span>
            </span>
          </button>
        </button>
        <div className="signup-success-home-indicator1">
          <img
            alt="HomeIndicatorI214"
            src="/external/homeindicatori214-20wh-200h.png"
            className="signup-success-home-indicator2"
          />
        </div>
        <div className="signup-success-navigation-bar">
          <div className="signup-success-status-bar">
            <div className="signup-success-time">
              <span className="signup-success-text12">
                <span>9:41</span>
              </span>
            </div>
            <div className="signup-success-levels">
              <div className="signup-success-battery">
                <img
                  alt="BorderI214"
                  src="/external/borderi214-fn0c-200h.png"
                  className="signup-success-border"
                />
                <img
                  alt="CapI214"
                  src="/external/capi214-5jul.svg"
                  className="signup-success-cap"
                />
                <img
                  alt="CapacityI214"
                  src="/external/capacityi214-y1aac-200h.png"
                  className="signup-success-capacity"
                />
              </div>
              <img
                alt="WifiI214"
                src="/external/wifii214-lje4.svg"
                className="signup-success-wifi"
              />
              <img
                alt="CellularConnectionI214"
                src="/external/cellularconnectioni214-z6ga.svg"
                className="signup-success-cellular-connection"
              />
            </div>
          </div>
          <div className="signup-success-contents">
            <div className="signup-success-titleand-controls">
              <div className="signup-success-leading">
                <div className="signup-success-arrows">
                  <div className="signup-success-arrowleft">
                    <img
                      alt="VectorI214"
                      src="/external/vectori214-eab4.svg"
                      className="signup-success-vector"
                    />
                  </div>
                </div>
                <span className="signup-success-text14 BodyEmphasized">
                  <span>Back</span>
                </span>
              </div>
              <span className="signup-success-text16 BodyEmphasized">
                <span>Create new password</span>
              </span>
            </div>
          </div>
        </div>
        <span className="signup-success-text18 Title2Emphasized">
          <span>Create new password</span>
        </span>
        <span className="signup-success-text20 Title2Emphasized">
          <span>Confirm new password</span>
        </span>
        <div className="signup-success-textfield1">
          <div className="signup-success-autolayout1">
            <span className="signup-success-text22 BodyRegular">
              <span>New password</span>
            </span>
          </div>
        </div>
        <div className="signup-success-textfield2">
          <div className="signup-success-autolayout2">
            <span className="signup-success-text24 BodyRegular">
              <span>Confirm password</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupSuccess
