import './assets/style/App.scss'
import { connect } from 'react-redux';

//- Components
import PasswordInputField from './components/password-input-field/passwordInputField'
import PasswordStrengthMeter from './components/password-strength-meter/passwordStrengthMeter'
import PasswordResultDetails from './components/password-result-details/passwordResultDetails'

function App(props) {
  const isExpanded = props.isAPIloading || props.passwordStrengthScore !== null

  return (
    <div className="App" data-testid='app'>
        <div className={`container ${isExpanded ? 'expand' : ''}`} >
          <h1 className="header-title" data-testid='appHeaderTitle'>Is your password strong enough?</h1>
          <PasswordInputField/>
          <PasswordStrengthMeter />
          <PasswordResultDetails />
        </div>
    </div>
  );
}


const mapStateToProps = state => ({
  isAPIloading: state.isAPIloading,
  passwordStrengthScore: state.passwordStrengthDetails.score
})

export default connect(mapStateToProps, {
})(App)

