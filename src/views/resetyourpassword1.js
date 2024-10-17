import React from 'react'

import { Helmet } from 'react-helmet'

import './resetyourpassword1.css'

const Resetyourpassword1 = (props) => {
  return (
    <div className="resetyourpassword1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="resetyourpassword1-resetyourpassword1">
        <button className="resetyourpassword1-button-frame">
          <button className="resetyourpassword1-button">
            <span className="resetyourpassword1-text10 BodyEmphasized">
              <span>Continue</span>
            </span>
          </button>
        </button>
        <div className="resetyourpassword1-home-indicator1">
          <img
            alt="HomeIndicatorI214"
            src="/external/homeindicatori214-4x6i-200h.png"
            className="resetyourpassword1-home-indicator2"
          />
        </div>
        <div className="resetyourpassword1-navigation-bar">
          <div className="resetyourpassword1-status-bar">
            <div className="resetyourpassword1-time">
              <span className="resetyourpassword1-text12">
                <span>9:41</span>
              </span>
            </div>
            <div className="resetyourpassword1-levels">
              <div className="resetyourpassword1-battery">
                <img
                  alt="BorderI214"
                  src="/external/borderi214-ia28-200h.png"
                  className="resetyourpassword1-border"
                />
                <img
                  alt="CapI214"
                  src="/external/capi214-fx4.svg"
                  className="resetyourpassword1-cap"
                />
                <img
                  alt="CapacityI214"
                  src="/external/capacityi214-tjaoq-200h.png"
                  className="resetyourpassword1-capacity"
                />
              </div>
              <img
                alt="WifiI214"
                src="/external/wifii214-ukh8.svg"
                className="resetyourpassword1-wifi"
              />
              <img
                alt="CellularConnectionI214"
                src="/external/cellularconnectioni214-b6o1.svg"
                className="resetyourpassword1-cellular-connection"
              />
            </div>
          </div>
          <div className="resetyourpassword1-contents">
            <div className="resetyourpassword1-titleand-controls">
              <div className="resetyourpassword1-leading">
                <div className="resetyourpassword1-arrows">
                  <div className="resetyourpassword1-arrowleft">
                    <img
                      alt="VectorI214"
                      src="/external/vectori214-hw79.svg"
                      className="resetyourpassword1-vector"
                    />
                  </div>
                </div>
                <span className="resetyourpassword1-text14 BodyEmphasized">
                  <span>Back</span>
                </span>
              </div>
              <span className="resetyourpassword1-text16 BodyEmphasized">
                <span>Reset your password</span>
              </span>
            </div>
          </div>
        </div>
        <div className="resetyourpassword1-textfield">
          <div className="resetyourpassword1-autolayout1">
            <div className="resetyourpassword1-autolayout2">
              <span className="resetyourpassword1-text18 CaptionRegular">
                <span>Email</span>
              </span>
              <span className="resetyourpassword1-text20 BodyRegular">
                <span>example@gmail.com</span>
              </span>
            </div>
          </div>
        </div>
        <span className="resetyourpassword1-text22 BodyRegular">
          <span>
            Please enter your email and we will send an OTP code in the next
            step to reset your password.
          </span>
        </span>
      </div>
    </div>
  )
}

export default Resetyourpassword1
