import React from 'react'

import { Helmet } from 'react-helmet'

import './pricing-card2.css'

const PricingCard2 = (props) => {
  return (
    <div className="pricing-card2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="pricing-card2-pricing-card2">
        <span className="pricing-card2-text1">
          <span className="pricing-card2-text2">Save More</span>
          <br></br>
          <span className="pricing-card2-text4"></span>
          <span>With Goodplans.</span>
        </span>
        <span className="pricing-card2-text6">
          <span>
            Get onboard in minutes. Then get $49.99 credits for your next
            payment.
          </span>
        </span>
        <img
          alt="arrowrightline14614"
          src="/external/arrowrightline14614-femc.svg"
          className="pricing-card2-arrowrightline1"
        />
        <img
          alt="images314614"
          src="/external/images314614-9p31y-500w.png"
          className="pricing-card2-images31"
        />
      </div>
    </div>
  )
}

export default PricingCard2
