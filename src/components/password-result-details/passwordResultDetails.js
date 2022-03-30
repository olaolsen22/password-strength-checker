import './passwordResultDetails.scss'
import { connect } from 'react-redux';

function PasswordResultDetails(props) {
  const {
    score = null,
    guessTimeSeconds = null,
    guessTimeString = '',
    warningString = '',
    suggestions = []
  } = props.passwordStrengthDetails

  const isAPIloading = props.isAPIloading

  const passwordScoreString = [
    'too weak',
    'weak',
    'okay',
    'strong',
    'very strong'
  ]

  const getSuggestionText = (values) => {
    let combinedSuggestions = []
    for (let i = 0; i < values.length; i ++) {
      combinedSuggestions.push(
        values[i] + (i !== values.length ? ' ' : '')
      )
    }
    return combinedSuggestions
  }

  return (
    <div className='password-result-details-container'>
      <div className='loader-container'>
        <div className={`loader ${isAPIloading ? 'show' : ''} `}/>
      </div>
      <div className={`password-result-details ${!isAPIloading && score !== null ? 'show' : ''}`}>
        <h2 
          className='password-strength-score-string'
          data-testid='passwordStrengthScoreString'
        > Your password is {passwordScoreString[score]}!
        </h2>
        <p 
          className='password-guess-time'
          data-testid='passwordStrengthScoreGuessTime'
        > It will take {guessTimeString || guessTimeSeconds + 'seconds'} to guess your password.  {warningString}
        </p>
        <p 
          className='password-suggestion-string'
          data-testid='passwordSuggestionString'
        > {getSuggestionText(suggestions)}
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAPIloading: state.isAPIloading,
  passwordStrengthDetails: state.passwordStrengthDetails,
})

export default connect(mapStateToProps, {
})(PasswordResultDetails)
