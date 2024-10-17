import React from 'react'

import { Helmet } from 'react-helmet'

import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="dashboard-dashboard">
        <img
          alt="Rectangle177258"
          src="/external/rectangle177258-ix3-200h.png"
          className="dashboard-rectangle17"
        />
        <img
          alt="user7259"
          src="/external/user7259-dh3i.svg"
          className="dashboard-user"
        />
        <img
          alt="Rectangle237259"
          src="/external/rectangle237259-3fz-500w.png"
          className="dashboard-rectangle23"
        />
        <img
          alt="Rectangle267259"
          src="/external/rectangle267259-oi7j-200h.png"
          className="dashboard-rectangle26"
        />
        <img
          alt="Rectangle287259"
          src="/external/rectangle287259-yc5-200h.png"
          className="dashboard-rectangle28"
        />
        <img
          alt="Rectangle297259"
          src="/external/rectangle297259-5065-200h.png"
          className="dashboard-rectangle29"
        />
        <span className="dashboard-text10">
          <span>
            Involves a therapist-led group where individuals share experiences
            and support each other, fostering community and understanding.
          </span>
        </span>
        <img
          alt="Rectangle277259"
          src="/external/rectangle277259-xdmm-200h.png"
          className="dashboard-rectangle27"
        />
        <span className="dashboard-text12">
          <span>
            Utilizes digital tools and platforms (like apps or online sessions)
            to provide therapy and support, making it more accessible.
          </span>
        </span>
        <span className="dashboard-text14">
          <span>Tech-assisted Therapy</span>
        </span>
        <span className="dashboard-text16">
          <span>Which mental health therapies you prefer?</span>
        </span>
        <img
          alt="logoebtib27260"
          src="/external/logoebtib27260-5f1-200h.png"
          className="dashboard-logoebtib2"
        />
        <span className="dashboard-text18">
          <span>Please select up to 2 options.</span>
        </span>
        <button className="dashboard-button">
          <span className="dashboard-text20">
            <span>Continue</span>
          </span>
        </button>
        <span className="dashboard-text22">
          <span>Expressive Therapy</span>
        </span>
        <span className="dashboard-text24">
          <span>Psychotherapy</span>
        </span>
        <span className="dashboard-text26">
          <span>Group &amp; Family Therapy</span>
        </span>
        <span className="dashboard-text28">
          <span>
            Engages in creative activities (like art, music, or dance) to
            express emotions and process experiences, promoting healing through
            self-expression.
          </span>
        </span>
        <span className="dashboard-text30">
          <span>
            One-on-one sessions with a trained therapist to explore thoughts,
            feelings, and behaviors, aiming for personal insight and healing.
          </span>
        </span>
      </div>
    </div>
  )
}

export default Dashboard
