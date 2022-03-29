import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './passwordStrengthMeter.scss'
import { connect } from 'react-redux';
//- Icons
import { faEye } from '@fortawesome/free-solid-svg-icons'


function PasswordStrengthMeter(props) {

  const passwordStrength = props.passwordStrengthScore

  const getPillColor = () => {
    switch (passwordStrength) {
      case(0) :
        return 'red'
      case(1) :
        return 'red'
      case(2) :
        return 'yellow'
      case(3) :
        return 'green'
      case(4) :
        return 'green'
      default :
        return ''
    }
  }

  const getBarWidth = () => {
    switch (passwordStrength) {
      case(0) :
        return 'strength-1'
      case(1) :
        return 'strength-2'
      case(2) :
        return 'strength-3'
      case(3) :
        return 'strength-4'
      case(4) :
        return 'strength-5'
      default :
        return ''
    }
  }

  return (
    <div 
      className="password-strength-meter-container"
      data-testid='passwordStrengthMeter'
    >
      <div className='password-strength-meter-container'>
        <div className='pills-container'>
          <div className='pill'/>
          <div className='pill'/>
          <div className='pill'/>
          <div className='pill'/>
          <div className='pill'/>
        </div>
        <div 
          className={`password-strength-bar ${getPillColor()} ${getBarWidth()}`}
          data-testid='passwordStrengthMeterBar'
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  passwordStrengthScore: state.passwordStrengthDetails.score
})

export default connect(mapStateToProps, {
})(PasswordStrengthMeter)
