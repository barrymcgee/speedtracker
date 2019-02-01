import React from 'react'
import { render } from 'react-dom' // eslint-disable-line no-unused-vars

class Loader extends React.Component {
  render () {
    return (
      <div className='c-Loader'>
        <div className='c-Loader__content'>
          Loading...
        </div>
      </div>
    )
  }
}

export default Loader
