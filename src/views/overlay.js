import React from 'react'

import { Helmet } from 'react-helmet'

import './overlay.css'

const Overlay = (props) => {
  return (
    <div className="overlay-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="overlay-overlay">
        <div className="overlay-dialog">
          <img
            alt="imageI214"
            src="/external/imagei214-fghj.svg"
            className="overlay-image"
          />
          <div className="overlay-text1">
            <span className="overlay-text2 Title1Emphasized">
              <span>Sign up Success</span>
            </span>
            <span className="overlay-text4 BodyRegular">
              <span>Please wait.  You will be directed to the homepage</span>
            </span>
          </div>
          <div className="overlay-progress-indicator-indeterminate-spinner-regular">
            <div className="overlay-spinner">
              <img
                alt="IMAGE325I214"
                src="/external/image325i214-vze-200h.png"
                className="overlay-image325"
              />
              <img
                alt="IMAGE270I214"
                src="/external/image270i214-ylig-200h.png"
                className="overlay-image270"
              />
              <img
                alt="IMAGE225I214"
                src="/external/image225i214-jfp-200h.png"
                className="overlay-image225"
              />
              <img
                alt="IMAGE180I214"
                src="/external/image180i214-swee-200w.png"
                className="overlay-image180"
              />
              <img
                alt="IMAGE135I214"
                src="/external/image135i214-vhzf-200h.png"
                className="overlay-image135"
              />
              <img
                alt="IMAGE90I214"
                src="/external/image90i214-5wun-200h.png"
                className="overlay-image90"
              />
              <img
                alt="IMAGE45I214"
                src="/external/image45i214-nzy-200h.png"
                className="overlay-image45"
              />
              <img
                alt="IMAGE0I214"
                src="/external/image0i214-tv6m-200w.png"
                className="overlay-image0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overlay
