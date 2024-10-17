import React from 'react'

import { Helmet } from 'react-helmet'

import './homepage.css'

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="homepage-homepage">
        <button className="homepage-next-button">
          <img
            alt="IMAGE1I727"
            src="/external/image1i727-adeq-200h.png"
            className="homepage-image1"
          />
          <img
            alt="IMAGE2I727"
            src="/external/image2i727-6qce-200h.png"
            className="homepage-image2"
          />
          <button className="homepage-button">
            <span className="homepage-text10">
              <span>Next</span>
            </span>
            <div className="homepage-frame-arrow">
              <img
                alt="Arow2I727"
                src="/external/arow2i727-siod.svg"
                className="homepage-arow2"
              />
            </div>
          </button>
        </button>
        <div className="homepage-frame1">
          <span className="homepage-text12">
            <span>Discover Personalized Care</span>
          </span>
          <span className="homepage-text14">
            <span>Ebtib</span>
          </span>
          <img
            alt="tempImagegBh24c17272"
            src="/external/tempimagegbh24c17272-12w-1000w.png"
            className="homepage-temp-imageg-bh24c1"
          />
          <span className="homepage-text16">
            <span>Offer support</span>
          </span>
          <span className="homepage-text18">
            <span>Recieve support</span>
          </span>
          <button className="homepage-radio-button">
            <img
              alt="RadioBlankRegularI238"
              src="/external/radioblankregulari238-ib73f.svg"
              className="homepage-radio-blank-regular1"
            />
          </button>
          <img
            alt="RadioBlankRegular2387"
            src="/external/radioblankregular2387-usl9.svg"
            className="homepage-radio-blank-regular2"
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage
