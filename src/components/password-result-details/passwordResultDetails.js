import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './passwordResultDetails.scss'
import { connect } from 'react-redux';

function PasswordResultDetails(props) {
  const {
    score,
    guessTimeSeconds,
    guessTimeString,
    warningString,
    suggestions
  } = props.passwordStrengthDetails

  const passwordScoreString = [
    'too weak',
    'weak',
    'okay',
    'strong',
    'very strong'
  ]

  return (
    <div className={`password-result-details-container ${score ? 'show' : ''}`}>
      <h2 
        className='password-strength-score-string'
        data-testid='passwordStrengthScoreString'
      > Your password is {passwordScoreString[score]}!
      </h2>
      <p 
        className='password-guess-time'
        data-testid='passwordStrengthScoreGuessTime'
      > It will take {guessTimeString || guessTimeSeconds + 'seconds'} to guess your password. {warningString}.
      </p>
      <p 
        className='password-suggestion-string'
        data-testid='passwordSuggestionString'
      > {suggestions}
      </p>

    </div>
  )
}

const mapStateToProps = state => ({
  passwordStrengthDetails: state.passwordStrengthDetails,
})

export default connect(mapStateToProps, {
})(PasswordResultDetails)
