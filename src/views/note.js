import React from 'react'

import { Helmet } from 'react-helmet'

import './note.css'

const Note = (props) => {
  return (
    <div className="note-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="note-note">
        <span className="note-text1 Title1Emphasized">
          <span>Reset password</span>
        </span>
      </div>
    </div>
  )
}

export default Note
